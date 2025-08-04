from antlr4 import *
import uritools
from grammar.parser.n3Lexer import n3Lexer
from grammar.parser.n3Parser import n3Parser
from grammar.parser.n3Listener import n3Listener

from model import MultiDictModel, ListModel
from objects import Terms, Iri, Collection, Var, BlankNode, Literal, GraphTerm, Triple
from ns import rdfNs, owlNs, logNs, xsdNs

class state:
    
    # parent
    
    # path_item
    # triple
    # iri_mode (None/'ipl'/'rdflit')
    # dt
    # collection
    # formula
    # var_sink
    # path_cnt
    # path_step
    # path_dir
    # inv_pred
    
    # base
    # prefixes
    # data
    # bnodes
    # rules    
    
    def __init__(self, parent=None, new_scope=False, has_vars=False):
        self.parent = parent
        self.path_item = None
        self.triple = Triple()
        self.iri_mode = None
        self.dt = None
        self.collection = None
        self.formula = None
        self.var_sink = None
        self.path_cnt = 0
        self.path_step = None
        self.path_dir = None
        self.inv_pred = False
        
        # always copy base & prefixes
        if parent is not None:
            self.base = parent.base
            # subgraphs can have "local" prefixes
            self.prefixes = { k: v for k, v in parent.prefixes.items() }
        else:
            self.base = None; self.prefixes = {}
        
        if parent is None or new_scope:
            # cannot hash variables in multidict model...
            if parent is None and not has_vars:
                self.data = MultiDictModel()
            else: # use listmodel for graph terms
                self.data = ListModel()
            self.bnodes = {}
        else:
            self.data = parent.data
            self.bnodes = parent.bnodes
           
        self.rules = []
        
    def sub(self, new_scope=False):
        return state(self, new_scope)
    
    def bnode(self, label=None):
        if label is None:
            return BlankNode()
        else:
            if label not in self.bnodes:
                # https://w3c.github.io/N3/spec/semantics.html
                # bnodes are only local to current graph
                # so, only _per scope_, return same bnode for same label
                # (random ID so not to overlap with bnodes in other graphs)
                self.bnodes[label] = BlankNode(label) 
            
            return self.bnodes[label]
        
    def start_collect(self):
        self.collection = Collection()
        self.var_sink = self.collection
        
    def is_collecting(self):
        return self.collection is not None
        
    def end_collect(self):        
        ret = self.collection
        self.collection = None
        self.var_sink = None
        return ret
    
    def start_formula(self):
        self.formula = GraphTerm(model=self.data)
        self.var_sink = self.formula
        
    def end_formula(self):
        ret = self.formula
        self.formula = None
        self.var_sink = None
        return ret
    
    def parsed_var(self, var):
        if self.var_sink is not None:
            self.var_sink._parsed_var(var.name)
    
    def parsed_vars(self, vars):
        if self.var_sink is not None:
            self.var_sink._parsed_vars(vars)
        
class n3ParseError(Exception):
    pass

class n3Creator(n3Listener):
    
    def __init__(self, has_vars=False):
        self.state = state(has_vars=has_vars)
    
    # Enter a parse tree produced by n3Parser#n3Doc.
    def enterN3Doc(self, ctx:n3Parser.N3DocContext):
        pass

    # Exit a parse tree produced by n3Parser#n3Doc.
    def exitN3Doc(self, ctx:n3Parser.N3DocContext):
        pass

    # Enter a parse tree produced by n3Parser#n3Statement.
    def enterN3Statement(self, ctx:n3Parser.N3StatementContext):
        pass

    # Exit a parse tree produced by n3Parser#n3Statement.
    def exitN3Statement(self, ctx:n3Parser.N3StatementContext):
        pass

    # Enter a parse tree produced by n3Parser#n3Directive.
    def enterN3Directive(self, ctx:n3Parser.N3DirectiveContext):
        pass

    # Exit a parse tree produced by n3Parser#n3Directive.
    def exitN3Directive(self, ctx:n3Parser.N3DirectiveContext):
        pass


    # Enter a parse tree produced by n3Parser#sparqlDirective.
    def enterSparqlDirective(self, ctx:n3Parser.SparqlDirectiveContext):
        pass

    # Exit a parse tree produced by n3Parser#sparqlDirective.
    def exitSparqlDirective(self, ctx:n3Parser.SparqlDirectiveContext):
        pass


    # Enter a parse tree produced by n3Parser#sparqlBase.
    def enterSparqlBase(self, ctx:n3Parser.SparqlBaseContext):
        pass

    # Exit a parse tree produced by n3Parser#sparqlBase.
    def exitSparqlBase(self, ctx:n3Parser.SparqlBaseContext):
        self.state.base = self.text(ctx.IRIREF())[1:-1]


    # Enter a parse tree produced by n3Parser#sparqlPrefix.
    def enterSparqlPrefix(self, ctx:n3Parser.SparqlPrefixContext):
        pass

    # Exit a parse tree produced by n3Parser#sparqlPrefix.
    def exitSparqlPrefix(self, ctx:n3Parser.SparqlPrefixContext):
        self.process_prefix(ctx.PNAME_NS(), ctx.IRIREF())


    # Enter a parse tree produced by n3Parser#prefixID.
    def enterPrefixID(self, ctx:n3Parser.PrefixIDContext):
        pass

    # Exit a parse tree produced by n3Parser#prefixID.
    def exitPrefixID(self, ctx:n3Parser.PrefixIDContext):
        self.process_prefix(ctx.PNAME_NS(), ctx.IRIREF())


    # Enter a parse tree produced by n3Parser#base.
    def enterBase(self, ctx:n3Parser.BaseContext):
        pass

    # Exit a parse tree produced by n3Parser#base.
    def exitBase(self, ctx:n3Parser.BaseContext):
        self.state.base = self.text(ctx.IRIREF())[1:-1]


    # Enter a parse tree produced by n3Parser#triples.
    def enterTriples(self, ctx:n3Parser.TriplesContext):
        pass

    # Exit a parse tree produced by n3Parser#triples.
    def exitTriples(self, ctx:n3Parser.TriplesContext):
        pass


    # Enter a parse tree produced by n3Parser#predicateObjectList.
    def enterPredicateObjectList(self, ctx:n3Parser.PredicateObjectListContext):
        pass

    # Exit a parse tree produced by n3Parser#predicateObjectList.
    def exitPredicateObjectList(self, ctx:n3Parser.PredicateObjectListContext):
        pass


    # Enter a parse tree produced by n3Parser#objectList.
    def enterObjectList(self, ctx:n3Parser.ObjectListContext):
        pass

    # Exit a parse tree produced by n3Parser#objectList.
    def exitObjectList(self, ctx:n3Parser.ObjectListContext):
        self.state.inv_pred = False


    # Enter a parse tree produced by n3Parser#verb.
    def enterVerb(self, ctx:n3Parser.VerbContext):
        pass

    # Exit a parse tree produced by n3Parser#verb.
    def exitVerb(self, ctx:n3Parser.VerbContext):
        # all these tokens use expression production, not predicate
        if ctx.predicate() is None:
            token = ctx.start.text.strip()
            
            predicate = None
            # 'has' has no side-effects
            match token:
                case 'a': predicate = rdfNs['type']
                case 'is': self.state.inv_pred = True
                case '=': predicate = owlNs['sameAs']
                case '=>': predicate = logNs["implies"]
                case '<=': predicate = logNs["impliedBy"]

            if predicate is not None:
                self.state.path_item = predicate
            
        self.state.triple.p = self.state.path_item

    # Enter a parse tree produced by n3Parser#subject.
    def enterSubject(self, ctx:n3Parser.SubjectContext):
        pass

    # Exit a parse tree produced by n3Parser#subject.
    def exitSubject(self, ctx:n3Parser.SubjectContext):
        self.state.triple.s = self.state.path_item


    # Enter a parse tree produced by n3Parser#predicate.
    def enterPredicate(self, ctx:n3Parser.PredicateContext):
        pass

    # Exit a parse tree produced by n3Parser#predicate.
    def exitPredicate(self, ctx:n3Parser.PredicateContext):
        token = ctx.start.text.strip()
        
        if token == "<-":
            self.state.inv_pred = True # disabled in exitObjectList


    # Enter a parse tree produced by n3Parser#object.
    def enterObject(self, ctx:n3Parser.ObjectContext):
        pass

    # Exit a parse tree produced by n3Parser#object.
    def exitObject(self, ctx:n3Parser.ObjectContext):
        if self.state.is_collecting():
            self.state.collection._parsed_el(self.state.path_item)
        else:
            self.state.triple.o = self.state.path_item
            
            triple = self.state.triple
            self.emit_triple(triple)
            # so predicateLists etc work
            self.state.triple = triple.copy_shallow()


    # Enter a parse tree produced by n3Parser#expression.
    def enterExpression(self, ctx:n3Parser.ExpressionContext):
        pass

    # Exit a parse tree produced by n3Parser#expression.
    def exitExpression(self, ctx:n3Parser.ExpressionContext):
        pass


    # Enter a parse tree produced by n3Parser#path.
    def enterPath(self, ctx:n3Parser.PathContext):
        # print("enterPath", self.state.path_item)
        
        # in a path, unfortunately
        if self.state.path_cnt > 0 and self.state.path_item is not None:
            
            if self.state.path_cnt == 1: # but, don't have enough yet
                # current path_item will be first step
                # next path_item (still unknown) will be predicate
                self.state.path_step = self.state.path_item
            
            else: # have enough now; current path_item will be predicate
                # from now on, next step will be blank node object
                self.state.path_step = self.emit_path()
                
        self.state.path_dir = self.text(ctx.parentCtx.getChild(1))
        self.state.path_cnt += 1

    # Exit a parse tree produced by n3Parser#path.
    def exitPath(self, ctx:n3Parser.PathContext):
        # print("exitPath")
        # had ourselves a path here
        if self.state.path_cnt > 1: # complete last path step
            # rest will continue from blank node object
            self.state.path_item = self.emit_path()
        
        self.state.path_cnt = 0

    def emit_path(self):
        prior_step = self.state.path_step
        pred = self.state.path_item
        next_step = BlankNode()
        # print(prior_step, pred, next_step)
        if self.state.path_dir == "!":
            self.emit_triple(Triple(prior_step, pred, next_step))
        else:
            self.emit_triple(Triple(next_step, pred, prior_step))
        return next_step
        

    # Enter a parse tree produced by n3Parser#path_item.
    def enterPathItem(self, ctx:n3Parser.PathItemContext):
        pass

    # Exit a parse tree produced by n3Parser#path_item.
    def exitPathItem(self, ctx:n3Parser.PathItemContext):
        pass


    # Enter a parse tree produced by n3Parser#literal.
    def enterLiteral(self, ctx:n3Parser.LiteralContext):
        pass

    # Exit a parse tree produced by n3Parser#literal.
    def exitLiteral(self, ctx:n3Parser.LiteralContext):
        lit = ctx.BooleanLiteral()
        if lit is not None:
            self.state.path_item = Literal(self.bool(lit), xsdNs['boolean'])

    # Enter a parse tree produced by n3Parser#blankNodePropertyList.
    def enterBlankNodePropertyList(self, ctx:n3Parser.BlankNodePropertyListContext):
        self.state = self.state.sub()
        
        # use same bnode as subject for properties in list
        self.state.triple[0] = self.state.bnode()

    # Exit a parse tree produced by n3Parser#blankNodePropertyList.
    def exitBlankNodePropertyList(self, ctx:n3Parser.BlankNodePropertyListContext):
        # bnode for property list
        bnode = self.state.triple[0]
        
        self.state = self.state.parent
        # use bnode as path_item (e.g., object)
        self.state.path_item = bnode


    # Enter a parse tree produced by n3Parser#iriPropertyList.
    def enterIriPropertyList(self, ctx:n3Parser.IriPropertyListContext):
        self.state = self.state.sub()
        
        # use next iri as subject for properties in ipl
        self.state.iri_mode = 'ipl'

    # Exit a parse tree produced by n3Parser#iriPropertyList.
    def exitIriPropertyList(self, ctx:n3Parser.IriPropertyListContext):
         # iri for property list
        iri = self.state.triple[0]
        
        self.state = self.state.parent
        # use iri as path_item (e.g., object)
        self.state.path_item = iri


    # Enter a parse tree produced by n3Parser#collection.
    def enterCollection(self, ctx:n3Parser.CollectionContext):
        self.state = self.state.sub()
        
        self.state.start_collect()

    # Exit a parse tree produced by n3Parser#collection.
    def exitCollection(self, ctx:n3Parser.CollectionContext):
        collection = self.state.end_collect()
        self.state = self.state.parent
        
        # self.state.parsed_vars(collection._recur_vars())
        
        self.state.path_item = collection


    # Enter a parse tree produced by n3Parser#formula.
    def enterFormula(self, ctx:n3Parser.FormulaContext):
        self.state = self.state.sub(new_scope=True)
        
        self.state.start_formula()

    # Exit a parse tree produced by n3Parser#formula.
    def exitFormula(self, ctx:n3Parser.FormulaContext):
        graph_term = self.state.end_formula()
        self.state = self.state.parent
        
        # self.state.parsed_vars(graph_term._recur_vars())
        
        self.state.path_item = graph_term
        

    # Enter a parse tree produced by n3Parser#formulaContent.
    def enterFormulaContent(self, ctx:n3Parser.FormulaContentContext):
        pass

    # Exit a parse tree produced by n3Parser#formulaContent.
    def exitFormulaContent(self, ctx:n3Parser.FormulaContentContext):
        pass


    # Enter a parse tree produced by n3Parser#numericLiteral.
    def enterNumericLiteral(self, ctx:n3Parser.NumericLiteralContext):
        pass

    # Exit a parse tree produced by n3Parser#numericLiteral.
    def exitNumericLiteral(self, ctx:n3Parser.NumericLiteralContext):
        n = None; dt = None
        
        if ctx.INTEGER() is not None:
            n = self.int(ctx.INTEGER()); dt = xsdNs['int']
        elif ctx.DOUBLE() is not None:
            n = self.double(ctx.DOUBLE()); dt = xsdNs['double']
        elif ctx.DECIMAL() is not None:
            n = self.decimal(ctx.DECIMAL()); dt = xsdNs['decimal']
        
        if n is not None:
            self.state.path_item = Literal(n, dt)

    # Enter a parse tree produced by n3Parser#rdfLiteral.
    def enterRdfLiteral(self, ctx:n3Parser.RdfLiteralContext):
        self.state.iri_mode = 'rdflit'

    # Exit a parse tree produced by n3Parser#rdfLiteral.
    def exitRdfLiteral(self, ctx:n3Parser.RdfLiteralContext):
        lex = self.string(ctx.String())
        lng = self.text(ctx.LANGTAG())[1:] if ctx.LANGTAG() is not None else None
        
        dt = self.state.dt if self.state.dt is not None else None
        self.state.iri_mode = None; self.state.dt = None
        
        self.state.path_item = Literal(lex, dt, lng)

    # Enter a parse tree produced by n3Parser#iri.
    def enterIri(self, ctx:n3Parser.IriContext):
        pass

    # Exit a parse tree produced by n3Parser#iri.
    def exitIri(self, ctx:n3Parser.IriContext):
        iri_ref = ctx.IRIREF()
        
        if iri_ref is not None:
            iri_ref = Iri(self.iri(iri_ref))
            self.process_iri(iri_ref)


    # Enter a parse tree produced by n3Parser#prefixedName.
    def enterPrefixedName(self, ctx:n3Parser.PrefixedNameContext):
        pass

    # Exit a parse tree produced by n3Parser#prefixedName.
    def exitPrefixedName(self, ctx:n3Parser.PrefixedNameContext):
        pname_ln = ctx.PNAME_LN()
        
        # TODO optimize this code
        
        iri_ref = None
        if pname_ln is not None:
            pname_ln = pname_ln.getText().strip()
            # iri_ref = Iri(pname_ln)
            
            (prefix, name) = pname_ln.split(":", 1)
            ns = self.resolve_prefix(prefix)
            if ns is not None:
                ns = self.state.prefixes[prefix]
                iri = ns + name
                iri_ref = Iri(iri)
        else:
            pname_ns = ctx.PNAME_NS().getText().strip()
            # iri_ref = Iri(pname_ns)
            
            prefix = pname_ns[:-1]
            ns = self.resolve_prefix(prefix)
            if ns is not None:
                ns = self.state.prefixes[prefix]
                iri_ref = Iri(ns)
        
        if iri_ref is not None:
            self.process_iri(iri_ref)

    def process_iri(self, iri_ref):
        match self.state.iri_mode:
            case 'ipl': # use iri as subject for properties in ipl
                self.state.triple[0] = iri_ref
                self.state.iri_mode = None
            case 'rdflit': # use iri as datatype
                self.state.dt = iri_ref
                self.state.iri_mode = None
            case None: self.state.path_item = iri_ref

    # Enter a parse tree produced by n3Parser#blankNode.
    def enterBlankNode(self, ctx:n3Parser.BlankNodeContext):
        pass

    # Exit a parse tree produced by n3Parser#blankNode.
    def exitBlankNode(self, ctx:n3Parser.BlankNodeContext):
        if ctx.BLANK_NODE_LABEL() is not None:
            label = self.text(ctx.BLANK_NODE_LABEL())
            label = label[2:]
        else:
            label = None
        
        self.state.path_item = self.state.bnode(label)

    # Enter a parse tree produced by n3Parser#quickVar.
    def enterQuickVar(self, ctx:n3Parser.QuickVarContext):        
        pass

    # Exit a parse tree produced by n3Parser#quickVar.
    def exitQuickVar(self, ctx:n3Parser.QuickVarContext):
        name = ctx.QuickVarName()
        
        if name is not None:
            var = Var(self.text(name)[1:])
            self.state.path_item = var
            
            # self.state.parsed_var(var)
    
    # custom methods
    
    def process_prefix(self, prefix, iri_ref):
        prefix = prefix.getText().strip()[:-1]
        iri_ref = self.text(iri_ref)[1:-1]
        
        self.state.prefixes[prefix] = iri_ref
        
    def resolve_prefix(self, prefix):
        if prefix not in self.state.prefixes:
            raise n3ParseError(f"error: unknown prefix '{prefix}'") from None
        else:
            return self.state.prefixes[prefix]
    
    def bool(self, node):
        txt = self.text(node)
        if txt.startswith("@"):
            txt = txt[1:]
        return txt == 'true'
    
    def text(self, node):
        if node is None:
            return None
        return node.getText().strip()
    
    def iri(self, node):
        iri = self.text(node)[1:-1]
        
        # (quick heuristic to avoid expensive checks each time)
        if iri.startswith("http") or iri.startswith("//"):
            return iri
        
        if uritools.isrelpath(iri):
            if self.state.base is None:
                raise n3ParseError("found relative IRI without base IRI set: self.text(node)")
            return uritools.urijoin(self.state.base, iri)
        else:
            return iri
    
    def string(self, node):
        if node is None:
            return ""
        
        text = self.text(node)
        if text.startswith("\"\"\""):
            return text[3:-3]
        else:
            return text[1:-1]
        
    def int(self, lex):
        return int(self.text(lex))
    
    def double(self, lex):
        return float(self.text(lex))
    
    def decimal(self, lex):
        return float(self.text(lex))
        
    def emit_triple(self, triple):
        if self.state.inv_pred:
            triple = Triple(triple.o, triple.p, triple.s)
        
        self.state.data.add(triple)
        
        # something weird going on with imports
        # it doesn't look like logNs[..] Iri type is the same as the Iri type imported here
        if triple.s.type() == Terms.GRAPH and \
            triple.p.type() == Terms.IRI and (triple.p.iri == logNs['implies'].iri or triple.p.iri == logNs['impliedBy'].iri):
            self.state.rules.append(triple)
        
    def syntaxError(self, recognizer, offendingSymbol, line, column, msg, e):
        raise n3ParseError(msg) from None

    def reportAmbiguity(self, recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs):
        pass

    def reportAttemptingFullContext(self, recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs):
        pass

    def reportContextSensitivity(self, recognizer, dfa, startIndex, stopIndex, prediction, configs):
        pass

class n3ParseResult:
    
    def __init__(self, state):
        self.data = state.data
        self.rules = state.rules

import time
def parse_n3_file(path, has_vars=False):
    # start = time.time()
    string = open(path, 'r').read()
    # end = time.time()
    # print("read time:", (end-start))
    
    return parse_n3(string, has_vars)

def parse_n3(string, has_vars=False):
    # start = time.time()
    creator = n3Creator(has_vars=has_vars)
    
    lexer = n3Lexer(InputStream(string))
    stream = CommonTokenStream(lexer)
    parser = n3Parser(stream)
    parser.addParseListener(creator)
    parser.addErrorListener(creator)

    _ = parser.n3Doc()
    # print(tree.toStringTree(recog=parser))
    
    # end = time.time()
    # print("parse time:", (end-start))
    
    # start = time.time()
    ret =  n3ParseResult(creator.state)
    ret.data.done()
    # end = time.time()
    # print("load time:", (end-start))
    
    return ret