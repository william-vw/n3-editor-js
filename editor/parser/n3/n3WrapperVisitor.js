// var n3Visitor = require('./n3Visitor').n3Visitor
// var n3Parser = require('./n3Parser').n3Parser

import n3Visitor from './n3Visitor';
// import n3Parser from './n3Parser';

export default class n3WrapperVisitor extends n3Visitor {

  constructor(visitor) {
    super();

    this.visitor = visitor;
    visitor.wrapper = this;
  }

  // Visit a parse tree produced by n3Parser#n3Doc.
  visitN3Doc(ctx) {
    this.visitor.visitN3Doc(ctx);
  }


  // Visit a parse tree produced by n3Parser#n3Statement.
  visitN3Statement(ctx) {
    this.visitor.visitN3Statement(ctx);
  }


  // Visit a parse tree produced by n3Parser#n3Directive.
  visitN3Directive(ctx) {
    this.visitor.visitN3Directive(ctx);
  }


  // Visit a parse tree produced by n3Parser#sparqlDirective.
  visitSparqlDirective(ctx) {
    this.visitor.visitSparqlDirective(ctx);
  }


  // Visit a parse tree produced by n3Parser#sparqlBase.
  visitSparqlBase(ctx) {
    this.visitor.visitSparqlBase(ctx);
  }


  // Visit a parse tree produced by n3Parser#sparqlPrefix.
  visitSparqlPrefix(ctx) {
    this.visitor.visitSparqlPrefix(ctx);
  }


  // Visit a parse tree produced by n3Parser#prefixID.
  visitPrefixID(ctx) {
    this.visitor.visitPrefixID(ctx);
  }


  // Visit a parse tree produced by n3Parser#base.
  visitBase(ctx) {
    this.visitor.visitBase(ctx);
  }


  // Visit a parse tree produced by n3Parser#triples.
  visitTriples(ctx) {
    this.visitor.visitTriples(ctx);
  }


  // Visit a parse tree produced by n3Parser#predicateObjectList.
  visitPredicateObjectList(ctx) {
    this.visitor.visitPredicateObjectList(ctx);
  }


  // Visit a parse tree produced by n3Parser#objectList.
  visitObjectList(ctx) {
    this.visitor.visitObjectList(ctx);
  }


  // Visit a parse tree produced by n3Parser#verb.
  visitVerb(ctx) {
    this.visitor.visitVerb(ctx);
  }


  // Visit a parse tree produced by n3Parser#subject.
  visitSubject(ctx) {
    this.visitor.visitSubject(ctx);
  }


  // Visit a parse tree produced by n3Parser#predicate.
  visitPredicate(ctx) {
    this.visitor.visitPredicate(ctx);
  }


  // Visit a parse tree produced by n3Parser#object.
  visitObject(ctx) {
    this.visitor.visitObject(ctx);
  }


  // Visit a parse tree produced by n3Parser#expression.
  visitExpression(ctx) {
    this.visitor.visitExpression(ctx);
  }


  // Visit a parse tree produced by n3Parser#path.
  visitPath(ctx) {
    this.visitor.visitPath(ctx);
  }


  // Visit a parse tree produced by n3Parser#pathItem.
  visitPathItem(ctx) {
    this.visitor.visitPathItem(ctx);
  }


  // Visit a parse tree produced by n3Parser#literal.
  visitLiteral(ctx) {
    this.visitor.visitLiteral(ctx);
  }


  // Visit a parse tree produced by n3Parser#blankNodePropertyList.
  visitBlankNodePropertyList(ctx) {
    this.visitor.visitBlankNodePropertyList(ctx);
  }


  // Visit a parse tree produced by n3Parser#iriPropertyList.
  visitIriPropertyList(ctx) {
    this.visitor.visitIriPropertyList(ctx);
  }


  // Visit a parse tree produced by n3Parser#collection.
  visitCollection(ctx) {
    this.visitor.visitCollection(ctx);
  }


  // Visit a parse tree produced by n3Parser#formula.
  visitFormula(ctx) {
    this.visitor.visitFormula(ctx);
  }


  // Visit a parse tree produced by n3Parser#formulaContent.
  visitFormulaContent(ctx) {
    this.visitor.visitFormulaContent(ctx);
  }


  // Visit a parse tree produced by n3Parser#numericLiteral.
  visitNumericLiteral(ctx) {
    this.visitor.visitNumericLiteral(ctx);
  }


  // Visit a parse tree produced by n3Parser#rdfLiteral.
  visitRdfLiteral(ctx) {
    this.visitor.visitRdfLiteral(ctx);
  }


  // Visit a parse tree produced by n3Parser#iri.
  visitIri(ctx) {
    this.visitor.visitIri(ctx);
  }


  // Visit a parse tree produced by n3Parser#iriList.
  visitIriList(ctx) {
    this.visitor.visitIriList(ctx);
  }


  // Visit a parse tree produced by n3Parser#prefixedName.
  visitPrefixedName(ctx) {
    this.visitor.visitPrefixedName(ctx);
  }


  // Visit a parse tree produced by n3Parser#blankNode.
  visitBlankNode(ctx) {
    this.visitor.visitBlankNode(ctx);
  }


  // Visit a parse tree produced by n3Parser#quickVar.
  visitQuickVar(ctx) {
    this.visitor.visitQuickVar(ctx);
  }


  // Visit a parse tree produced by n3Parser#existential.
  visitExistential(ctx) {
    this.visitor.visitExistential(ctx);
  }


  // Visit a parse tree produced by n3Parser#universal.
  visitUniversal(ctx) {
    this.visitor.visitUniversal(ctx);
  }
}