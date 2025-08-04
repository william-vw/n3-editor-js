from enum import Enum
from multidict import MultiDict
from pathlib import Path
from fun.utils import unique_sorted
from fun.py_build import PyBuilder, IdxedTerm
from objects import Var, BlankNode, ANY, Triple, Iri, Literal, GraphTerm, Terms
from model import ListModel
from ns import logNs, swapNs, xsdNs
from itertools import chain
from ast import dump, unparse


def gen_py(rules, query, data, call_query=True):
    gen = GenPython()
    return gen.gen_python(rules, query, data, call_query)


class InputData:
    
    def __init__(self, path=None, data_str=None):
        if path is None and data_str is None:
            raise "expecting either a path or data_str"
        self.path = path
        self.data_str = data_str
        
    def __str__(self):
        return f"path={self.path} ; data_str={self.data_str}"
        

class GenError(Exception):
    pass


class RuleFn:
    
    __rule_fn_prefix = "rule"
    
    def __init__(self, no, head, body, fn_name=None):
        self.no = no
        self.head = head
        self.body = body
        if fn_name is None:
            self.fn_name = self.get_fn_name()
        else:
            self.fn_name = fn_name

    def set_input_vars(self, vars):
        self.input_vars = vars
        
    def set_avail_vars(self, vars):
        self.avail_vars = vars

    def update_new_vars(self):
        self.avail_vars = self.new_vars

    def has_runtime_val(self, r):
        return r.var_id in self.avail_vars if not r.is_concrete() else False
    
    def get_fn_name(self, clause_no=0):
        return RuleFn.fn_name(self.no, clause_no)
    
    @staticmethod
    def fn_name(rule_no, clause_no=0):
        """
        Generates unique function name for a rule head or body triple

        Args:
        rule_no: rule number (0 if query)
        clause_no: number of clause

        Returns:
        Unique function name
        """
        if clause_no == 0:
            return f"{RuleFn.__rule_fn_prefix}_{rule_no}"
        else:
            return f"{RuleFn.__rule_fn_prefix}_{rule_no}_{clause_no}"
    
class QueryFn(RuleFn):
    
    __query_fn_name = "query"
    
    def __init__(self, query):
        super().__init__(-1, query, query, fn_name=QueryFn.fn_name())
    
    @staticmethod
    def fn_name(rule_no=0, clause_no=0):
        return QueryFn.__query_fn_name
    
    def get_fn_name(self, clause_no=0):
        return self.fn_name
    
class Clause:
    
    def __init__(self, rule, no, tp):
        self.rule = rule
        self.no = no
        self.tp = tp
        
        self.fn_name = rule.get_fn_name(no)
        
    def next_fn_name(self):
        return self.rule.get_fn_name(self.no + 1)
        

class FnIndex:
    
    """Map of rule predicates to functions (FnIdxEntry) implementing them.
    
    Attributes:
        - idx (MultiDict): predicate index with the following keys:
            <uri>: for triples with concrete predicate
            'var': for triples with variable predicate
            'all': all functions
    """
    
    def __init__(self):
        self.idx = MultiDict()
    
    def add(self, pred, entry):
        if pred.type() == Terms.VAR:
            self.idx.add('var', entry)
        else:
            self.idx.add(pred.idx_val(), entry)
            
        self.idx.add('all', entry)
        
    def find(self, tp):
        if tp.p.type() == Terms.VAR:
            return self.idx.getall('all')

        ret = []
        if tp.p.idx_val() in self.idx:
            ret.extend(self.idx.getall(tp.p.idx_val()))
        if 'var' in self.idx:
            ret.extend(self.idx.getall('var'))
        return ret

    def print(self):
        for k, v in self.idx.items(): print(k, ":\n", v, "\n")

class FnEntry:
    """
    An index entry for a function related to a rule head or a body triple.
    
    Attributes:
        rule: entire rule (rule head) or triple (body triple)
        fn_name (str): function name
    """

    def __init__(self, rule, rule_fn):
        self.rule = rule
        self.rule_fn = rule_fn

    def __str__(self):
        return f"<{self.rule_fn} - {str(self.rule)}>"
    def __repr__(self):
        return self.__str__()
    

class RuleProcessor_BuildFnIndex:
    
    def __init__(self):
        self.fn_idx = FnIndex()
    
    def process(self, rule_no, rule_triple):        
        entry = FnEntry(rule_triple, RuleFn.fn_name(rule_no, 0))
        
        t = rule_triple.s.model.triple_at(0) # only 1 triple
        self.fn_idx.add(t.p, entry)

    def get_index(self):
        return self.fn_idx

class RuleProcessor_UniqueVars:
    
    def __init__(self):
        self.var_cnt = 0
    
    # giving up & just giving all vars unique names
    def process(self, _, rule):
        head = rule.s
        body = rule.o
        triple_it = head.recur_vars()
        if body.type() == Terms.GRAPH:
            triple_it = chain(triple_it, body.recur_vars())
        
        # use dict to have 1 entry per variable
        # (head & body can share same variables, of course)
        unique_vars = { v:0 for v in triple_it }
        # for each unique var in head+body, assign unique value "v_i" based on var count
        unique_vars = { v:Var(f"{v}_{i}") for v,i in 
                            zip(unique_vars, range(self.var_cnt, len(unique_vars)+self.var_cnt)) }
        
        # rename vars in head & body
        head.replace_recur_vars_map(unique_vars)
        if body.type() == Terms.GRAPH:
            body.replace_recur_vars_map(unique_vars)
        
        # update var count
        self.var_cnt += len(unique_vars)

        # also _body_ bnodes; local to graph, so cannot clash across rules,
        # but can clash with s/p/o vars returned by data.find
        if body.type() == Terms.GRAPH:
            ren_bnodes = { bn: BlankNode(f"{bn}_bn") for bn in body.recur_vars(types=(Terms.BNODE,)) }
            body.replace_recur_vars_map(ren_bnodes, types=(Terms.BNODE,))


class UCmd(Enum):
    CMP = 1
    PASS = 2
    
class UDir(Enum):
    TO_MATCH = 1
    FROM_MATCH = 2
    
class UTime(Enum):
    NOW = 1
    RUNTIME = 2

class UOp:
    
    def __init__(self, cmd, dir, time, val1, val2):
        self.cmd = cmd
        self.dir = dir
        self.time = time
        self.val1 = val1 if isinstance(val1, IdxedTerm) else IdxedTerm(val1)
        self.val2 = val2 if isinstance(val2, IdxedTerm) else IdxedTerm(val2)
        
    def __str__(self):
        return f"{self.cmd} > {self.dir} @{self.time}: {self.val1}, {self.val2}"
    
class UnifyTerms:
    
    def __init__(self):
        self.__unif_vars = { UDir.FROM_MATCH: {}, UDir.TO_MATCH: {} }

    def unify(self, clause, clause_term, match_term):
        has_runtime_val = clause.rule.has_runtime_val(clause_term)
        
        # deal with _match_ bnodes (unification as usual for _clause_ bnodes)
        if match_term.type() == Terms.BNODE:
            # concrete terms in clause shouldn't match bnode in match term
            if clause_term.is_concrete():
                # (will always fail)
                yield from self.__unify_op(UCmd.CMP, UDir.TO_MATCH, UTime.NOW, match_term, clause_term)
            # clause var nodes always match bnode in match term (no further unification)
            return                
        
        if clause_term.is_concrete():
            if match_term.is_concrete():
                # look for variables inside ungrounded collections & graph terms
                if (clause_term.is_container() and match_term.is_container()) and \
                    (not clause_term.is_grounded() or not match_term.is_grounded()):
                        
                        if clause_term.type() == match_term.type() and len(clause_term) == len(match_term):
                            for clause_term2, match_term2 in zip(clause_term.iter_terms(), match_term.iter_terms()):
                                yield from self.unify(clause, clause_term2, match_term2)
                            return

                yield from self.__unify_op(UCmd.CMP, UDir.TO_MATCH, UTime.NOW, clause_term, match_term)
            
            else:
                yield from self.__unify_op(UCmd.PASS, UDir.TO_MATCH, UTime.NOW, clause_term, match_term)
                
                if clause_term.is_container() and not clause_term.is_grounded():
                    yield from self.__unify_var_ungrcont(UCmd.PASS, UDir.FROM_MATCH, match_term, clause_term)
        else:
            if match_term.is_concrete():
                if has_runtime_val:
                    # (compare also takes care of checking variable's type, length etc)
                    yield from self.__unify_op(UCmd.CMP, UDir.TO_MATCH, UTime.RUNTIME, clause_term, match_term)
                
                # (possible that runtime var is ANY (i.e., variable in query), so also get result from match)
                yield from self.__unify_op(UCmd.PASS, UDir.FROM_MATCH, UTime.NOW, match_term, clause_term)
                
                if match_term.is_container() and not match_term.is_grounded():
                    yield from self.__unify_var_ungrcont(UCmd.PASS, UDir.TO_MATCH, clause_term, match_term)
            else:
                # (idem)
                if has_runtime_val:
                    yield from self.__unify_op(UCmd.PASS, UDir.TO_MATCH, UTime.RUNTIME, clause_term, match_term)

                yield from self.__unify_op(UCmd.PASS, UDir.FROM_MATCH, UTime.RUNTIME, match_term, clause_term)
        
    def __unify_var_ungrcont(self, cmd, dir, var_term, coll_term):
        for atomic in coll_term.iter_atomics():
            atomic_term = atomic[1]
            
            # only need values for variables
            if not atomic_term.is_concrete():
                positions = atomic[0]
                idxes = [ position[0] for position in positions ]
                yield from self.__unify_op(cmd, dir, UTime.RUNTIME, IdxedTerm(var_term, idxes), atomic_term)

    def __unify_op(self, cmd, dir, time, term1, term2):
        # (already know term2 won't be concrete)
        if cmd == UCmd.PASS:
            # passing two different args to the same var; unify args
            if term2.var_id in self.__unif_vars[dir]:
                cmp1 = self.__unif_vars[dir][term2.var_id]
                cmp2 = term1
                yield UOp(UCmd.CMP, dir, UTime.RUNTIME, cmp1, cmp2)
            else:
                self.__unif_vars[dir][term2.var_id] = term1
        
        yield UOp(cmd, dir, time, term1, term2)
    

class ConditionalStmt:
    
    def __init__(self, conds = None):
        self.conds = conds if conds is not None else []

    
class FnCall(ConditionalStmt):
    
    def __init__(self, ref, params=None, args=None):
        super().__init__()
        
        self.ref = ref        
        self.args = {}
        if params is not None:
            for i in range(len(params)):
                self.args[params[i]] = args[i]
    
    def set_params(self, params, default):
        for param in params:
            self.args[param] = default
            
    def set_arg(self, param, arg):
        if param in self.args:
            self.args[param] = arg
    
    def get_params(self):
        return list(self.args.keys())
    
    def get_args(self):
        return list(self.args.values())
    
    def copy_shallow(self):
        return FnCall(self.ref, params=list(self.args.keys()), args=list(self.args.values()))

   
class GenPython:

    def __init__(self):
        self.bld = PyBuilder()
                
        self.__rule_buildFnIdx = RuleProcessor_BuildFnIndex()
        self.__rule_renameVars = RuleProcessor_UniqueVars()
        
        self.names = {
            'final_ctu': "final_ctu"
        }

    def gen_python(self, rules, query, data, call_query):
        query = GraphTerm(triples=[query])
        self.__process_query(query)
        self.__process_rules(rules)
        
        self.code_imports = []; self.code_body = []
        self.__gen_data_python(data)
        self.__gen_rule_python(rules, query, call_query)
        
        return self.bld.module(self.code_imports + self.code_body)

    def __gen_data_python(self, data):
        if data.path is not None:
            import_fn = 'parse_n3_file'
            assn = self.bld.assn('data', 
                self.bld.attr_ref_expr(
                    self.bld.fn_call(self.bld.ref('parse_n3_file'), [ self.bld.cnst(str(data.path.resolve()))] ),
                    'data'
                ))
        elif data.data_str is not None:
            import_fn = 'parse_n3'
            assn = self.bld.assn('data', 
                self.bld.attr_ref_expr(
                    self.bld.fn_call(self.bld.ref('parse_n3'), [ self.bld.cnst(data.data_str)] ),
                    'data'
                ))
        else:
            raise "require a data path or string to load from"
        
        self.code_imports.append(self.bld.import_from('parse', [import_fn]))
        
        self.code_body.append(assn)
        
    def __gen_rule_python(self, rules, query, call_query):
        self.code_imports.append(self.bld.import_from('objects', ['ANY', 'Terms', 'Iri', 'Var', 'Literal', 'Collection', 'GraphTerm', 'Triple']))
        self.code_imports.append(self.bld.import_from('ns', ['NS']))
        self.code_imports.append(self.bld.import_from('lib.emit', ['emit']))
        
        query_fn = self.__gen_rule(QueryFn(query))
        
        for i, (head, _, body) in enumerate(rules):
            rule_fn = RuleFn(i, head, body)
            self.__gen_rule(rule_fn)
        
        if call_query:
            self.__gen_call_rule(query_fn)
        
    def __process_query(self, query):
        query_rule = Triple(query, logNs['implies'], Literal(True, xsdNs['boolean']))
        self.__rule_renameVars.process(-1, query_rule)
        
    def __process_rules(self, rules):
        """
        Pre-process the given set of rules. 
        It renames all variables per rule so they are unique across all rules to simplify matters.
        It creates an index (__pred_idx) that maps head triple predicates to function names.
        
        Args:
            rules (collection): set of triples representing rules 
        """

        for rule_no in range(len(rules)):
            rule = rules[rule_no]
            
            # top-down rules need heads with len 1
            if len(rule.s.model) != 1:
                print(f"warning: cannot use rule, length of head > 1 ({rule})")
                del rules[rule_no]; continue
            # only top-down rules
            if rule.p.iri == logNs['implies'].iri:
                print(f"warning: cannot use bottom-up rule ({rule})")
                del rules[rule_no]; continue

            self.__rule_renameVars.process(rule_no, rule)
            self.__rule_buildFnIdx.process(rule_no, rule)
        
        self.__fn_idx = self.__rule_buildFnIdx.get_index()
        # self.__fn_idx.print()
    
    def __gen_rule(self, rule):
        head_triple = rule.head.model.triple_at(0)
        # other rules can only pass values for universals (VAR, _no_ BNODE)
        head_vars = unique_sorted(head_triple.recur_vars(types=(Terms.VAR,), get_id=True))
        rule.set_input_vars(head_vars)
        # also, only universals from head will be available in body
        rule.set_avail_vars(head_vars)
        
        final_ctu_call = self.__get_ctu_call(self.names['final_ctu'], head_vars, final=True)
        
        # empty rule body
        if (rule.body.type()==Terms.GRAPH and len(rule.body.model) == 0) or \
            rule.body==Literal(True, xsdNs['boolean']):
            
            clause = Clause(rule, 0, None)
            self.__gen_empty_clause(clause, final_ctu_call)
        
        elif rule.body.type()==Terms.GRAPH:
            for no, tp in enumerate(rule.body.model.triples()):
                clause = Clause(rule, no, tp)
                # but, bnodes in body triple will be available to subsequent body triples
                new_avail_vars = unique_sorted(rule.avail_vars + tp.recur_vars(types=(Terms.VAR,Terms.BNODE),get_id=True))

                if no == len(rule.body.model)-1:
                    ctu_call = final_ctu_call
                else:
                    ctu_call = self.__get_ctu_call(clause.next_fn_name(), new_avail_vars)
                self.__gen_clause(clause, ctu_call)

                rule.set_avail_vars(new_avail_vars)

        return rule

    def __gen_empty_clause(self, clause, ctu_call):
        clause_fn_def = self.bld.fn(clause.fn_name, self.__get_fn_params(clause.rule.avail_vars))

        # directly call ctu with same args
        ctu_call_bld = self.bld.stmt(self.bld.fn_call(ctu_call.ref, ctu_call.get_args()))
        
        self.bld.fn_body_stmts(clause_fn_def, [ ctu_call_bld ])
        
        self.code_body.append(clause_fn_def)

    def __gen_clause(self, clause, ctu_call):
        clause_fn_def = self.bld.fn(clause.fn_name, self.__get_fn_params(clause.rule.avail_vars))

        if self.__is_builtin(clause):
            clause_fn_body = self.__gen_builtin(clause, ctu_call)
        else:
            clause_fn_body = chain(
                self.__gen_find_data(clause, ctu_call),
                self.__gen_find_rules(clause, ctu_call)
            )
        
        self.bld.fn_body_stmts(clause_fn_def, clause_fn_body)
        
        self.code_body.append(clause_fn_def)

    def __is_builtin(self, clause):
        return clause.tp.p.type() == Terms.IRI and clause.tp.p.iri.startswith(swapNs.iri)

    def __gen_builtin(self, clause, ctu_call):
        pck_name = clause.tp.p.ns[len(swapNs.iri):-1]
        name = clause.tp.p.ln
        
        fn_name = f"{pck_name}_{name}"
        self.code_imports.append(self.bld.import_from(f'fun.builtins.{pck_name}', [ fn_name ]))
        
        blt_id = f"{pck_name}#{name}"
        match_tp = Triple(Var("s"), swapNs[blt_id], Var("o"))
        fn_call = FnCall(self.bld.ref(fn_name))
        
        yield from self.__gen_match_call(clause, match_tp, fn_call, ctu_call.copy_shallow())

    def __gen_find_data(self, clause, ctu_call):
        match_tp = Triple(Var("s"), Var("p"), Var("o"))
        fn_call = FnCall(self.bld.attr_ref('data', 'find'))
        
        # (copy ctu_call as different calls may require different conditions for it)
        yield from self.__gen_match_call(clause, match_tp, fn_call, ctu_call.copy_shallow())

    def __gen_find_rules(self, clause, ctu_call):
        matches = self.__fn_idx.find(clause.tp)
        
        for match in matches:
            match_tp = match.rule.s.model.triple_at(0)
            # for recursive rules (referring to themselves)
            # rename vars in match tp to avoid overlap with this tp (both are same tp!)
            match_tp = Triple(*[Var(f"{t.name}_m") if t.type() == Terms.VAR else t for t in match_tp])
            
            fn_call = FnCall(self.bld.ref(match.rule_fn))
            
            # (copy ctu_call as different calls may require different conditions for it)
            yield from self.__gen_match_call(clause, match_tp, fn_call, ctu_call.copy_shallow())

    def __gen_match_call(self, clause, match_tp, fn_call, ctu_call):
        match_vars = unique_sorted(match_tp.recur_vars(get_id=True))
        fn_call.set_params(match_vars, default=self.bld.ref('ANY'))
        
        if not self.__unify(clause, match_tp, fn_call, ctu_call):
            return

        # (some will have been overwritten by unify)
        ctu_args = ctu_call.get_args()
        
        ctu_call_bld = self.bld.fn_call(ctu_call.ref, ctu_args)
        ctu_call_bld = self.__cond_call(ctu_call, ctu_call_bld, as_exp=True)

        lmbda_params = unique_sorted(match_vars)
        lmbda_bld = self.bld.lmbda(lmbda_params, ctu_call_bld)

        fn_args = fn_call.get_args()
        fn_args.append(lmbda_bld)
        
        fn_call_bld = self.bld.stmt(self.bld.fn_call(fn_call.ref, fn_args))
        fn_call_bld = self.__cond_call(fn_call, fn_call_bld, as_exp=False)

        yield fn_call_bld
        
    def __cond_call(self, call, call_bld, as_exp):
        if len(call.conds) > 0:
            if as_exp:
                return self.bld.iif_exp(self.bld.conj(call.conds), call_bld)
            else:
                return self.bld.iif(self.bld.conj(call.conds), [ call_bld ])
        
        return call_bld

    def __gen_call_rule(self, rule_fn):
        head_triple = rule_fn.head.model.triple_at(0)
        ret_args = rule_fn.input_vars
        
        lmbda_params = ret_args
        # inst_triple_call = self.bld.fn_call(
        #     self.bld.attr_ref_expr(self.bld.triple(head_triple), 'instantiate'),
        #     [ self.bld.dct([self.bld.cnst(arg) for arg in ret_args], [self.bld.ref(arg) for arg in ret_args]) ]
        # )
        lmbda_body = self.bld.fn_call(self.bld.ref('emit'), [ self.bld.triple(head_triple), 
                                                             self.bld.dct([self.bld.cnst(arg) for arg in ret_args], 
                                                                          [self.bld.ref(arg) for arg in ret_args]) ])
        lmbda_ctu = self.bld.lmbda(lmbda_params, lmbda_body)
        
        args = [ self.bld.val(ANY) for _ in ret_args ] + [ lmbda_ctu ]
        call_bld = self.bld.stmt(self.bld.fn_call(self.bld.ref(rule_fn.fn_name), args))
        self.code_body.append(call_bld)

    def __unify(self, clause, match_tp, fn_call, ctu_call):
        # print()
        # print("unify:\n", clause.tp, "\n", match_tp)
        
        unifier = UnifyTerms()
        for pos in range(3):
            clause_term = clause.tp[pos]
            match_term = match_tp[pos]
            
            for op in unifier.unify(clause, clause_term, match_term):
                # print("op", op)
                
                match (op.cmd):
                    case UCmd.CMP:
                        match (op.time):
                            case UTime.NOW:
                                if clause_term != match_term:
                                    return False
                            case UTime.RUNTIME:
                                rel_call = fn_call if op.dir == UDir.TO_MATCH else ctu_call
                                cmp = self.bld.comp(self.bld.get(op.val1), 'eq', self.bld.get(op.val2))
                                rel_call.conds.append(cmp)

                    case UCmd.PASS:
                        match (op.dir):
                            case UDir.TO_MATCH:
                                match (op.time):
                                    case UTime.NOW:
                                        to_vars = clause.rule.avail_vars
                                        fn_call.set_arg(op.val2.term.var_id, self.bld.val(op.val1, scope_vars=to_vars))
                                    case UTime.RUNTIME:
                                        fn_call.set_arg(op.val2.term.var_id, self.bld.var_ref(op.val1))

                            case UDir.FROM_MATCH:
                                match (op.time):
                                    case UTime.NOW:
                                        from_vars = match_tp.recur_vars(get_id=True)
                                        ctu_call.set_arg(op.val2.term.var_id, self.bld.val(op.val1, scope_vars=from_vars))
                                    case UTime.RUNTIME:
                                        ctu_call.set_arg(op.val2.term.var_id, self.bld.var_ref(op.val1))

        return True
    
    def __get_ctu_call(self, name, params, final=False):
        params = self.__get_fn_params(params, final)
        
        return FnCall(self.bld.ref(name), 
            params=params,
            # by default, pass the same params to ctu (as args)
            # some of these will be overwritten by the unification
            args=[self.bld.ref(p) for p in params])
    
    def __get_fn_params(self, params, final=False):
        return params + [ self.names['final_ctu'] ] if not final else params