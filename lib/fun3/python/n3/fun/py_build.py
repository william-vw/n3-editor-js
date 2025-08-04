import ast
from objects import Terms
from ns import NS, xsdNs
from ast import dump, unparse

class PyBuildError(Exception):
    pass
    
class IdxedTerm:
    
    def __init__(self, term, idxes=None):
        self.term = term
        self.idxes = idxes
        
    def type(self):
        return self.term.type()
        
    def __str__(self):
        return f"{self.term}" if self.idxes is None else f"{self.term}@{self.idxes}"

class PyBuilder:
    
    def module(self, body):
        return self.__fix(ast.Module(body=body, type_ignores=[]))        

    def import_from(self, module, names):
        return self.__fix(ast.ImportFrom(module=module, names=[self.__fix(ast.alias(name=n)) for n in names], level=0))

    def import_as(self, module, alias):
        return self.__fix(ast.Import(names=[self.__fix(ast.alias(name=module, asname=alias))]))

    def fn(self, name, params=[]):
        args = [self.__fix(ast.arg(arg=p)) for p in params]

        return self.__fix(ast.FunctionDef(
            name=name,
            args=self.__fix(ast.arguments(
                args=args,
                posonlyargs=[], vararg=None, kwarg=None, defaults=[], kwonlyargs=[], kw_defaults=[]
            )),
            body=[],
            decorator_list=[]
        ))        

    def fn_body_stmt(self, fn, stmt):
        fn.body.append(stmt)

    def fn_body_stmts(self, fn, stmts):
        fn.body.extend(stmts)

    def ref(self, name):
        return self.__fix(ast.Name(id=name, ctx=ast.Load()))

    def get(self, term):
        match (term.type()):
            case Terms.VAR:
                return self.var_ref(term)
            case _:
                return self.val(term)

    def val(self, val, scope_vars=[]):
        # return self.cnst(r.idx_val())
        term = val if not isinstance(val, IdxedTerm) else val.term
        
        expr = None
        
        # replace n3 vars with python vars within scope
        if term.type() in (Terms.VAR, Terms.BNODE) and term.var_id in scope_vars:
            expr = self.var_ref(term)
        
        else:
            cls_name = None; args = None; keywords = None
            match term.type():
                case Terms.ANY:
                    expr = self.ref('ANY')
                case Terms.IRI: 
                    expr = self.iri(term)
                case Terms.LITERAL: 
                    cls_name = "Literal"
                    args = [ self.cnst(term.value) ]
                    # TODO deal with non-datatype'd literals
                    args.append(self.val(term.dt if term.dt is not None else xsdNs['string']))
                case Terms.COLLECTION: 
                    cls_name = "Collection"
                    args = [ self.lst([ self.val(el, scope_vars) for el in term ]) ]
                case Terms.GRAPH:
                    cls_name = "GraphTerm"
                    keywords = [ self.keyword('triples', self.lst([ self.triple(t, scope_vars) for t in term.model.triples() ])) ]
                case Terms.VAR:
                    cls_name = "Var"
                    args = [ self.cnst(term.name) ]
                case Terms.BNODE:
                    cls_name = "BlankNode"
                    args = [ self.cnst(term.label) ]
                case _: raise BuildException("inconceivable: " + str(term.type()))
            
            if expr is None:
                expr = self.constr_obj(self.ref(cls_name), args, keywords)
            
        if isinstance(val, IdxedTerm):
            expr = self.indexes(expr, val.idxes)
        return expr
    
    def triple(self, t, scope_vars=[]):
        return self.constr_obj(self.ref('Triple'), 
            [ self.val(t.s, scope_vars), self.val(t.p, scope_vars), self.val(t.o, scope_vars) ]
        )
    
    def iri(self, iri):
        if NS.has(iri.ns): # try for shorter code; use NS class
            ns_attr = self.attr_ref_expr(self.ref('NS'), NS.get(iri.ns).name)
            return self.index(ns_attr, iri.ln)
        else:
            return self.constr_obj(self.ref('Iri'), [ self.cnst(iri.iri) ])
    
    def var_ref(self, var):
        term = var if not isinstance(var, IdxedTerm) else var.term
        
        expr = self.ref(term.var_id)
        if isinstance(var, IdxedTerm):
            expr = self.indexes(expr, var.idxes)
        return expr

    def cnst(self, value):        
        return self.__fix(ast.Constant(value=value))
        
    def lst(self, elts):
        return self.__fix(ast.List(elts = elts, ctx = ast.Load()))
    
    def tple(self, elts):
        return self.__fix(ast.Tuple(elts = elts, ctx = ast.Load()))
    
    def dct(self, keys, values):
        return self.__fix(ast.Dict(keys = keys, values = values))
    
    def attr_ref(self, var, attr):
        return self.attr_ref_expr(self.ref(var), attr)
    
    def attr_ref_expr(self, expr, attr):
        return self.__fix(ast.Attribute(value=expr, attr=attr, ctx=ast.Load()))
        
    def keyword(self, arg, expr):
        return self.__fix(ast.keyword(arg, expr))
        
    def index(self, expr, idx):
        return self.__fix(ast.Subscript(expr, slice=self.cnst(idx), ctx=ast.Load()))

    def indexes(self, expr, idxes):
        if idxes is not None:
            for idx in idxes:
                expr = self.index(expr, idx)
        return expr

    def fn_call(self, fn, args=None, keywords=None):
        return self.__fix(ast.Call(func=fn, args=(args if args is not None else []), keywords=(keywords if keywords is not None else [])))
    
    def constr_obj(self, cls_name, args=None, keywords=None):
        return self.fn_call(cls_name, args, keywords)
    
    def lmbda(self, params, expr):
        args = [self.__fix(ast.arg(arg=p)) for p in params]

        return self.__fix(ast.Lambda(
            args=self.__fix(ast.arguments(
                args=args,
                posonlyargs=[], kwonlyargs=[], kw_defaults=[], defaults=[]
            )),
            body=expr
        ))

    def stmt(self, expr):
        return self.__fix(ast.Expr(expr))
        
    def comp(self, op1, cmp, op2):
        return self.comps(cmp, [op1, op2])
    
    def comps(self, cmp, ops):
        match cmp:
            case 'eq': cmp = ast.Eq()
            case 'neq': cmp = ast.NotEq()
            case 'gt': cmp = ast.Gt()
            case 'gte': cmp = ast.GtE()
            case 'lt': cmp = ast.Lt()
            case 'lte': cmp = ast.LtE()
            case 'is': cmp = ast.Is()
            case 'is not': cmp = ast.IsNot()
            case _: raise BuildException("inconceivable")
        self.__fix(cmp)
        
        return self.__fix(ast.Compare(left=ops[0], ops=[cmp], comparators=ops[1:]))
        
    def assn(self, var, expr):
        # I made this mistake so often I added an error for it
        if not isinstance(var, str):
            raise PyBuildError("expecting str in var assn")
            
        return self.__fix(ast.Assign(targets=[self.__fix(ast.Name(id=var, ctx=ast.Store()))],
                   value=expr))

    def noot(self, cond):
        return self.__fix(ast.BoolOp(op=ast.Not(), values=cond))

    def conj(self, conds):
        if len(conds) > 1:
            return self.__fix(ast.BoolOp(op=ast.And(), values=conds))
        else: 
            return self.__fix(conds[0])

    def disj(self, conds):
        return self.__fix(ast.BoolOp(op=ast.Or(), values=conds))

    def iif(self, cond, body, ellse=None):
        return self.__fix(ast.If(
            test=cond,
            body=body,
            orelse=ellse if ellse is not None else []))
    
    def iif_exp(self, cond, exp, ellse=None):
        return self.__fix(ast.IfExp(
            test=cond,
            body=exp,
            orelse=ellse if ellse is not None else self.cnst(False)))
    
    def pss(self):
        return self.__fix(ast.Pass())
    
    # shamelessly adapted from ast.py
    # (got too frustrated to keep using the original version)
    
    def __fix(self, node, lineno=1, col_offset=0, end_lineno=1, end_col_offset=0):
        if 'lineno' in node._attributes:
            node.lineno = lineno
        if 'end_lineno' in node._attributes:
            node.end_lineno = end_lineno
        if 'col_offset' in node._attributes:
            node.col_offset = col_offset
        if 'end_col_offset' in node._attributes:
            node.end_col_offset = end_col_offset
        return node
    
    
class BuildException(Exception):
    def __init__(self, m):
        self.m = m
    
    def __str__(self):
        return self.m