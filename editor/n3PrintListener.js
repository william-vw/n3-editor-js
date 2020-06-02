var n3Listener = require('./n3Listener').n3Listener;

function n3PrintListener(listener) {
	n3Listener.call(this);
	this.listener = listener;
	
	this.lvl = 0
	
	return this;
}

n3PrintListener.prototype = Object.create(n3Listener.prototype);
n3PrintListener.prototype.constructor = n3PrintListener;

// Enter a parse tree produced by n3Parser#n3Doc.
n3PrintListener.prototype.enterN3Doc = function(ctx) {
	this.print("N3Doc");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#n3Doc.
n3PrintListener.prototype.exitN3Doc = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#n3Statement.
n3PrintListener.prototype.enterN3Statement = function(ctx) {
	this.print("N3Statement");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#n3Statement.
n3PrintListener.prototype.exitN3Statement = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#n3Directive.
n3PrintListener.prototype.enterN3Directive = function(ctx) {
	this.print("N3Directive");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#n3Directive.
n3PrintListener.prototype.exitN3Directive = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#sparqlDirective.
n3PrintListener.prototype.enterSparqlDirective = function(ctx) {
	this.print("SparqlDirective");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#sparqlDirective.
n3PrintListener.prototype.exitSparqlDirective = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#sparqlBase.
n3PrintListener.prototype.enterSparqlBase = function(ctx) {
	this.print("SparqlBase");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#sparqlBase.
n3PrintListener.prototype.exitSparqlBase = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#sparqlPrefix.
n3PrintListener.prototype.enterSparqlPrefix = function(ctx) {
	this.print("SparqlPrefix");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#sparqlPrefix.
n3PrintListener.prototype.exitSparqlPrefix = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#prefixID.
n3PrintListener.prototype.enterPrefixID = function(ctx) {
	this.print("PrefixID");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#prefixID.
n3PrintListener.prototype.exitPrefixID = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#base.
n3PrintListener.prototype.enterBase = function(ctx) {
	this.print("Base");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#base.
n3PrintListener.prototype.exitBase = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#triples.
n3PrintListener.prototype.enterTriples = function(ctx) {
	this.print("Triples");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#triples.
n3PrintListener.prototype.exitTriples = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#predicateObjectList.
n3PrintListener.prototype.enterPredicateObjectList = function(ctx) {
	this.print("PredicateObjectList");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#predicateObjectList.
n3PrintListener.prototype.exitPredicateObjectList = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#objectList.
n3PrintListener.prototype.enterObjectList = function(ctx) {
	this.print("ObjectList");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#objectList.
n3PrintListener.prototype.exitObjectList = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#verb.
n3PrintListener.prototype.enterVerb = function(ctx) {
	this.print("Verb");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#verb.
n3PrintListener.prototype.exitVerb = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#subject.
n3PrintListener.prototype.enterSubject = function(ctx) {
	this.print("Subject");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#subject.
n3PrintListener.prototype.exitSubject = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#predicate.
n3PrintListener.prototype.enterPredicate = function(ctx) {
	this.print("Predicate");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#predicate.
n3PrintListener.prototype.exitPredicate = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#object.
n3PrintListener.prototype.enterObject = function(ctx) {
	this.print("Object");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#object.
n3PrintListener.prototype.exitObject = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#expression.
n3PrintListener.prototype.enterExpression = function(ctx) {
	this.print("Expression");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#expression.
n3PrintListener.prototype.exitExpression = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#path.
n3PrintListener.prototype.enterPath = function(ctx) {
	this.print("Path");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#path.
n3PrintListener.prototype.exitPath = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#pathItem.
n3PrintListener.prototype.enterPathItem = function(ctx) {
	this.print("PathItem");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#pathItem.
n3PrintListener.prototype.exitPathItem = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#literal.
n3PrintListener.prototype.enterLiteral = function(ctx) {
	this.print("Literal");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#literal.
n3PrintListener.prototype.exitLiteral = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#blankNodePropertyList.
n3PrintListener.prototype.enterBlankNodePropertyList = function(ctx) {
	this.print("BlankNodePropertyList");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#blankNodePropertyList.
n3PrintListener.prototype.exitBlankNodePropertyList = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#collection.
n3PrintListener.prototype.enterCollection = function(ctx) {
	this.print("Collection");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#collection.
n3PrintListener.prototype.exitCollection = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#formula.
n3PrintListener.prototype.enterFormula = function(ctx) {
	this.print("Formula");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#formula.
n3PrintListener.prototype.exitFormula = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#formulaContent.
n3PrintListener.prototype.enterFormulaContent = function(ctx) {
	this.print("FormulaContent");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#formulaContent.
n3PrintListener.prototype.exitFormulaContent = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#numericLiteral.
n3PrintListener.prototype.enterNumericLiteral = function(ctx) {
  this.print("NumericLiteral");
  this.incrLvl();
};

// Exit a parse tree produced by n3Parser#numericLiteral.
n3PrintListener.prototype.exitNumericLiteral = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#rdfLiteral.
n3PrintListener.prototype.enterRdfLiteral = function(ctx) {
	this.print("RdfLiteral");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#rdfLiteral.
n3PrintListener.prototype.exitRdfLiteral = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#iri.
n3PrintListener.prototype.enterIri = function(ctx) {
	this.print("Iri");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#iri.
n3PrintListener.prototype.exitIri = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#iriList.
n3PrintListener.prototype.enterIriList = function(ctx) {
	this.print("IriList");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#iriList.
n3PrintListener.prototype.exitIriList = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#prefixedName.
n3PrintListener.prototype.enterPrefixedName = function(ctx) {
	this.print("PrefixedName");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#prefixedName.
n3PrintListener.prototype.exitPrefixedName = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#blankNode.
n3PrintListener.prototype.enterBlankNode = function(ctx) {
  this.print("BlankNode");
  this.incrLvl();
};

// Exit a parse tree produced by n3Parser#blankNode.
n3PrintListener.prototype.exitBlankNode = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#quickVar.
n3PrintListener.prototype.enterQuickVar = function(ctx) {
  this.print("QuickVar");
  this.incrLvl();
};

// Exit a parse tree produced by n3Parser#quickVar.
n3PrintListener.prototype.exitQuickVar = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#existential.
n3PrintListener.prototype.enterExistential = function(ctx) {
	this.print("Existential");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#existential.
n3PrintListener.prototype.exitExistential = function(ctx) {
	this.decrLvl();
};

// Enter a parse tree produced by n3Parser#universal.
n3PrintListener.prototype.enterUniversal = function(ctx) {
	this.print("Universal");
	this.incrLvl();
};

// Exit a parse tree produced by n3Parser#universal.
n3PrintListener.prototype.exitUniversal = function(ctx) {
	this.decrLvl();
};

n3PrintListener.prototype.incrLvl = function() {
	this.lvl++;
}

n3PrintListener.prototype.decrLvl = function() {
	this.lvl--;
}

n3PrintListener.prototype.print = function(el) {	
	var ws = new Array(this.lvl + 1).join(" ");
	var out = ws + el + "\n";
	
	this.listener.newAstLine(out);
}

exports.n3PrintListener = n3PrintListener;