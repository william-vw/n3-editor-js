import n3_nodropVisitor from './n3_nodropVisitor';
// import n3_nodropParser from './n3_nodropParser';

export default class n3_nodropFormatVisitor extends n3_nodropVisitor {
    
    static CHANNEL_WHITESPACE = 1;
    static CHANNEL_COMMENT = 2;

    static DIR_LEFT = 1;
    static DIR_RIGHT = 2;

    constructor(config, tokens, n3Parser) {
        super();

        this.config = config;
        this.tokens = tokens;
        this.n3Parser = n3Parser;

        this.str = "";
        this.indent = 0;

        if (config.formatNamespaces) {
            this.ns = {};
            this.base = "";
        }
    }

    callAccept(child) {
        child.accept(this);
    }

    // Visit a parse tree produced by n3Parser#n3Doc.
    visitN3Doc(ctx) {
        this.logVisit("N3Doc");

        // get comment at start of document, if any
        let startCmt = this.leftComment(ctx.children[0]);

        this.doVisitGraphContents(ctx);

        // TODO integrate all these re-assignments into visit checks
        // (currently we cannot "stream" output)

        // - drop newlines between "}" and "."
        this.str = this.str.replace(/\}\n\s*\./g, "} .");

        if (this.config.formatNamespaces)
            this.printNamespaces();

        if (startCmt)
            this.str = startCmt + this.str;

        return this.str;
    }

    printNamespaces() {
        let prefixes = Object.keys(this.ns);
        prefixes.sort();

        let preamble = prefixes.map(prefix =>
            `@prefix ${prefix} ${this.ns[prefix]} .`
        ).join("\n");

        if (this.base) {
            if (preamble)
                preamble += "\n";
            preamble += `@base ${this.base} .`;
        }

        if (preamble == "")
            return;

        // not starting with comment
        // (in that case, comment is in charge of newlines)
        if (!/^\s*#/.test(this.str))
            preamble += "\n\n";

        this.str = preamble + this.str;
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

        this.doVisitBase(ctx);
    }


    // Visit a parse tree produced by n3Parser#sparqlPrefix.
    visitSparqlPrefix(ctx) {
        this.logVisit("SparqlPrefix");

        this.doVisitPrefix(ctx);
    }


    // Visit a parse tree produced by n3Parser#prefixID.
    visitPrefixID(ctx) {
        this.logVisit("PrefixID");

        this.doVisitPrefix(ctx);
    }


    // Visit a parse tree produced by n3Parser#base.
    visitBase(ctx) {
        this.logVisit("Base");

        this.doVisitBase(ctx);
    }


    doVisitBase(ctx) {
        if (this.config.formatNamespaces)
            this.base = ctx.children[1].toString();
        else
            this.doVisitChildren(ctx, " ");
    }


    doVisitPrefix(ctx) {
        if (this.config.formatNamespaces) {
            let prefix = ctx.children[1].toString()
            let uri = ctx.children[2].toString()

            if (this.ns[prefix])
                console.warn(`overwriting prefix '${prefix}'`);

            this.ns[prefix] = uri;

        } else
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
                    let name = this.ruleName(ctx.parentCtx)
                    if (name != "blankNodePropertyList" &&
                        name != "iriPropertyList") {

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
        if (this.hasSomeDescendant(ctx, "formula")) {

            // "("
            this.print(ctx.getChild(0));

            this.incrIndent();
            this.appendNewline();

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

        this.doVisitGraphContents(ctx);
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

    doVisitGraphContents(ctx) {
        let n = ctx.getChildCount();

        // either:
        // pairs of n3Statement "."
        // or sparqlDirective
        // or <EOF>
        for (let i = 0; i < n; i++) {
            let child = ctx.getChild(i);

            // console.log(this.getName(child), "skip?", this.skipNode(child));

            // either terminating "." or <EOF>
            if (child.symbol !== undefined) {
                // don't print terminating "." if prior child did not get printed
                if (this.skipNode(ctx.getChild(i - 1)))
                    continue;

                if (child.toString() == "<EOF>")
                    continue;

                this.separate(" ");
                this.print(child);
                // newline for n3Statements after "."
                if (i < n - 1) // don't add after last child
                    this.appendNewline();

            } else {
                // non-terminal
                // (n3Statement or sparqlDirective)
                this.callAccept(child);

                // newline after sparqlDirectives
                // (don't add newline if directive got skipped)
                if (this.ruleName(child) == "sparqlDirective" && !this.skipNode(child)) {
                    if (i < n - 1) // don't add after last child
                        this.appendNewline();
                }
            }
        }
    }

    // whether a node will not be printed
    skipNode(node) {
        if (this.config.formatNamespaces) {
            if (this.ruleName(node) == "sparqlDirective")
                return true;

            if (node.children && node.children.length == 1) {
                if (this.ruleName(node.children[0]) == "n3Directive")
                    return true;
            }

            return false;
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

            } else {
                // non-terminal
                this.callAccept(child);
            }
        }
    }


    logVisit(el) {
        // console.log(el);
    }

    logChildren(ctx) {
        let out = ctx.children.map(child => {
            if (child.symbol) {
                return this.symbolName(child);

            } else {
                return this.ruleName(child)
            }
        });

        console.log("<-", out.join(" "));
    }

    hasSomeDescendant(ctx, name) {
        if (this.ruleName(ctx) == name)
            return true;

        if (ctx.children)
            return ctx.children.some(child => this.hasSomeDescendant(child, name));
        else
            return false;
    }

    getName(node) {
        let name = this.ruleName(node)
        if (name)
            return name;
        else
            return this.symbolName(node)
    }

    symbolName(node) {
        let type = node.symbol.type
        let name = this.n3Parser.symbolicNames[type]
        if (!name)
            name = this.n3Parser.literalNames[type]

        return name
    }

    ruleName(node) {
        let rule = node.ruleIndex
        return this.n3Parser.ruleNames[rule]
    }

    appendNewline() {
        // if we already end with newline:
        // replace it with our newline (and its possibly updated indents)
        let matches = [...this.str.matchAll(/^([\s\S]*)\n\s*$/g)];
        if (matches.length > 0) {
            this.str = matches[0][1];
        }

        this.str += "\n" + new Array(this.indent).join(" ");
    }

    separate(sep) {
        // don't add space separator after a whitespace
        // (e.g., when putting newlines around =>)
        if (sep == " " && /.*\s+$/g.test(this.str))
            return;

        this.str += sep;
    }

    print(node) {
        if (typeof node === 'string') {
            this.str += node;

            // for every single node we print:
            // check whether there's a comment before or after
        } else {
            this.str += this.leftComment(node);
            this.str += node;
            this.str += this.rightComment(node);
        }
    }

    // for left side, print all prior comments & newlines until non-hidden token
    leftComment(node) {
        // includes all comments & newlines until prior non-hidden token
        let tokens = this.nextHiddenTokens(node, n3_nodropFormatVisitor.DIR_LEFT);
        // there's a comment in there somewhere
        if (tokens && tokens.some(t => t.channel == n3_nodropFormatVisitor.CHANNEL_COMMENT)) {
            // console.log("hidden-left", tokens, tokens.map(c => c.text));

            let text = tokens.map(c => c.text).join("");
            // after the last comment, keep only the newlines
            text = text.replace(/[ \t]*$/, "");

            return text;
        }

        return "";
    }

    // for right side, print next comment + newline
    rightComment(node) {
        // includes all comments & newlines until next non-hidden token
        let tokens = this.nextHiddenTokens(node, n3_nodropFormatVisitor.DIR_RIGHT);

        // there's a comment in there somewhere
        if (tokens && tokens.some(t => t.channel == n3_nodropFormatVisitor.CHANNEL_COMMENT)) {
            // console.log("hidden-right", tokens, tokens.map(c => c.text));

            this.separate(" "); // add ws after whatever we printed before

            let text = tokens.map(c => c.text).join("");
            // keep all whitespaces before first comment & between comments
            text = text.trimEnd();

            if (text)
                return text + "\n";
        }

        return "";
    }

    nextHiddenTokens(node, dir, channelId) {
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
            // make sure to return tokens only once
            // (e.g., right-side comment showing up as left-side comment next)
            channel = channel.filter(t => !t.consumed);
            channel.forEach(t => t.consumed = true);

            return channel;
        }

        return false;
    }
}