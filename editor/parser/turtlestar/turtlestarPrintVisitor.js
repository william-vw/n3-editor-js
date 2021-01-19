var turtlestarVisitor = require('./turtlestarVisitor').turtlestarVisitor
var turtlestarParser = require('./turtlestarParser').turtlestarParser

function turtlestarPrintVisitor(listener) {
	turtlestarVisitor.call(this);
	this.listener = listener;
	
	this.lvl = 0
	
	return this;
}

turtlestarPrintVisitor.prototype = Object.create(turtlestarVisitor.prototype);
turtlestarPrintVisitor.prototype.constructor = turtlestarPrintVisitor;


// Visit a parse tree produced by turtlestarParser#turtleStarDoc.
turtlestarVisitor.prototype.visitTurtleStarDoc = function(ctx) {
	this.print("TurtleStarDoc");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#directive.
turtlestarVisitor.prototype.visitDirective = function(ctx) {
	this.print("Directive");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#prefixID.
turtlestarVisitor.prototype.visitPrefixID = function(ctx) {
	this.print("PrefixID");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#base.
turtlestarVisitor.prototype.visitBase = function(ctx) {
	this.print("Base");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#sparqlBase.
turtlestarVisitor.prototype.visitSparqlBase = function(ctx) {
	this.print("SparqlBase");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#sparqlPrefix.
turtlestarVisitor.prototype.visitSparqlPrefix = function(ctx) {
	this.print("SparqlPrefix");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#triples.
turtlestarVisitor.prototype.visitTriples = function(ctx) {
	this.print("Triples");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#predicateObjectList.
turtlestarVisitor.prototype.visitPredicateObjectList = function(ctx) {
	this.print("PredicateObjectList");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#objectList.
turtlestarVisitor.prototype.visitObjectList = function(ctx) {
	this.print("ObjectList");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#verb.
turtlestarVisitor.prototype.visitVerb = function(ctx) {
	this.print("Verb");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#subject.
turtlestarVisitor.prototype.visitSubject = function(ctx) {
	this.print("Subject");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#predicate.
turtlestarVisitor.prototype.visitPredicate = function(ctx) {
	this.print("Predicate");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#object.
turtlestarVisitor.prototype.visitObject = function(ctx) {
	this.print("Object");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#tripleX.
turtlestarVisitor.prototype.visitTripleX = function(ctx) {
	this.print("TripleX");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#subjectX.
turtlestarVisitor.prototype.visitSubjectX = function(ctx) {
	this.print("SubjectX");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#objectX.
turtlestarVisitor.prototype.visitObjectX = function(ctx) {
	this.print("ObjectX");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#literal.
turtlestarVisitor.prototype.visitLiteral = function(ctx) {
	this.print("Literal");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#blankNodePropertyList.
turtlestarVisitor.prototype.visitBlankNodePropertyList = function(ctx) {
	this.print("BlankNodePropertyList");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#collection.
turtlestarVisitor.prototype.visitCollection = function(ctx) {
	this.print("Collection");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#rdfLiteral.
turtlestarVisitor.prototype.visitRdfLiteral = function(ctx) {
	this.print("RdfLiteral");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#iri.
turtlestarVisitor.prototype.visitIri = function(ctx) {
	this.print("Iri");
	return this.doVisitChildren(ctx);
}


// Visit a parse tree produced by turtlestarParser#prefixedName.
turtlestarVisitor.prototype.visitPrefixedName = function(ctx) {
	this.print("PrefixedName");
	return this.doVisitChildren(ctx);
}


turtlestarPrintVisitor.prototype.incrLvl = function() {
	this.lvl++;
}

turtlestarPrintVisitor.prototype.decrLvl = function() {
	this.lvl--;
}

turtlestarPrintVisitor.prototype.print = function(el) {	
	var ws = new Array(this.lvl + 1).join(" ");
	var out = ws + el + "\n";
	
	this.listener.newAstLine(out);
}

turtlestarPrintVisitor.prototype.doVisitChildren = function(ctx) {
	this.lvl++;
	this.visitChildren(ctx);
	this.lvl--;
}

turtlestarPrintVisitor.prototype.visitChildren = function(node) {
	var result = null; // this.defaultResult()
	var n = node.getChildCount()
	for (var i = 0; i < n; i++) {
		// if (!this.shouldVisitNextChild(node, result)) {
		//	break
		// }

		var c = node.getChild(i)
		if (c.symbol !== undefined) {
			var out = "' " + c + " '";
			var type = c.symbol.type
			if (type != -1 && turtlestarParser.symbolicNames[type] !== null)
				out += " (" + turtlestarParser.symbolicNames[type] + ")"
			this.print(out)

		} else {
			result = c.accept(this);
			// result = this.aggregateResult(result, childResult);
		}
	}

	return result
}

exports.turtlestarPrintVisitor = turtlestarPrintVisitor;