var n3Visitor = require('./n3Visitor').n3Visitor
var n3Parser = require('./n3Parser').n3Parser

function n3PrintVisitor(listener) {
	n3Visitor.call(this);
	this.listener = listener;
	
	this.lvl = 0
	
	return this;
}

n3PrintVisitor.prototype = Object.create(n3Visitor.prototype);
n3PrintVisitor.prototype.constructor = n3PrintVisitor;

// Visit a parse tree produced by n3Parser#n3Doc.
n3PrintVisitor.prototype.visitN3Doc = function(ctx) {
  this.print("N3Doc")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#n3Statement.
n3PrintVisitor.prototype.visitN3Statement = function(ctx) {
  this.print("N3Statement")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#n3Directive.
n3PrintVisitor.prototype.visitN3Directive = function(ctx) {
  this.print("N3Directive")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#sparqlDirective.
n3PrintVisitor.prototype.visitSparqlDirective = function(ctx) {
  this.print("SparqlDirective")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#sparqlBase.
n3PrintVisitor.prototype.visitSparqlBase = function(ctx) {
  this.print("SparqlBase")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#sparqlPrefix.
n3PrintVisitor.prototype.visitSparqlPrefix = function(ctx) {
  this.print("SparqlPrefix")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#prefixID.
n3PrintVisitor.prototype.visitPrefixID = function(ctx) {
  this.print("PrefixID")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#base.
n3PrintVisitor.prototype.visitBase = function(ctx) {
  this.print("Base")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#triples.
n3PrintVisitor.prototype.visitTriples = function(ctx) {
  this.print("Triples")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#predicateObjectList.
n3PrintVisitor.prototype.visitPredicateObjectList = function(ctx) {
  this.print("PredicateObjectList")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#objectList.
n3PrintVisitor.prototype.visitObjectList = function(ctx) {
  this.print("ObjectList")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#verb.
n3PrintVisitor.prototype.visitVerb = function(ctx) {
  this.print("Verb")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#subject.
n3PrintVisitor.prototype.visitSubject = function(ctx) {
  this.print("Subject")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#predicate.
n3PrintVisitor.prototype.visitPredicate = function(ctx) {
  this.print("Predicate")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#object.
n3PrintVisitor.prototype.visitObject = function(ctx) {
  this.print("Object")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#expression.
n3PrintVisitor.prototype.visitExpression = function(ctx) {
  this.print("Expression")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#path.
n3PrintVisitor.prototype.visitPath = function(ctx) {
  this.print("Path")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#pathItem.
n3PrintVisitor.prototype.visitPathItem = function(ctx) {
  this.print("PathItem")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#literal.
n3PrintVisitor.prototype.visitLiteral = function(ctx) {
  this.print("Literal")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#blankNodePropertyList.
n3PrintVisitor.prototype.visitBlankNodePropertyList = function(ctx) {
  this.print("BlankNodePropertyList")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#collection.
n3PrintVisitor.prototype.visitCollection = function(ctx) {
  this.print("Collection")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#formula.
n3PrintVisitor.prototype.visitFormula = function(ctx) {
  this.print("Formula")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#formulaContent.
n3PrintVisitor.prototype.visitFormulaContent = function(ctx) {
  this.print("FormulaContent")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#numericLiteral.
n3PrintVisitor.prototype.visitNumericLiteral = function(ctx) {
  this.print("NumericLiteral")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#rdfLiteral.
n3PrintVisitor.prototype.visitRdfLiteral = function(ctx) {
  this.print("RdfLiteral")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#iri.
n3PrintVisitor.prototype.visitIri = function(ctx) {
  this.print("Iri")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#iriList.
n3PrintVisitor.prototype.visitIriList = function(ctx) {
  this.print("IriList")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#prefixedName.
n3PrintVisitor.prototype.visitPrefixedName = function(ctx) {
  this.print("PrefixedName")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#blankNode.
n3PrintVisitor.prototype.visitBlankNode = function(ctx) {
  this.print("BlankNode")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#quickVar.
n3PrintVisitor.prototype.visitQuickVar = function(ctx) {
  this.print("QuickVar")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#existential.
n3PrintVisitor.prototype.visitExistential = function(ctx) {
  this.print("Existential")
  return this.doVisitChildren(ctx)
};


// Visit a parse tree produced by n3Parser#universal.
n3PrintVisitor.prototype.visitUniversal = function(ctx) {
  this.print("Universal")
  return this.doVisitChildren(ctx)
};


n3PrintVisitor.prototype.incrLvl = function() {
	this.lvl++;
}

n3PrintVisitor.prototype.decrLvl = function() {
	this.lvl--;
}

n3PrintVisitor.prototype.print = function(el) {	
	var ws = new Array(this.lvl + 1).join(" ");
	var out = ws + el + "\n";
	
	this.listener.newAstLine(out);
}

n3PrintVisitor.prototype.doVisitChildren = function(ctx) {
	this.lvl++;
	this.visitChildren(ctx);
	this.lvl--;
}

n3PrintVisitor.prototype.visitChildren = function(node) {
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
			if (type != -1 && n3Parser.symbolicNames[type] !== null)
				out += " (" + n3Parser.symbolicNames[type] + ")"
			this.print(out)

		} else {
			result = c.accept(this);
			// result = this.aggregateResult(result, childResult);
		}
	}

	return result
}

exports.n3PrintVisitor = n3PrintVisitor;