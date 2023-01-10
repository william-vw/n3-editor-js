// var n3Visitor = require('./n3Visitor').n3Visitor
// var n3Parser = require('./n3Parser').n3Parser
import n3Visitor from './n3Visitor';
import n3Parser from './n3Parser';

export default class n3PrintVisitor extends n3Visitor {

    constructor(listener) {
        super();

        this.listener = listener;
        this.lvl = 0
    }

    // Visit a parse tree produced by n3Parser#n3Doc.
    visitN3Doc(ctx) {
        this.print("N3Doc")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#n3Statement.
    visitN3Statement(ctx) {
        this.print("N3Statement")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#n3Directive.
    visitN3Directive(ctx) {
        this.print("N3Directive")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#sparqlDirective.
    visitSparqlDirective(ctx) {
        this.print("SparqlDirective")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#sparqlBase.
    visitSparqlBase(ctx) {
        this.print("SparqlBase")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#sparqlPrefix.
    visitSparqlPrefix(ctx) {
        this.print("SparqlPrefix")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#prefixID.
    visitPrefixID(ctx) {
        this.print("PrefixID")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#base.
    visitBase(ctx) {
        this.print("Base")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#triples.
    visitTriples(ctx) {
        this.print("Triples")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#predicateObjectList.
    visitPredicateObjectList(ctx) {
        this.print("PredicateObjectList")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#objectList.
    visitObjectList(ctx) {
        this.print("ObjectList")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#verb.
    visitVerb(ctx) {
        this.print("Verb")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#subject.
    visitSubject(ctx) {
        this.print("Subject")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#predicate.
    visitPredicate(ctx) {
        this.print("Predicate")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#object.
    visitObject(ctx) {
        this.print("Object")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#expression.
    visitExpression(ctx) {
        this.print("Expression")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#path.
    visitPath(ctx) {
        this.print("Path")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#pathItem.
    visitPathItem(ctx) {
        this.print("PathItem")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#literal.
    visitLiteral(ctx) {
        this.print("Literal")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#blankNodePropertyList.
    visitBlankNodePropertyList(ctx) {
        this.print("BlankNodePropertyList")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#iriPropertyList.
    visitIriPropertyList(ctx) {
        this.print("IriPropertyList")
        return this.visitChildren(ctx);
    }


    // Visit a parse tree produced by n3Parser#collection.
    visitCollection(ctx) {
        this.print("Collection")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#formula.
    visitFormula(ctx) {
        this.print("Formula")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#formulaContent.
    visitFormulaContent(ctx) {
        this.print("FormulaContent")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#numericLiteral.
    visitNumericLiteral(ctx) {
        this.print("NumericLiteral")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#rdfLiteral.
    visitRdfLiteral(ctx) {
        this.print("RdfLiteral")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#iri.
    visitIri(ctx) {
        this.print("Iri")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#iriList.
    visitIriList(ctx) {
        this.print("IriList")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#prefixedName.
    visitPrefixedName(ctx) {
        this.print("PrefixedName")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#blankNode.
    visitBlankNode(ctx) {
        this.print("BlankNode")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#quickVar.
    visitQuickVar(ctx) {
        this.print("QuickVar")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#existential.
    visitExistential(ctx) {
        this.print("Existential")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#universal.
    visitUniversal(ctx) {
        this.print("Universal")
        return this.doVisitChildren(ctx)
    }


    incrLvl() {
        this.lvl++;
    }

    decrLvl() {
        this.lvl--;
    }

    print(el) {
        var ws = new Array(this.lvl + 1).join(" ");
        var out = ws + el + "\n";

        this.listener.newAstLine(out);
    }

    doVisitChildren(ctx) {
        this.lvl++;
        this.visitChildren(ctx);
        this.lvl--;
    }

    visitChildren(node) {
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
}