# Generated from n3.g4 by ANTLR 4.13.1
from antlr4 import *
if "." in __name__:
    from .n3Parser import n3Parser
else:
    from n3Parser import n3Parser

# This class defines a complete listener for a parse tree produced by n3Parser.
class n3Listener(ParseTreeListener):

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
        pass


    # Enter a parse tree produced by n3Parser#sparqlPrefix.
    def enterSparqlPrefix(self, ctx:n3Parser.SparqlPrefixContext):
        pass

    # Exit a parse tree produced by n3Parser#sparqlPrefix.
    def exitSparqlPrefix(self, ctx:n3Parser.SparqlPrefixContext):
        pass


    # Enter a parse tree produced by n3Parser#prefixID.
    def enterPrefixID(self, ctx:n3Parser.PrefixIDContext):
        pass

    # Exit a parse tree produced by n3Parser#prefixID.
    def exitPrefixID(self, ctx:n3Parser.PrefixIDContext):
        pass


    # Enter a parse tree produced by n3Parser#base.
    def enterBase(self, ctx:n3Parser.BaseContext):
        pass

    # Exit a parse tree produced by n3Parser#base.
    def exitBase(self, ctx:n3Parser.BaseContext):
        pass


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
        pass


    # Enter a parse tree produced by n3Parser#verb.
    def enterVerb(self, ctx:n3Parser.VerbContext):
        pass

    # Exit a parse tree produced by n3Parser#verb.
    def exitVerb(self, ctx:n3Parser.VerbContext):
        pass


    # Enter a parse tree produced by n3Parser#subject.
    def enterSubject(self, ctx:n3Parser.SubjectContext):
        pass

    # Exit a parse tree produced by n3Parser#subject.
    def exitSubject(self, ctx:n3Parser.SubjectContext):
        pass


    # Enter a parse tree produced by n3Parser#predicate.
    def enterPredicate(self, ctx:n3Parser.PredicateContext):
        pass

    # Exit a parse tree produced by n3Parser#predicate.
    def exitPredicate(self, ctx:n3Parser.PredicateContext):
        pass


    # Enter a parse tree produced by n3Parser#object.
    def enterObject(self, ctx:n3Parser.ObjectContext):
        pass

    # Exit a parse tree produced by n3Parser#object.
    def exitObject(self, ctx:n3Parser.ObjectContext):
        pass


    # Enter a parse tree produced by n3Parser#expression.
    def enterExpression(self, ctx:n3Parser.ExpressionContext):
        pass

    # Exit a parse tree produced by n3Parser#expression.
    def exitExpression(self, ctx:n3Parser.ExpressionContext):
        pass


    # Enter a parse tree produced by n3Parser#path.
    def enterPath(self, ctx:n3Parser.PathContext):
        pass

    # Exit a parse tree produced by n3Parser#path.
    def exitPath(self, ctx:n3Parser.PathContext):
        pass


    # Enter a parse tree produced by n3Parser#pathItem.
    def enterPathItem(self, ctx:n3Parser.PathItemContext):
        pass

    # Exit a parse tree produced by n3Parser#pathItem.
    def exitPathItem(self, ctx:n3Parser.PathItemContext):
        pass


    # Enter a parse tree produced by n3Parser#literal.
    def enterLiteral(self, ctx:n3Parser.LiteralContext):
        pass

    # Exit a parse tree produced by n3Parser#literal.
    def exitLiteral(self, ctx:n3Parser.LiteralContext):
        pass


    # Enter a parse tree produced by n3Parser#blankNodePropertyList.
    def enterBlankNodePropertyList(self, ctx:n3Parser.BlankNodePropertyListContext):
        pass

    # Exit a parse tree produced by n3Parser#blankNodePropertyList.
    def exitBlankNodePropertyList(self, ctx:n3Parser.BlankNodePropertyListContext):
        pass


    # Enter a parse tree produced by n3Parser#iriPropertyList.
    def enterIriPropertyList(self, ctx:n3Parser.IriPropertyListContext):
        pass

    # Exit a parse tree produced by n3Parser#iriPropertyList.
    def exitIriPropertyList(self, ctx:n3Parser.IriPropertyListContext):
        pass


    # Enter a parse tree produced by n3Parser#collection.
    def enterCollection(self, ctx:n3Parser.CollectionContext):
        pass

    # Exit a parse tree produced by n3Parser#collection.
    def exitCollection(self, ctx:n3Parser.CollectionContext):
        pass


    # Enter a parse tree produced by n3Parser#formula.
    def enterFormula(self, ctx:n3Parser.FormulaContext):
        pass

    # Exit a parse tree produced by n3Parser#formula.
    def exitFormula(self, ctx:n3Parser.FormulaContext):
        pass


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
        pass


    # Enter a parse tree produced by n3Parser#rdfLiteral.
    def enterRdfLiteral(self, ctx:n3Parser.RdfLiteralContext):
        pass

    # Exit a parse tree produced by n3Parser#rdfLiteral.
    def exitRdfLiteral(self, ctx:n3Parser.RdfLiteralContext):
        pass


    # Enter a parse tree produced by n3Parser#iri.
    def enterIri(self, ctx:n3Parser.IriContext):
        pass

    # Exit a parse tree produced by n3Parser#iri.
    def exitIri(self, ctx:n3Parser.IriContext):
        pass


    # Enter a parse tree produced by n3Parser#prefixedName.
    def enterPrefixedName(self, ctx:n3Parser.PrefixedNameContext):
        pass

    # Exit a parse tree produced by n3Parser#prefixedName.
    def exitPrefixedName(self, ctx:n3Parser.PrefixedNameContext):
        pass


    # Enter a parse tree produced by n3Parser#blankNode.
    def enterBlankNode(self, ctx:n3Parser.BlankNodeContext):
        pass

    # Exit a parse tree produced by n3Parser#blankNode.
    def exitBlankNode(self, ctx:n3Parser.BlankNodeContext):
        pass


    # Enter a parse tree produced by n3Parser#quickVar.
    def enterQuickVar(self, ctx:n3Parser.QuickVarContext):
        pass

    # Exit a parse tree produced by n3Parser#quickVar.
    def exitQuickVar(self, ctx:n3Parser.QuickVarContext):
        pass



del n3Parser