// Generated from D:\git\n3dev\N3\grammar\turtlestar.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by turtlestarParser.

function turtlestarVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

turtlestarVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
turtlestarVisitor.prototype.constructor = turtlestarVisitor;

// Visit a parse tree produced by turtlestarParser#turtleStarDoc.
turtlestarVisitor.prototype.visitTurtleStarDoc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#statement.
turtlestarVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#directive.
turtlestarVisitor.prototype.visitDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#prefixID.
turtlestarVisitor.prototype.visitPrefixID = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#base.
turtlestarVisitor.prototype.visitBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#sparqlBase.
turtlestarVisitor.prototype.visitSparqlBase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#sparqlPrefix.
turtlestarVisitor.prototype.visitSparqlPrefix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#triples.
turtlestarVisitor.prototype.visitTriples = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#predicateObjectList.
turtlestarVisitor.prototype.visitPredicateObjectList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#objectList.
turtlestarVisitor.prototype.visitObjectList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#verb.
turtlestarVisitor.prototype.visitVerb = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#subject.
turtlestarVisitor.prototype.visitSubject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#predicate.
turtlestarVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#object.
turtlestarVisitor.prototype.visitObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#tripleX.
turtlestarVisitor.prototype.visitTripleX = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#subjectX.
turtlestarVisitor.prototype.visitSubjectX = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#objectX.
turtlestarVisitor.prototype.visitObjectX = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#literal.
turtlestarVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#blankNodePropertyList.
turtlestarVisitor.prototype.visitBlankNodePropertyList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#collection.
turtlestarVisitor.prototype.visitCollection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#rdfLiteral.
turtlestarVisitor.prototype.visitRdfLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#iri.
turtlestarVisitor.prototype.visitIri = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by turtlestarParser#prefixedName.
turtlestarVisitor.prototype.visitPrefixedName = function(ctx) {
  return this.visitChildren(ctx);
};



exports.turtlestarVisitor = turtlestarVisitor;