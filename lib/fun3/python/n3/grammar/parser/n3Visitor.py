# Generated from n3.g4 by ANTLR 4.13.1
from antlr4 import *
if "." in __name__:
    from .n3Parser import n3Parser
else:
    from n3Parser import n3Parser

# This class defines a complete generic visitor for a parse tree produced by n3Parser.

class n3Visitor(ParseTreeVisitor):

    # Visit a parse tree produced by n3Parser#n3Doc.
    def visitN3Doc(self, ctx:n3Parser.N3DocContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#n3Statement.
    def visitN3Statement(self, ctx:n3Parser.N3StatementContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#n3Directive.
    def visitN3Directive(self, ctx:n3Parser.N3DirectiveContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#sparqlDirective.
    def visitSparqlDirective(self, ctx:n3Parser.SparqlDirectiveContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#sparqlBase.
    def visitSparqlBase(self, ctx:n3Parser.SparqlBaseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#sparqlPrefix.
    def visitSparqlPrefix(self, ctx:n3Parser.SparqlPrefixContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#prefixID.
    def visitPrefixID(self, ctx:n3Parser.PrefixIDContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#base.
    def visitBase(self, ctx:n3Parser.BaseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#triples.
    def visitTriples(self, ctx:n3Parser.TriplesContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#predicateObjectList.
    def visitPredicateObjectList(self, ctx:n3Parser.PredicateObjectListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#objectList.
    def visitObjectList(self, ctx:n3Parser.ObjectListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#verb.
    def visitVerb(self, ctx:n3Parser.VerbContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#subject.
    def visitSubject(self, ctx:n3Parser.SubjectContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#predicate.
    def visitPredicate(self, ctx:n3Parser.PredicateContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#object.
    def visitObject(self, ctx:n3Parser.ObjectContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#expression.
    def visitExpression(self, ctx:n3Parser.ExpressionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#path.
    def visitPath(self, ctx:n3Parser.PathContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#pathItem.
    def visitPathItem(self, ctx:n3Parser.PathItemContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#literal.
    def visitLiteral(self, ctx:n3Parser.LiteralContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#blankNodePropertyList.
    def visitBlankNodePropertyList(self, ctx:n3Parser.BlankNodePropertyListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#iriPropertyList.
    def visitIriPropertyList(self, ctx:n3Parser.IriPropertyListContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#collection.
    def visitCollection(self, ctx:n3Parser.CollectionContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#formula.
    def visitFormula(self, ctx:n3Parser.FormulaContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#formulaContent.
    def visitFormulaContent(self, ctx:n3Parser.FormulaContentContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#numericLiteral.
    def visitNumericLiteral(self, ctx:n3Parser.NumericLiteralContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#rdfLiteral.
    def visitRdfLiteral(self, ctx:n3Parser.RdfLiteralContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#iri.
    def visitIri(self, ctx:n3Parser.IriContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#prefixedName.
    def visitPrefixedName(self, ctx:n3Parser.PrefixedNameContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#blankNode.
    def visitBlankNode(self, ctx:n3Parser.BlankNodeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by n3Parser#quickVar.
    def visitQuickVar(self, ctx:n3Parser.QuickVarContext):
        return self.visitChildren(ctx)



del n3Parser