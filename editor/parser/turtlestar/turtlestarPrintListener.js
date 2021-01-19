var turtlestarListener = require('./turtlestarListener').turtlestarListener;

function turtlestarPrintListener(listener) {
	turtlestarListener.call(this);
	this.listener = listener;
	
	this.lvl = 0
	
	return this;
}

turtlestarPrintListener.prototype = Object.create(turtlestarListener.prototype);
turtlestarPrintListener.prototype.constructor = turtlestarPrintListener;


// Enter a parse tree produced by turtlestarParser#turtleStarDoc.
turtlestarPrintListener.prototype.enterTurtleStarDoc = function(ctx) {
	this.print("TurtleStarDoc");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#turtleStarDoc.
turtlestarPrintListener.prototype.exitTurtleStarDoc = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#statement.
turtlestarPrintListener.prototype.enterStatement = function(ctx) {
	this.print("Statement");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#statement.
turtlestarPrintListener.prototype.exitStatement = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#directive.
turtlestarPrintListener.prototype.enterDirective = function(ctx) {
	this.print("Directive");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#directive.
turtlestarPrintListener.prototype.exitDirective = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#prefixID.
turtlestarPrintListener.prototype.enterPrefixID = function(ctx) {
	this.print("PrefixID");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#prefixID.
turtlestarPrintListener.prototype.exitPrefixID = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#base.
turtlestarPrintListener.prototype.enterBase = function(ctx) {
	this.print("Base");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#base.
turtlestarPrintListener.prototype.exitBase = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#sparqlBase.
turtlestarPrintListener.prototype.enterSparqlBase = function(ctx) {
	this.print("SparqlBase");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#sparqlBase.
turtlestarPrintListener.prototype.exitSparqlBase = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#sparqlPrefix.
turtlestarPrintListener.prototype.enterSparqlPrefix = function(ctx) {
	this.print("SparqlPrefix");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#sparqlPrefix.
turtlestarPrintListener.prototype.exitSparqlPrefix = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#triples.
turtlestarPrintListener.prototype.enterTriples = function(ctx) {
	this.print("Triples");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#triples.
turtlestarPrintListener.prototype.exitTriples = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#predicateObjectList.
turtlestarPrintListener.prototype.enterPredicateObjectList = function(ctx) {
	this.print("PredicateObjectList");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#predicateObjectList.
turtlestarPrintListener.prototype.exitPredicateObjectList = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#objectList.
turtlestarPrintListener.prototype.enterObjectList = function(ctx) {
	this.print("ObjectList");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#objectList.
turtlestarPrintListener.prototype.exitObjectList = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#verb.
turtlestarPrintListener.prototype.enterVerb = function(ctx) {
	this.print("Verb");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#verb.
turtlestarPrintListener.prototype.exitVerb = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#subject.
turtlestarPrintListener.prototype.enterSubject = function(ctx) {
	this.print("Subject");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#subject.
turtlestarPrintListener.prototype.exitSubject = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#predicate.
turtlestarPrintListener.prototype.enterPredicate = function(ctx) {
	this.print("Predicate");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#predicate.
turtlestarPrintListener.prototype.exitPredicate = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#object.
turtlestarPrintListener.prototype.enterObject = function(ctx) {
	this.print("Object");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#object.
turtlestarPrintListener.prototype.exitObject = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#tripleX.
turtlestarPrintListener.prototype.enterTripleX = function(ctx) {
	this.print("TripleX");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#tripleX.
turtlestarPrintListener.prototype.exitTripleX = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#subjectX.
turtlestarPrintListener.prototype.enterSubjectX = function(ctx) {
	this.print("SubjectX");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#subjectX.
turtlestarPrintListener.prototype.exitSubjectX = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#objectX.
turtlestarPrintListener.prototype.enterObjectX = function(ctx) {
	this.print("ObjectX");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#objectX.
turtlestarPrintListener.prototype.exitObjectX = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#literal.
turtlestarPrintListener.prototype.enterLiteral = function(ctx) {
	this.print("Literal");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#literal.
turtlestarPrintListener.prototype.exitLiteral = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#blankNodePropertyList.
turtlestarPrintListener.prototype.enterBlankNodePropertyList = function(ctx) {
	this.print("BlankNodePropertyList");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#blankNodePropertyList.
turtlestarPrintListener.prototype.exitBlankNodePropertyList = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#collection.
turtlestarPrintListener.prototype.enterCollection = function(ctx) {
	this.print("Collection");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#collection.
turtlestarPrintListener.prototype.exitCollection = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#rdfLiteral.
turtlestarPrintListener.prototype.enterRdfLiteral = function(ctx) {
	this.print("RdfLiteral");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#rdfLiteral.
turtlestarPrintListener.prototype.exitRdfLiteral = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#iri.
turtlestarPrintListener.prototype.enterIri = function(ctx) {
	this.print("Iri");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#iri.
turtlestarPrintListener.prototype.exitIri = function(ctx) {
	this.decrLvl();
}


// Enter a parse tree produced by turtlestarParser#prefixedName.
turtlestarPrintListener.prototype.enterPrefixedName = function(ctx) {
	this.print("PrefixedName");
	this.incrLvl();
}

// Exit a parse tree produced by turtlestarParser#prefixedName.
turtlestarPrintListener.prototype.exitPrefixedName = function(ctx) {
	this.decrLvl();
}

turtlestarPrintListener.prototype.incrLvl = function() {
	this.lvl++;
}

turtlestarPrintListener.prototype.decrLvl = function() {
	this.lvl--;
}

turtlestarPrintListener.prototype.print = function(el) {	
	console.log("el? " + el);
	var ws = new Array(this.lvl + 1).join(" ");
	var out = ws + el + "\n";
	
	this.listener.newAstLine(out);
}

exports.turtlestarPrintListener = turtlestarPrintListener;