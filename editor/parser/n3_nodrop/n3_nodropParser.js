// Generated from n3_nodrop.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import n3_nodropListener from './n3_nodropListener.js';
import n3_nodropVisitor from './n3_nodropVisitor.js';

const serializedATN = [4,1,55,225,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,0,1,0,1,0,5,0,66,8,0,10,0,12,0,69,9,0,
1,0,1,0,1,1,1,1,3,1,75,8,1,1,2,1,2,3,2,79,8,2,1,3,1,3,3,3,83,8,3,1,4,1,4,
1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,3,8,101,8,8,1,9,
1,9,1,9,1,9,1,9,1,9,3,9,109,8,9,5,9,111,8,9,10,9,12,9,114,9,9,1,10,1,10,
1,10,5,10,119,8,10,10,10,12,10,122,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,3,11,135,8,11,1,12,1,12,1,13,1,13,1,13,3,13,142,8,
13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,153,8,16,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,3,17,163,8,17,1,18,1,18,1,18,3,18,168,8,18,
1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,5,21,181,8,21,10,
21,12,21,184,9,21,1,21,1,21,1,22,1,22,3,22,190,8,22,1,22,1,22,1,23,1,23,
1,23,3,23,197,8,23,3,23,199,8,23,1,23,1,23,3,23,203,8,23,3,23,205,8,23,1,
24,1,24,1,25,1,25,1,25,1,25,3,25,213,8,25,1,26,1,26,3,26,217,8,26,1,27,1,
27,1,28,1,28,1,29,1,29,1,29,0,0,30,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,0,3,1,0,31,33,1,0,27,28,
2,0,29,29,43,43,231,0,67,1,0,0,0,2,74,1,0,0,0,4,78,1,0,0,0,6,82,1,0,0,0,
8,84,1,0,0,0,10,87,1,0,0,0,12,91,1,0,0,0,14,95,1,0,0,0,16,98,1,0,0,0,18,
102,1,0,0,0,20,115,1,0,0,0,22,134,1,0,0,0,24,136,1,0,0,0,26,141,1,0,0,0,
28,143,1,0,0,0,30,145,1,0,0,0,32,147,1,0,0,0,34,162,1,0,0,0,36,167,1,0,0,
0,38,169,1,0,0,0,40,173,1,0,0,0,42,178,1,0,0,0,44,187,1,0,0,0,46,204,1,0,
0,0,48,206,1,0,0,0,50,208,1,0,0,0,52,216,1,0,0,0,54,218,1,0,0,0,56,220,1,
0,0,0,58,222,1,0,0,0,60,66,5,23,0,0,61,62,3,2,1,0,62,63,5,1,0,0,63,66,1,
0,0,0,64,66,3,6,3,0,65,60,1,0,0,0,65,61,1,0,0,0,65,64,1,0,0,0,66,69,1,0,
0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,67,1,0,0,0,70,71,5,0,0,
1,71,1,1,0,0,0,72,75,3,4,2,0,73,75,3,16,8,0,74,72,1,0,0,0,74,73,1,0,0,0,
75,3,1,0,0,0,76,79,3,12,6,0,77,79,3,14,7,0,78,76,1,0,0,0,78,77,1,0,0,0,79,
5,1,0,0,0,80,83,3,8,4,0,81,83,3,10,5,0,82,80,1,0,0,0,82,81,1,0,0,0,83,7,
1,0,0,0,84,85,5,48,0,0,85,86,5,26,0,0,86,9,1,0,0,0,87,88,5,49,0,0,88,89,
5,27,0,0,89,90,5,26,0,0,90,11,1,0,0,0,91,92,5,2,0,0,92,93,5,27,0,0,93,94,
5,26,0,0,94,13,1,0,0,0,95,96,5,3,0,0,96,97,5,26,0,0,97,15,1,0,0,0,98,100,
3,24,12,0,99,101,3,18,9,0,100,99,1,0,0,0,100,101,1,0,0,0,101,17,1,0,0,0,
102,103,3,22,11,0,103,112,3,20,10,0,104,108,5,4,0,0,105,106,3,22,11,0,106,
107,3,20,10,0,107,109,1,0,0,0,108,105,1,0,0,0,108,109,1,0,0,0,109,111,1,
0,0,0,110,104,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,
19,1,0,0,0,114,112,1,0,0,0,115,120,3,28,14,0,116,117,5,5,0,0,117,119,3,28,
14,0,118,116,1,0,0,0,119,122,1,0,0,0,120,118,1,0,0,0,120,121,1,0,0,0,121,
21,1,0,0,0,122,120,1,0,0,0,123,135,3,26,13,0,124,135,5,6,0,0,125,126,5,7,
0,0,126,135,3,30,15,0,127,128,5,8,0,0,128,129,3,30,15,0,129,130,5,9,0,0,
130,135,1,0,0,0,131,135,5,10,0,0,132,135,5,11,0,0,133,135,5,12,0,0,134,123,
1,0,0,0,134,124,1,0,0,0,134,125,1,0,0,0,134,127,1,0,0,0,134,131,1,0,0,0,
134,132,1,0,0,0,134,133,1,0,0,0,135,23,1,0,0,0,136,137,3,30,15,0,137,25,
1,0,0,0,138,142,3,30,15,0,139,140,5,13,0,0,140,142,3,30,15,0,141,138,1,0,
0,0,141,139,1,0,0,0,142,27,1,0,0,0,143,144,3,30,15,0,144,29,1,0,0,0,145,
146,3,32,16,0,146,31,1,0,0,0,147,152,3,34,17,0,148,149,5,14,0,0,149,153,
3,32,16,0,150,151,5,15,0,0,151,153,3,32,16,0,152,148,1,0,0,0,152,150,1,0,
0,0,152,153,1,0,0,0,153,33,1,0,0,0,154,163,3,52,26,0,155,163,3,56,28,0,156,
163,3,58,29,0,157,163,3,42,21,0,158,163,3,38,19,0,159,163,3,40,20,0,160,
163,3,36,18,0,161,163,3,44,22,0,162,154,1,0,0,0,162,155,1,0,0,0,162,156,
1,0,0,0,162,157,1,0,0,0,162,158,1,0,0,0,162,159,1,0,0,0,162,160,1,0,0,0,
162,161,1,0,0,0,163,35,1,0,0,0,164,168,3,50,25,0,165,168,3,48,24,0,166,168,
5,24,0,0,167,164,1,0,0,0,167,165,1,0,0,0,167,166,1,0,0,0,168,37,1,0,0,0,
169,170,5,16,0,0,170,171,3,18,9,0,171,172,5,17,0,0,172,39,1,0,0,0,173,174,
5,42,0,0,174,175,3,52,26,0,175,176,3,18,9,0,176,177,5,17,0,0,177,41,1,0,
0,0,178,182,5,18,0,0,179,181,3,28,14,0,180,179,1,0,0,0,181,184,1,0,0,0,182,
180,1,0,0,0,182,183,1,0,0,0,183,185,1,0,0,0,184,182,1,0,0,0,185,186,5,19,
0,0,186,43,1,0,0,0,187,189,5,20,0,0,188,190,3,46,23,0,189,188,1,0,0,0,189,
190,1,0,0,0,190,191,1,0,0,0,191,192,5,21,0,0,192,45,1,0,0,0,193,198,3,2,
1,0,194,196,5,1,0,0,195,197,3,46,23,0,196,195,1,0,0,0,196,197,1,0,0,0,197,
199,1,0,0,0,198,194,1,0,0,0,198,199,1,0,0,0,199,205,1,0,0,0,200,202,3,6,
3,0,201,203,3,46,23,0,202,201,1,0,0,0,202,203,1,0,0,0,203,205,1,0,0,0,204,
193,1,0,0,0,204,200,1,0,0,0,205,47,1,0,0,0,206,207,7,0,0,0,207,49,1,0,0,
0,208,212,5,25,0,0,209,213,5,30,0,0,210,211,5,22,0,0,211,213,3,52,26,0,212,
209,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,51,1,0,0,0,214,217,5,26,
0,0,215,217,3,54,27,0,216,214,1,0,0,0,216,215,1,0,0,0,217,53,1,0,0,0,218,
219,7,1,0,0,219,55,1,0,0,0,220,221,7,2,0,0,221,57,1,0,0,0,222,223,5,44,0,
0,223,59,1,0,0,0,22,65,67,74,78,82,100,108,112,120,134,141,152,162,167,182,
189,196,198,202,204,212,216];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class n3_nodropParser extends antlr4.Parser {

    static grammarFileName = "n3_nodrop.g4";
    static literalNames = [ null, "'.'", "'@prefix'", "'@base'", "';'", 
                            "','", "'a'", "'has'", "'is'", "'of'", "'='", 
                            "'<='", "'=>'", "'<-'", "'!'", "'^'", "'['", 
                            "']'", "'('", "')'", "'{'", "'}'", "'^^'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "COMMENT", 
                             "BooleanLiteral", "String", "IRIREF", "PNAME_NS", 
                             "PNAME_LN", "BLANK_NODE_LABEL", "LANGTAG", 
                             "INTEGER", "DECIMAL", "DOUBLE", "EXPONENT", 
                             "STRING_LITERAL_LONG_SINGLE_QUOTE", "STRING_LITERAL_LONG_QUOTE", 
                             "STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE", 
                             "UCHAR", "ECHAR", "WS", "IPLSTART", "ANON", 
                             "QuickVarName", "PN_CHARS_U", "PN_CHARS_BASE", 
                             "PN_CHARS", "BASE", "PREFIX", "PN_PREFIX", 
                             "PN_LOCAL", "PLX", "PERCENT", "HEX", "PN_LOCAL_ESC" ];
    static ruleNames = [ "n3Doc", "n3Statement", "n3Directive", "sparqlDirective", 
                         "sparqlBase", "sparqlPrefix", "prefixID", "base", 
                         "triples", "predicateObjectList", "objectList", 
                         "verb", "subject", "predicate", "object", "expression", 
                         "path", "pathItem", "literal", "blankNodePropertyList", 
                         "iriPropertyList", "collection", "formula", "formulaContent", 
                         "numericLiteral", "rdfLiteral", "iri", "prefixedName", 
                         "blankNode", "quickVar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = n3_nodropParser.ruleNames;
        this.literalNames = n3_nodropParser.literalNames;
        this.symbolicNames = n3_nodropParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	n3Doc() {
	    let localctx = new N3DocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, n3_nodropParser.RULE_n3Doc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__1) | (1 << n3_nodropParser.T__2) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.COMMENT) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)) | (1 << (n3_nodropParser.BASE - 32)) | (1 << (n3_nodropParser.PREFIX - 32)))) !== 0)) {
	            this.state = 65;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case n3_nodropParser.COMMENT:
	                this.state = 60;
	                this.match(n3_nodropParser.COMMENT);
	                break;
	            case n3_nodropParser.T__1:
	            case n3_nodropParser.T__2:
	            case n3_nodropParser.T__15:
	            case n3_nodropParser.T__17:
	            case n3_nodropParser.T__19:
	            case n3_nodropParser.BooleanLiteral:
	            case n3_nodropParser.String:
	            case n3_nodropParser.IRIREF:
	            case n3_nodropParser.PNAME_NS:
	            case n3_nodropParser.PNAME_LN:
	            case n3_nodropParser.BLANK_NODE_LABEL:
	            case n3_nodropParser.INTEGER:
	            case n3_nodropParser.DECIMAL:
	            case n3_nodropParser.DOUBLE:
	            case n3_nodropParser.IPLSTART:
	            case n3_nodropParser.ANON:
	            case n3_nodropParser.QuickVarName:
	                this.state = 61;
	                this.n3Statement();
	                this.state = 62;
	                this.match(n3_nodropParser.T__0);
	                break;
	            case n3_nodropParser.BASE:
	            case n3_nodropParser.PREFIX:
	                this.state = 64;
	                this.sparqlDirective();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
	        this.match(n3_nodropParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	n3Statement() {
	    let localctx = new N3StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, n3_nodropParser.RULE_n3Statement);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.T__1:
	        case n3_nodropParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.n3Directive();
	            break;
	        case n3_nodropParser.T__15:
	        case n3_nodropParser.T__17:
	        case n3_nodropParser.T__19:
	        case n3_nodropParser.BooleanLiteral:
	        case n3_nodropParser.String:
	        case n3_nodropParser.IRIREF:
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	        case n3_nodropParser.BLANK_NODE_LABEL:
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	        case n3_nodropParser.IPLSTART:
	        case n3_nodropParser.ANON:
	        case n3_nodropParser.QuickVarName:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.triples();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	n3Directive() {
	    let localctx = new N3DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, n3_nodropParser.RULE_n3Directive);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.T__1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.prefixID();
	            break;
	        case n3_nodropParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.base();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sparqlDirective() {
	    let localctx = new SparqlDirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, n3_nodropParser.RULE_sparqlDirective);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.BASE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.sparqlBase();
	            break;
	        case n3_nodropParser.PREFIX:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.sparqlPrefix();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sparqlBase() {
	    let localctx = new SparqlBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, n3_nodropParser.RULE_sparqlBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(n3_nodropParser.BASE);
	        this.state = 85;
	        this.match(n3_nodropParser.IRIREF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sparqlPrefix() {
	    let localctx = new SparqlPrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, n3_nodropParser.RULE_sparqlPrefix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(n3_nodropParser.PREFIX);
	        this.state = 88;
	        this.match(n3_nodropParser.PNAME_NS);
	        this.state = 89;
	        this.match(n3_nodropParser.IRIREF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefixID() {
	    let localctx = new PrefixIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, n3_nodropParser.RULE_prefixID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(n3_nodropParser.T__1);
	        this.state = 92;
	        this.match(n3_nodropParser.PNAME_NS);
	        this.state = 93;
	        this.match(n3_nodropParser.IRIREF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, n3_nodropParser.RULE_base);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(n3_nodropParser.T__2);
	        this.state = 96;
	        this.match(n3_nodropParser.IRIREF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	triples() {
	    let localctx = new TriplesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, n3_nodropParser.RULE_triples);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.subject();
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__5) | (1 << n3_nodropParser.T__6) | (1 << n3_nodropParser.T__7) | (1 << n3_nodropParser.T__9) | (1 << n3_nodropParser.T__10) | (1 << n3_nodropParser.T__11) | (1 << n3_nodropParser.T__12) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)))) !== 0)) {
	            this.state = 99;
	            this.predicateObjectList();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicateObjectList() {
	    let localctx = new PredicateObjectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, n3_nodropParser.RULE_predicateObjectList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.verb();
	        this.state = 103;
	        this.objectList();
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===n3_nodropParser.T__3) {
	            this.state = 104;
	            this.match(n3_nodropParser.T__3);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__5) | (1 << n3_nodropParser.T__6) | (1 << n3_nodropParser.T__7) | (1 << n3_nodropParser.T__9) | (1 << n3_nodropParser.T__10) | (1 << n3_nodropParser.T__11) | (1 << n3_nodropParser.T__12) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)))) !== 0)) {
	                this.state = 105;
	                this.verb();
	                this.state = 106;
	                this.objectList();
	            }

	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectList() {
	    let localctx = new ObjectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, n3_nodropParser.RULE_objectList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.object();
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===n3_nodropParser.T__4) {
	            this.state = 116;
	            this.match(n3_nodropParser.T__4);
	            this.state = 117;
	            this.object();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	verb() {
	    let localctx = new VerbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, n3_nodropParser.RULE_verb);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.T__12:
	        case n3_nodropParser.T__15:
	        case n3_nodropParser.T__17:
	        case n3_nodropParser.T__19:
	        case n3_nodropParser.BooleanLiteral:
	        case n3_nodropParser.String:
	        case n3_nodropParser.IRIREF:
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	        case n3_nodropParser.BLANK_NODE_LABEL:
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	        case n3_nodropParser.IPLSTART:
	        case n3_nodropParser.ANON:
	        case n3_nodropParser.QuickVarName:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.predicate();
	            break;
	        case n3_nodropParser.T__5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 124;
	            this.match(n3_nodropParser.T__5);
	            break;
	        case n3_nodropParser.T__6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
	            this.match(n3_nodropParser.T__6);
	            this.state = 126;
	            this.expression();
	            break;
	        case n3_nodropParser.T__7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
	            this.match(n3_nodropParser.T__7);
	            this.state = 128;
	            this.expression();
	            this.state = 129;
	            this.match(n3_nodropParser.T__8);
	            break;
	        case n3_nodropParser.T__9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 131;
	            this.match(n3_nodropParser.T__9);
	            break;
	        case n3_nodropParser.T__10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 132;
	            this.match(n3_nodropParser.T__10);
	            break;
	        case n3_nodropParser.T__11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 133;
	            this.match(n3_nodropParser.T__11);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subject() {
	    let localctx = new SubjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, n3_nodropParser.RULE_subject);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, n3_nodropParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.T__15:
	        case n3_nodropParser.T__17:
	        case n3_nodropParser.T__19:
	        case n3_nodropParser.BooleanLiteral:
	        case n3_nodropParser.String:
	        case n3_nodropParser.IRIREF:
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	        case n3_nodropParser.BLANK_NODE_LABEL:
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	        case n3_nodropParser.IPLSTART:
	        case n3_nodropParser.ANON:
	        case n3_nodropParser.QuickVarName:
	            this.state = 138;
	            this.expression();
	            break;
	        case n3_nodropParser.T__12:
	            this.state = 139;
	            this.match(n3_nodropParser.T__12);
	            this.state = 140;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, n3_nodropParser.RULE_object);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, n3_nodropParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this.path();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	path() {
	    let localctx = new PathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, n3_nodropParser.RULE_path);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.pathItem();
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case n3_nodropParser.T__13:
	        	this.state = 148;
	        	this.match(n3_nodropParser.T__13);
	        	this.state = 149;
	        	this.path();
	        	break;
	        case n3_nodropParser.T__14:
	        	this.state = 150;
	        	this.match(n3_nodropParser.T__14);
	        	this.state = 151;
	        	this.path();
	        	break;
	        case n3_nodropParser.T__0:
	        case n3_nodropParser.T__3:
	        case n3_nodropParser.T__4:
	        case n3_nodropParser.T__5:
	        case n3_nodropParser.T__6:
	        case n3_nodropParser.T__7:
	        case n3_nodropParser.T__8:
	        case n3_nodropParser.T__9:
	        case n3_nodropParser.T__10:
	        case n3_nodropParser.T__11:
	        case n3_nodropParser.T__12:
	        case n3_nodropParser.T__15:
	        case n3_nodropParser.T__16:
	        case n3_nodropParser.T__17:
	        case n3_nodropParser.T__18:
	        case n3_nodropParser.T__19:
	        case n3_nodropParser.T__20:
	        case n3_nodropParser.BooleanLiteral:
	        case n3_nodropParser.String:
	        case n3_nodropParser.IRIREF:
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	        case n3_nodropParser.BLANK_NODE_LABEL:
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	        case n3_nodropParser.IPLSTART:
	        case n3_nodropParser.ANON:
	        case n3_nodropParser.QuickVarName:
	        	break;
	        default:
	        	break;
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathItem() {
	    let localctx = new PathItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, n3_nodropParser.RULE_pathItem);
	    try {
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.IRIREF:
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.iri();
	            break;
	        case n3_nodropParser.BLANK_NODE_LABEL:
	        case n3_nodropParser.ANON:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 155;
	            this.blankNode();
	            break;
	        case n3_nodropParser.QuickVarName:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 156;
	            this.quickVar();
	            break;
	        case n3_nodropParser.T__17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 157;
	            this.collection();
	            break;
	        case n3_nodropParser.T__15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 158;
	            this.blankNodePropertyList();
	            break;
	        case n3_nodropParser.IPLSTART:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 159;
	            this.iriPropertyList();
	            break;
	        case n3_nodropParser.BooleanLiteral:
	        case n3_nodropParser.String:
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 160;
	            this.literal();
	            break;
	        case n3_nodropParser.T__19:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 161;
	            this.formula();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, n3_nodropParser.RULE_literal);
	    try {
	        this.state = 167;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.String:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.rdfLiteral();
	            break;
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.numericLiteral();
	            break;
	        case n3_nodropParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.match(n3_nodropParser.BooleanLiteral);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blankNodePropertyList() {
	    let localctx = new BlankNodePropertyListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, n3_nodropParser.RULE_blankNodePropertyList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(n3_nodropParser.T__15);
	        this.state = 170;
	        this.predicateObjectList();
	        this.state = 171;
	        this.match(n3_nodropParser.T__16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iriPropertyList() {
	    let localctx = new IriPropertyListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, n3_nodropParser.RULE_iriPropertyList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(n3_nodropParser.IPLSTART);
	        this.state = 174;
	        this.iri();
	        this.state = 175;
	        this.predicateObjectList();
	        this.state = 176;
	        this.match(n3_nodropParser.T__16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	collection() {
	    let localctx = new CollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, n3_nodropParser.RULE_collection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(n3_nodropParser.T__17);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (n3_nodropParser.T__15 - 16)) | (1 << (n3_nodropParser.T__17 - 16)) | (1 << (n3_nodropParser.T__19 - 16)) | (1 << (n3_nodropParser.BooleanLiteral - 16)) | (1 << (n3_nodropParser.String - 16)) | (1 << (n3_nodropParser.IRIREF - 16)) | (1 << (n3_nodropParser.PNAME_NS - 16)) | (1 << (n3_nodropParser.PNAME_LN - 16)) | (1 << (n3_nodropParser.BLANK_NODE_LABEL - 16)) | (1 << (n3_nodropParser.INTEGER - 16)) | (1 << (n3_nodropParser.DECIMAL - 16)) | (1 << (n3_nodropParser.DOUBLE - 16)) | (1 << (n3_nodropParser.IPLSTART - 16)) | (1 << (n3_nodropParser.ANON - 16)) | (1 << (n3_nodropParser.QuickVarName - 16)))) !== 0)) {
	            this.state = 179;
	            this.object();
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 185;
	        this.match(n3_nodropParser.T__18);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, n3_nodropParser.RULE_formula);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(n3_nodropParser.T__19);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__1) | (1 << n3_nodropParser.T__2) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)) | (1 << (n3_nodropParser.BASE - 32)) | (1 << (n3_nodropParser.PREFIX - 32)))) !== 0)) {
	            this.state = 188;
	            this.formulaContent();
	        }

	        this.state = 191;
	        this.match(n3_nodropParser.T__20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaContent() {
	    let localctx = new FormulaContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, n3_nodropParser.RULE_formulaContent);
	    var _la = 0; // Token type
	    try {
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.T__1:
	        case n3_nodropParser.T__2:
	        case n3_nodropParser.T__15:
	        case n3_nodropParser.T__17:
	        case n3_nodropParser.T__19:
	        case n3_nodropParser.BooleanLiteral:
	        case n3_nodropParser.String:
	        case n3_nodropParser.IRIREF:
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	        case n3_nodropParser.BLANK_NODE_LABEL:
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	        case n3_nodropParser.IPLSTART:
	        case n3_nodropParser.ANON:
	        case n3_nodropParser.QuickVarName:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.n3Statement();
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===n3_nodropParser.T__0) {
	                this.state = 194;
	                this.match(n3_nodropParser.T__0);
	                this.state = 196;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__1) | (1 << n3_nodropParser.T__2) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)) | (1 << (n3_nodropParser.BASE - 32)) | (1 << (n3_nodropParser.PREFIX - 32)))) !== 0)) {
	                    this.state = 195;
	                    this.formulaContent();
	                }

	            }

	            break;
	        case n3_nodropParser.BASE:
	        case n3_nodropParser.PREFIX:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 200;
	            this.sparqlDirective();
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__1) | (1 << n3_nodropParser.T__2) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)) | (1 << (n3_nodropParser.BASE - 32)) | (1 << (n3_nodropParser.PREFIX - 32)))) !== 0)) {
	                this.state = 201;
	                this.formulaContent();
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numericLiteral() {
	    let localctx = new NumericLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, n3_nodropParser.RULE_numericLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        _la = this._input.LA(1);
	        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (n3_nodropParser.INTEGER - 31)) | (1 << (n3_nodropParser.DECIMAL - 31)) | (1 << (n3_nodropParser.DOUBLE - 31)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rdfLiteral() {
	    let localctx = new RdfLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, n3_nodropParser.RULE_rdfLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(n3_nodropParser.String);
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case n3_nodropParser.LANGTAG:
	        	this.state = 209;
	        	this.match(n3_nodropParser.LANGTAG);
	        	break;
	        case n3_nodropParser.T__21:
	        	this.state = 210;
	        	this.match(n3_nodropParser.T__21);
	        	this.state = 211;
	        	this.iri();
	        	break;
	        case n3_nodropParser.T__0:
	        case n3_nodropParser.T__3:
	        case n3_nodropParser.T__4:
	        case n3_nodropParser.T__5:
	        case n3_nodropParser.T__6:
	        case n3_nodropParser.T__7:
	        case n3_nodropParser.T__8:
	        case n3_nodropParser.T__9:
	        case n3_nodropParser.T__10:
	        case n3_nodropParser.T__11:
	        case n3_nodropParser.T__12:
	        case n3_nodropParser.T__13:
	        case n3_nodropParser.T__14:
	        case n3_nodropParser.T__15:
	        case n3_nodropParser.T__16:
	        case n3_nodropParser.T__17:
	        case n3_nodropParser.T__18:
	        case n3_nodropParser.T__19:
	        case n3_nodropParser.T__20:
	        case n3_nodropParser.BooleanLiteral:
	        case n3_nodropParser.String:
	        case n3_nodropParser.IRIREF:
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	        case n3_nodropParser.BLANK_NODE_LABEL:
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	        case n3_nodropParser.IPLSTART:
	        case n3_nodropParser.ANON:
	        case n3_nodropParser.QuickVarName:
	        	break;
	        default:
	        	break;
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iri() {
	    let localctx = new IriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, n3_nodropParser.RULE_iri);
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.IRIREF:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 214;
	            this.match(n3_nodropParser.IRIREF);
	            break;
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.prefixedName();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefixedName() {
	    let localctx = new PrefixedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, n3_nodropParser.RULE_prefixedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        _la = this._input.LA(1);
	        if(!(_la===n3_nodropParser.PNAME_NS || _la===n3_nodropParser.PNAME_LN)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blankNode() {
	    let localctx = new BlankNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, n3_nodropParser.RULE_blankNode);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        _la = this._input.LA(1);
	        if(!(_la===n3_nodropParser.BLANK_NODE_LABEL || _la===n3_nodropParser.ANON)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quickVar() {
	    let localctx = new QuickVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, n3_nodropParser.RULE_quickVar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(n3_nodropParser.QuickVarName);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

n3_nodropParser.EOF = antlr4.Token.EOF;
n3_nodropParser.T__0 = 1;
n3_nodropParser.T__1 = 2;
n3_nodropParser.T__2 = 3;
n3_nodropParser.T__3 = 4;
n3_nodropParser.T__4 = 5;
n3_nodropParser.T__5 = 6;
n3_nodropParser.T__6 = 7;
n3_nodropParser.T__7 = 8;
n3_nodropParser.T__8 = 9;
n3_nodropParser.T__9 = 10;
n3_nodropParser.T__10 = 11;
n3_nodropParser.T__11 = 12;
n3_nodropParser.T__12 = 13;
n3_nodropParser.T__13 = 14;
n3_nodropParser.T__14 = 15;
n3_nodropParser.T__15 = 16;
n3_nodropParser.T__16 = 17;
n3_nodropParser.T__17 = 18;
n3_nodropParser.T__18 = 19;
n3_nodropParser.T__19 = 20;
n3_nodropParser.T__20 = 21;
n3_nodropParser.T__21 = 22;
n3_nodropParser.COMMENT = 23;
n3_nodropParser.BooleanLiteral = 24;
n3_nodropParser.String = 25;
n3_nodropParser.IRIREF = 26;
n3_nodropParser.PNAME_NS = 27;
n3_nodropParser.PNAME_LN = 28;
n3_nodropParser.BLANK_NODE_LABEL = 29;
n3_nodropParser.LANGTAG = 30;
n3_nodropParser.INTEGER = 31;
n3_nodropParser.DECIMAL = 32;
n3_nodropParser.DOUBLE = 33;
n3_nodropParser.EXPONENT = 34;
n3_nodropParser.STRING_LITERAL_LONG_SINGLE_QUOTE = 35;
n3_nodropParser.STRING_LITERAL_LONG_QUOTE = 36;
n3_nodropParser.STRING_LITERAL_QUOTE = 37;
n3_nodropParser.STRING_LITERAL_SINGLE_QUOTE = 38;
n3_nodropParser.UCHAR = 39;
n3_nodropParser.ECHAR = 40;
n3_nodropParser.WS = 41;
n3_nodropParser.IPLSTART = 42;
n3_nodropParser.ANON = 43;
n3_nodropParser.QuickVarName = 44;
n3_nodropParser.PN_CHARS_U = 45;
n3_nodropParser.PN_CHARS_BASE = 46;
n3_nodropParser.PN_CHARS = 47;
n3_nodropParser.BASE = 48;
n3_nodropParser.PREFIX = 49;
n3_nodropParser.PN_PREFIX = 50;
n3_nodropParser.PN_LOCAL = 51;
n3_nodropParser.PLX = 52;
n3_nodropParser.PERCENT = 53;
n3_nodropParser.HEX = 54;
n3_nodropParser.PN_LOCAL_ESC = 55;

n3_nodropParser.RULE_n3Doc = 0;
n3_nodropParser.RULE_n3Statement = 1;
n3_nodropParser.RULE_n3Directive = 2;
n3_nodropParser.RULE_sparqlDirective = 3;
n3_nodropParser.RULE_sparqlBase = 4;
n3_nodropParser.RULE_sparqlPrefix = 5;
n3_nodropParser.RULE_prefixID = 6;
n3_nodropParser.RULE_base = 7;
n3_nodropParser.RULE_triples = 8;
n3_nodropParser.RULE_predicateObjectList = 9;
n3_nodropParser.RULE_objectList = 10;
n3_nodropParser.RULE_verb = 11;
n3_nodropParser.RULE_subject = 12;
n3_nodropParser.RULE_predicate = 13;
n3_nodropParser.RULE_object = 14;
n3_nodropParser.RULE_expression = 15;
n3_nodropParser.RULE_path = 16;
n3_nodropParser.RULE_pathItem = 17;
n3_nodropParser.RULE_literal = 18;
n3_nodropParser.RULE_blankNodePropertyList = 19;
n3_nodropParser.RULE_iriPropertyList = 20;
n3_nodropParser.RULE_collection = 21;
n3_nodropParser.RULE_formula = 22;
n3_nodropParser.RULE_formulaContent = 23;
n3_nodropParser.RULE_numericLiteral = 24;
n3_nodropParser.RULE_rdfLiteral = 25;
n3_nodropParser.RULE_iri = 26;
n3_nodropParser.RULE_prefixedName = 27;
n3_nodropParser.RULE_blankNode = 28;
n3_nodropParser.RULE_quickVar = 29;

class N3DocContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_n3Doc;
    }

	EOF() {
	    return this.getToken(n3_nodropParser.EOF, 0);
	};

	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(n3_nodropParser.COMMENT);
	    } else {
	        return this.getToken(n3_nodropParser.COMMENT, i);
	    }
	};


	n3Statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(N3StatementContext);
	    } else {
	        return this.getTypedRuleContext(N3StatementContext,i);
	    }
	};

	sparqlDirective = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SparqlDirectiveContext);
	    } else {
	        return this.getTypedRuleContext(SparqlDirectiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterN3Doc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitN3Doc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitN3Doc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class N3StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_n3Statement;
    }

	n3Directive() {
	    return this.getTypedRuleContext(N3DirectiveContext,0);
	};

	triples() {
	    return this.getTypedRuleContext(TriplesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterN3Statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitN3Statement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitN3Statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class N3DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_n3Directive;
    }

	prefixID() {
	    return this.getTypedRuleContext(PrefixIDContext,0);
	};

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterN3Directive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitN3Directive(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitN3Directive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SparqlDirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_sparqlDirective;
    }

	sparqlBase() {
	    return this.getTypedRuleContext(SparqlBaseContext,0);
	};

	sparqlPrefix() {
	    return this.getTypedRuleContext(SparqlPrefixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterSparqlDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitSparqlDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitSparqlDirective(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SparqlBaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_sparqlBase;
    }

	BASE() {
	    return this.getToken(n3_nodropParser.BASE, 0);
	};

	IRIREF() {
	    return this.getToken(n3_nodropParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterSparqlBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitSparqlBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitSparqlBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SparqlPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_sparqlPrefix;
    }

	PREFIX() {
	    return this.getToken(n3_nodropParser.PREFIX, 0);
	};

	PNAME_NS() {
	    return this.getToken(n3_nodropParser.PNAME_NS, 0);
	};

	IRIREF() {
	    return this.getToken(n3_nodropParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterSparqlPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitSparqlPrefix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitSparqlPrefix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefixIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_prefixID;
    }

	PNAME_NS() {
	    return this.getToken(n3_nodropParser.PNAME_NS, 0);
	};

	IRIREF() {
	    return this.getToken(n3_nodropParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterPrefixID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitPrefixID(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitPrefixID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_base;
    }

	IRIREF() {
	    return this.getToken(n3_nodropParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TriplesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_triples;
    }

	subject() {
	    return this.getTypedRuleContext(SubjectContext,0);
	};

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterTriples(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitTriples(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitTriples(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredicateObjectListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_predicateObjectList;
    }

	verb = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VerbContext);
	    } else {
	        return this.getTypedRuleContext(VerbContext,i);
	    }
	};

	objectList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectListContext);
	    } else {
	        return this.getTypedRuleContext(ObjectListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterPredicateObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitPredicateObjectList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitPredicateObjectList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_objectList;
    }

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitObjectList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitObjectList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VerbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_verb;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterVerb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitVerb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitVerb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_subject;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitSubject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitSubject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_predicate;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitPredicate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitPredicate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_object;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_expression;
    }

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_path;
    }

	pathItem() {
	    return this.getTypedRuleContext(PathItemContext,0);
	};

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitPath(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitPath(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PathItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_pathItem;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	blankNode() {
	    return this.getTypedRuleContext(BlankNodeContext,0);
	};

	quickVar() {
	    return this.getTypedRuleContext(QuickVarContext,0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	iriPropertyList() {
	    return this.getTypedRuleContext(IriPropertyListContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterPathItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitPathItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitPathItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_literal;
    }

	rdfLiteral() {
	    return this.getTypedRuleContext(RdfLiteralContext,0);
	};

	numericLiteral() {
	    return this.getTypedRuleContext(NumericLiteralContext,0);
	};

	BooleanLiteral() {
	    return this.getToken(n3_nodropParser.BooleanLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlankNodePropertyListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_blankNodePropertyList;
    }

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterBlankNodePropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitBlankNodePropertyList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitBlankNodePropertyList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IriPropertyListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_iriPropertyList;
    }

	IPLSTART() {
	    return this.getToken(n3_nodropParser.IPLSTART, 0);
	};

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterIriPropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitIriPropertyList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitIriPropertyList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_collection;
    }

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitCollection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitCollection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_formula;
    }

	formulaContent() {
	    return this.getTypedRuleContext(FormulaContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_formulaContent;
    }

	n3Statement() {
	    return this.getTypedRuleContext(N3StatementContext,0);
	};

	formulaContent() {
	    return this.getTypedRuleContext(FormulaContentContext,0);
	};

	sparqlDirective() {
	    return this.getTypedRuleContext(SparqlDirectiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterFormulaContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitFormulaContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitFormulaContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumericLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_numericLiteral;
    }

	INTEGER() {
	    return this.getToken(n3_nodropParser.INTEGER, 0);
	};

	DECIMAL() {
	    return this.getToken(n3_nodropParser.DECIMAL, 0);
	};

	DOUBLE() {
	    return this.getToken(n3_nodropParser.DOUBLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterNumericLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitNumericLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitNumericLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RdfLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_rdfLiteral;
    }

	String() {
	    return this.getToken(n3_nodropParser.String, 0);
	};

	LANGTAG() {
	    return this.getToken(n3_nodropParser.LANGTAG, 0);
	};

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterRdfLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitRdfLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitRdfLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_iri;
    }

	IRIREF() {
	    return this.getToken(n3_nodropParser.IRIREF, 0);
	};

	prefixedName() {
	    return this.getTypedRuleContext(PrefixedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterIri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitIri(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitIri(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefixedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_prefixedName;
    }

	PNAME_NS() {
	    return this.getToken(n3_nodropParser.PNAME_NS, 0);
	};

	PNAME_LN() {
	    return this.getToken(n3_nodropParser.PNAME_LN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterPrefixedName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitPrefixedName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitPrefixedName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlankNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_blankNode;
    }

	BLANK_NODE_LABEL() {
	    return this.getToken(n3_nodropParser.BLANK_NODE_LABEL, 0);
	};

	ANON() {
	    return this.getToken(n3_nodropParser.ANON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterBlankNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitBlankNode(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitBlankNode(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuickVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = n3_nodropParser.RULE_quickVar;
    }

	QuickVarName() {
	    return this.getToken(n3_nodropParser.QuickVarName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.enterQuickVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof n3_nodropListener ) {
	        listener.exitQuickVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof n3_nodropVisitor ) {
	        return visitor.visitQuickVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




n3_nodropParser.N3DocContext = N3DocContext; 
n3_nodropParser.N3StatementContext = N3StatementContext; 
n3_nodropParser.N3DirectiveContext = N3DirectiveContext; 
n3_nodropParser.SparqlDirectiveContext = SparqlDirectiveContext; 
n3_nodropParser.SparqlBaseContext = SparqlBaseContext; 
n3_nodropParser.SparqlPrefixContext = SparqlPrefixContext; 
n3_nodropParser.PrefixIDContext = PrefixIDContext; 
n3_nodropParser.BaseContext = BaseContext; 
n3_nodropParser.TriplesContext = TriplesContext; 
n3_nodropParser.PredicateObjectListContext = PredicateObjectListContext; 
n3_nodropParser.ObjectListContext = ObjectListContext; 
n3_nodropParser.VerbContext = VerbContext; 
n3_nodropParser.SubjectContext = SubjectContext; 
n3_nodropParser.PredicateContext = PredicateContext; 
n3_nodropParser.ObjectContext = ObjectContext; 
n3_nodropParser.ExpressionContext = ExpressionContext; 
n3_nodropParser.PathContext = PathContext; 
n3_nodropParser.PathItemContext = PathItemContext; 
n3_nodropParser.LiteralContext = LiteralContext; 
n3_nodropParser.BlankNodePropertyListContext = BlankNodePropertyListContext; 
n3_nodropParser.IriPropertyListContext = IriPropertyListContext; 
n3_nodropParser.CollectionContext = CollectionContext; 
n3_nodropParser.FormulaContext = FormulaContext; 
n3_nodropParser.FormulaContentContext = FormulaContentContext; 
n3_nodropParser.NumericLiteralContext = NumericLiteralContext; 
n3_nodropParser.RdfLiteralContext = RdfLiteralContext; 
n3_nodropParser.IriContext = IriContext; 
n3_nodropParser.PrefixedNameContext = PrefixedNameContext; 
n3_nodropParser.BlankNodeContext = BlankNodeContext; 
n3_nodropParser.QuickVarContext = QuickVarContext; 
