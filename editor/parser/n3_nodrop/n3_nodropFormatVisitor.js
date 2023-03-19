import n3_nodropVisitor from './n3_nodropVisitor';
// import n3_nodropParser from './n3_nodropParser';

export default class n3_nodropFormatVisitor extends n3_nodropVisitor {
    
    static CHANNEL_COMMENT = 2;

    static DIR_LEFT = 1;
    static DIR_RIGHT = 2;

    constructor(config, tokens) {
        super();

        this.config = config;
        this.tokens = tokens;

        this.str = "";
        this.indent = 0;
    }

    callAccept(child) {
        child.accept(this);
    }

    // Visit a parse tree produced by n3Parser#n3Doc.
    visitN3Doc(ctx) {
        this.logVisit("N3Doc");

        this.visitGraphContents(ctx);

        // TODO integrate all these re-assignments into visit checks
        // (currently we cannot "stream" output)

        // - drop newlines between "}" and "."
        this.str = this.str.replace(/\}\n\s*\./g, "} .");

        return this.str;
    }

    // Visit a parse tree produced by n3Parser#n3Statement.
    visitN3Statement(ctx) {
        this.logVisit("N3Statement");
        this.doVisitChildren(ctx);
    }


    // Visit a parse tree produced by n3Parser#n3Directive.
    visitN3Directive(ctx) {
        this.logVisit("N3Directive");
        this.doVisitChildren(ctx);
    }


    // Visit a parse tree produced by n3Parser#sparqlDirective.
    visitSparqlDirective(ctx) {
        this.logVisit("SparqlDirective");
        this.doVisitChildren(ctx);
    }


    // Visit a parse tree produced by n3Parser#sparqlBase.
    visitSparqlBase(ctx) {
        this.logVisit("SparqlBase");
        this.doVisitChildren(ctx, " ");
    }


    // Visit a parse tree produced by n3Parser#sparqlPrefix.
    visitSparqlPrefix(ctx) {
        this.logVisit("SparqlPrefix");
        this.doVisitChildren(ctx, " ");
    }


    // Visit a parse tree produced by n3Parser#prefixID.
    visitPrefixID(ctx) {
        this.logVisit("PrefixID");
        this.doVisitChildren(ctx, " ");
    }


    // Visit a parse tree produced by n3Parser#base.
    visitBase(ctx) {
        this.logVisit("Base");
        this.doVisitChildren(ctx, " ");
    }


    // Visit a parse tree produced by n3Parser#triples.
    visitTriples(ctx) {
        this.logVisit("Triples");
        this.doVisitChildren(ctx, " ");
    }


    // Visit a parse tree produced by n3Parser#predicateObjectList.
    visitPredicateObjectList(ctx) {
        this.logVisit("PredicateObjectList");

        let indented = false;
        ctx.children.forEach(child => {
            // terminal ";"
            if (child.symbol !== undefined) {
                // if needed, increment level
                if (!indented) {
                    // indent taken care of by blankNodePropertyList, iriPropertyList
                    if (ctx.parentCtx.ruleIndex != 19 &&
                        ctx.parentCtx.ruleIndex != 20) {

                        indented = true;
                        this.incrIndent();
                    }
                }

                // newline after ";"; 
                this.print(child);
                this.appendNewline();

            } else {
                // non-terminal (term)
                this.callAccept(child);
                this.separate(" ");
            }
        });

        // after, decrement level again
        if (indented)
            this.decrIndent();
    }


    // Visit a parse tree produced by n3Parser#objectList.
    visitObjectList(ctx) {
        this.logVisit("ObjectList");
        this.doVisitChildren(ctx, " ");
    }


    // Visit a parse tree produced by n3Parser#verb.
    visitVerb(ctx) {
        this.logVisit("Verb")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#subject.
    visitSubject(ctx) {
        this.logVisit("Subject")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#predicate.
    visitPredicate(ctx) {
        this.logVisit("Predicate")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#object.
    visitObject(ctx) {
        this.logVisit("Object")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#expression.
    visitExpression(ctx) {
        this.logVisit("Expression")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#path.
    visitPath(ctx) {
        this.logVisit("Path")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#pathItem.
    visitPathItem(ctx) {
        this.logVisit("PathItem")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#literal.
    visitLiteral(ctx) {
        this.logVisit("Literal")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#blankNodePropertyList.
    visitBlankNodePropertyList(ctx) {
        this.logVisit("BlankNodePropertyList");

        // "["
        this.print(ctx.getChild(0));

        this.incrIndent();
        this.appendNewline();

        for (let i = 1; i < ctx.getChildCount() - 1; i++) {
            this.callAccept(ctx.getChild(i));
        }

        this.decrIndent();

        this.appendNewline();
        // "]"
        this.print(ctx.getChild(ctx.getChildCount() - 1));
    }


    // Visit a parse tree produced by n3Parser#iriPropertyList.
    visitIriPropertyList(ctx) {
        this.logVisit("IriPropertyList")

        // IPLSTART
        this.print(ctx.getChild(0));

        // id
        this.separate(" ");
        this.callAccept(ctx.getChild(1));

        this.incrIndent(1);
        this.appendNewline();

        for (let i = 2; i < ctx.getChildCount() - 1; i++) {
            this.callAccept(ctx.getChild(i));
        }

        this.decrIndent(1);

        this.appendNewline();
        // "]"
        this.print(ctx.getChild(ctx.getChildCount() - 1));
    }


    // Visit a parse tree produced by n3Parser#collection.
    visitCollection(ctx) {
        this.logVisit("Collection");

        // in case of any formula descendants,
        // print list contents like bnode property list
        // (22: rule index of formula)
        if (this.hasSomeDescendant(ctx, 22)) {

            // "("
            this.print(ctx.getChild(0));

            this.incrIndent();

            for (let i = 1; i < ctx.getChildCount() - 1; i++) {
                if (i > 1)
                    this.appendNewline();

                this.callAccept(ctx.getChild(i));
            }

            this.decrIndent();

            this.appendNewline();
            // ")"
            this.print(ctx.getChild(ctx.getChildCount() - 1));

        } else
            this.doVisitChildren(ctx, " ");
    }

    hasSomeDescendant(ctx, ruleIndex) {
        if (ctx.ruleIndex == ruleIndex)
            return true;

        if (ctx.children)
            return ctx.children.some(child => this.hasSomeDescendant(child, ruleIndex));
        else
            return false;
    }

    // Visit a parse tree produced by n3Parser#formula.
    visitFormula(ctx) {
        this.logVisit("Formula");

        // empty formula
        if (ctx.getChildCount() == 2) {
            this.doVisitChildren(ctx);
            return
        }

        // terminal "{"
        if (this.config.graphOnNewline) {
            this.appendNewline();
        }

        this.print(ctx.getChild(0));

        this.incrIndent();
        this.appendNewline();

        this.callAccept(ctx.getChild(1));

        this.decrIndent();

        // terminal "}"
        this.appendNewline();
        this.print(ctx.getChild(2));

        if (this.config.graphOnNewline) {
            this.appendNewline();
        }
    }


    // Visit a parse tree produced by n3Parser#formulaContent.
    visitFormulaContent(ctx) {
        this.logVisit("FormulaContent");

        this.visitGraphContents(ctx);
    }


    // Visit a parse tree produced by n3Parser#numericLiteral.
    visitNumericLiteral(ctx) {
        this.logVisit("NumericLiteral")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#rdfLiteral.
    visitRdfLiteral(ctx) {
        this.logVisit("RdfLiteral")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#iri.
    visitIri(ctx) {
        this.logVisit("Iri")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#iriList.
    visitIriList(ctx) {
        this.logVisit("IriList")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#prefixedName.
    visitPrefixedName(ctx) {
        this.logVisit("PrefixedName")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#blankNode.
    visitBlankNode(ctx) {
        this.logVisit("BlankNode")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#quickVar.
    visitQuickVar(ctx) {
        this.logVisit("QuickVar")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#existential.
    visitExistential(ctx) {
        this.logVisit("Existential")
        return this.doVisitChildren(ctx)
    }


    // Visit a parse tree produced by n3Parser#universal.
    visitUniversal(ctx) {
        this.logVisit("Universal")
        return this.doVisitChildren(ctx)
    }


    incrIndent(plus) {
        this.indent += this.config.tab + (plus ? plus : 0);
    }

    decrIndent(minus) {
        this.indent -= (this.config.tab + (minus ? minus : 0));
    }

    visitGraphContents(ctx) {
        let n = ctx.getChildCount();
        for (let i = 0; i < n; i++) {
            let child = ctx.getChild(i);

            // terminating "."
            if (child.symbol !== undefined) {
                if (child.toString() == "<EOF>")
                    return;

                this.separate(" ");
                this.print(child);
                // newline for N3Statements after "."
                if (i < n - 1) // not last child
                    this.appendNewline();

            } else {
                // non-terminal
                this.callAccept(child);
                if (child.ruleIndex == 3) { // SparqlDirective
                    if (i < n - 1) // not last child
                        this.appendNewline(); // newline afterwards
                }
            }
        }
    }

    doVisitChildren(ctx, sep) {
        this.visitChildren(ctx, sep);
    }

    visitChildren(node, sep) {
        for (var i = 0; i < node.getChildCount(); i++) {
            var child = node.getChild(i);
            // console.log("child", child);

            if (sep && i > 0)
                this.separate(sep);

            // terminal
            if (child.symbol !== undefined) {
                this.print(child);

                // (get type of symbol for debugging)
                // var type = c.symbol.type;
                // if (type != -1 && n3Parser.symbolicNames[type] !== null)
                //     out += " (" + n3Parser.symbolicNames[type] + ")";

            } else {
                // non-terminal
                this.callAccept(child);
            }
        }
    }

    logVisit(el) {
        // console.log(el);
    }

    appendNewline() {
        // if we already end with newline:
        // drop that one (and its subsequent indent)
        if (/.*\n\s*$/g.test(this.str))
            this.str = this.str.trim();

        this.print("\n" + new Array(this.indent).join(" "));
    }

    separate(sep) {
        // let's not add space separator after a whitespace
        // (e.g., when putting newlines around =>)
        if (sep == " " && /.*\s+$/g.test(this.str))
            return;

        this.print(sep);
    }

    print(node) {
        if (typeof node === 'string') {
            this.str += node;

        } else {
            // for every single token we print
            // check whether there's a comment before or after
            let commentLeft = this.hiddenToken(node,
                n3_nodropFormatVisitor.DIR_LEFT, n3_nodropFormatVisitor.CHANNEL_COMMENT);
            if (commentLeft) {
                // console.log("commentLeft", commentLeft.text);
                this.str += commentLeft.text;
                this.appendNewline(); // add newline after this comment
            }

            this.str += node;

            let commentRight = this.hiddenToken(node,
                n3_nodropFormatVisitor.DIR_RIGHT, n3_nodropFormatVisitor.CHANNEL_COMMENT);
            if (commentRight) {
                // console.log("commentRight", commentRight.text);
                this.separate(" "); // add ws after whatever we printed before
                this.str += commentRight.text;
                this.appendNewline(); // add newline after this comment
            }
        }
    }

    hiddenToken(node, dir, channelId) {
        let symbol;
        if (node.symbol)
            symbol = node.symbol
        else {
            if (dir == n3_nodropFormatVisitor.DIR_LEFT)
                symbol = node.start;
            else
                symbol = node.end;
        }

        let idx = symbol.tokenIndex;

        let fn = (dir == n3_nodropFormatVisitor.DIR_LEFT ?
            this.tokens.getHiddenTokensToLeft :
            this.tokens.getHiddenTokensToRight
        );
        let channel = fn.call(this.tokens, idx, channelId);
        if (channel != null) {
            let token = channel[0];
            if (!token.consumed) {
                token.consumed = true;
                return token;
            }
        }

        return false;
    }
}