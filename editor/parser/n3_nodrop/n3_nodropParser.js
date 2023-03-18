// Generated from n3_nodrop.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import n3_nodropListener from './n3_nodropListener.js';
import n3_nodropVisitor from './n3_nodropVisitor.js';

const serializedATN = [4,1,55,224,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,0,1,0,5,0,65,8,0,10,0,12,0,68,9,0,1,0,
1,0,1,1,1,1,3,1,74,8,1,1,2,1,2,3,2,78,8,2,1,3,1,3,3,3,82,8,3,1,4,1,4,1,4,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,3,8,100,8,8,1,9,1,9,
1,9,1,9,1,9,1,9,3,9,108,8,9,5,9,110,8,9,10,9,12,9,113,9,9,1,10,1,10,1,10,
5,10,118,8,10,10,10,12,10,121,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,3,11,134,8,11,1,12,1,12,1,13,1,13,1,13,3,13,141,8,13,1,
14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,152,8,16,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,3,17,162,8,17,1,18,1,18,1,18,3,18,167,8,18,1,19,
1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,5,21,180,8,21,10,21,12,
21,183,9,21,1,21,1,21,1,22,1,22,3,22,189,8,22,1,22,1,22,1,23,1,23,1,23,3,
23,196,8,23,3,23,198,8,23,1,23,1,23,3,23,202,8,23,3,23,204,8,23,1,24,1,24,
1,25,1,25,1,25,1,25,3,25,212,8,25,1,26,1,26,3,26,216,8,26,1,27,1,27,1,28,
1,28,1,29,1,29,1,29,0,0,30,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,52,54,56,58,0,3,1,0,31,33,1,0,27,28,2,0,29,29,
43,43,229,0,66,1,0,0,0,2,73,1,0,0,0,4,77,1,0,0,0,6,81,1,0,0,0,8,83,1,0,0,
0,10,86,1,0,0,0,12,90,1,0,0,0,14,94,1,0,0,0,16,97,1,0,0,0,18,101,1,0,0,0,
20,114,1,0,0,0,22,133,1,0,0,0,24,135,1,0,0,0,26,140,1,0,0,0,28,142,1,0,0,
0,30,144,1,0,0,0,32,146,1,0,0,0,34,161,1,0,0,0,36,166,1,0,0,0,38,168,1,0,
0,0,40,172,1,0,0,0,42,177,1,0,0,0,44,186,1,0,0,0,46,203,1,0,0,0,48,205,1,
0,0,0,50,207,1,0,0,0,52,215,1,0,0,0,54,217,1,0,0,0,56,219,1,0,0,0,58,221,
1,0,0,0,60,61,3,2,1,0,61,62,5,1,0,0,62,65,1,0,0,0,63,65,3,6,3,0,64,60,1,
0,0,0,64,63,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,69,1,0,
0,0,68,66,1,0,0,0,69,70,5,0,0,1,70,1,1,0,0,0,71,74,3,4,2,0,72,74,3,16,8,
0,73,71,1,0,0,0,73,72,1,0,0,0,74,3,1,0,0,0,75,78,3,12,6,0,76,78,3,14,7,0,
77,75,1,0,0,0,77,76,1,0,0,0,78,5,1,0,0,0,79,82,3,8,4,0,80,82,3,10,5,0,81,
79,1,0,0,0,81,80,1,0,0,0,82,7,1,0,0,0,83,84,5,48,0,0,84,85,5,26,0,0,85,9,
1,0,0,0,86,87,5,49,0,0,87,88,5,27,0,0,88,89,5,26,0,0,89,11,1,0,0,0,90,91,
5,2,0,0,91,92,5,27,0,0,92,93,5,26,0,0,93,13,1,0,0,0,94,95,5,3,0,0,95,96,
5,26,0,0,96,15,1,0,0,0,97,99,3,24,12,0,98,100,3,18,9,0,99,98,1,0,0,0,99,
100,1,0,0,0,100,17,1,0,0,0,101,102,3,22,11,0,102,111,3,20,10,0,103,107,5,
4,0,0,104,105,3,22,11,0,105,106,3,20,10,0,106,108,1,0,0,0,107,104,1,0,0,
0,107,108,1,0,0,0,108,110,1,0,0,0,109,103,1,0,0,0,110,113,1,0,0,0,111,109,
1,0,0,0,111,112,1,0,0,0,112,19,1,0,0,0,113,111,1,0,0,0,114,119,3,28,14,0,
115,116,5,5,0,0,116,118,3,28,14,0,117,115,1,0,0,0,118,121,1,0,0,0,119,117,
1,0,0,0,119,120,1,0,0,0,120,21,1,0,0,0,121,119,1,0,0,0,122,134,3,26,13,0,
123,134,5,6,0,0,124,125,5,7,0,0,125,134,3,30,15,0,126,127,5,8,0,0,127,128,
3,30,15,0,128,129,5,9,0,0,129,134,1,0,0,0,130,134,5,10,0,0,131,134,5,11,
0,0,132,134,5,12,0,0,133,122,1,0,0,0,133,123,1,0,0,0,133,124,1,0,0,0,133,
126,1,0,0,0,133,130,1,0,0,0,133,131,1,0,0,0,133,132,1,0,0,0,134,23,1,0,0,
0,135,136,3,30,15,0,136,25,1,0,0,0,137,141,3,30,15,0,138,139,5,13,0,0,139,
141,3,30,15,0,140,137,1,0,0,0,140,138,1,0,0,0,141,27,1,0,0,0,142,143,3,30,
15,0,143,29,1,0,0,0,144,145,3,32,16,0,145,31,1,0,0,0,146,151,3,34,17,0,147,
148,5,14,0,0,148,152,3,32,16,0,149,150,5,15,0,0,150,152,3,32,16,0,151,147,
1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,152,33,1,0,0,0,153,162,3,52,26,0,
154,162,3,56,28,0,155,162,3,58,29,0,156,162,3,42,21,0,157,162,3,38,19,0,
158,162,3,40,20,0,159,162,3,36,18,0,160,162,3,44,22,0,161,153,1,0,0,0,161,
154,1,0,0,0,161,155,1,0,0,0,161,156,1,0,0,0,161,157,1,0,0,0,161,158,1,0,
0,0,161,159,1,0,0,0,161,160,1,0,0,0,162,35,1,0,0,0,163,167,3,50,25,0,164,
167,3,48,24,0,165,167,5,24,0,0,166,163,1,0,0,0,166,164,1,0,0,0,166,165,1,
0,0,0,167,37,1,0,0,0,168,169,5,16,0,0,169,170,3,18,9,0,170,171,5,17,0,0,
171,39,1,0,0,0,172,173,5,42,0,0,173,174,3,52,26,0,174,175,3,18,9,0,175,176,
5,17,0,0,176,41,1,0,0,0,177,181,5,18,0,0,178,180,3,28,14,0,179,178,1,0,0,
0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,184,1,0,0,0,183,181,
1,0,0,0,184,185,5,19,0,0,185,43,1,0,0,0,186,188,5,20,0,0,187,189,3,46,23,
0,188,187,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,191,5,21,0,0,191,45,
1,0,0,0,192,197,3,2,1,0,193,195,5,1,0,0,194,196,3,46,23,0,195,194,1,0,0,
0,195,196,1,0,0,0,196,198,1,0,0,0,197,193,1,0,0,0,197,198,1,0,0,0,198,204,
1,0,0,0,199,201,3,6,3,0,200,202,3,46,23,0,201,200,1,0,0,0,201,202,1,0,0,
0,202,204,1,0,0,0,203,192,1,0,0,0,203,199,1,0,0,0,204,47,1,0,0,0,205,206,
7,0,0,0,206,49,1,0,0,0,207,211,5,25,0,0,208,212,5,30,0,0,209,210,5,22,0,
0,210,212,3,52,26,0,211,208,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,
51,1,0,0,0,213,216,5,26,0,0,214,216,3,54,27,0,215,213,1,0,0,0,215,214,1,
0,0,0,216,53,1,0,0,0,217,218,7,1,0,0,218,55,1,0,0,0,219,220,7,2,0,0,220,
57,1,0,0,0,221,222,5,44,0,0,222,59,1,0,0,0,22,64,66,73,77,81,99,107,111,
119,133,140,151,161,166,181,188,195,197,201,203,211,215];


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
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__1) | (1 << n3_nodropParser.T__2) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)) | (1 << (n3_nodropParser.BASE - 32)) | (1 << (n3_nodropParser.PREFIX - 32)))) !== 0)) {
	            this.state = 64;
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
	                this.state = 60;
	                this.n3Statement();
	                this.state = 61;
	                this.match(n3_nodropParser.T__0);
	                break;
	            case n3_nodropParser.BASE:
	            case n3_nodropParser.PREFIX:
	                this.state = 63;
	                this.sparqlDirective();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 69;
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
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.T__1:
	        case n3_nodropParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
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
	            this.state = 72;
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
	        this.state = 77;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.T__1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.prefixID();
	            break;
	        case n3_nodropParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.BASE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.sparqlBase();
	            break;
	        case n3_nodropParser.PREFIX:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
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
	        this.state = 83;
	        this.match(n3_nodropParser.BASE);
	        this.state = 84;
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
	        this.state = 86;
	        this.match(n3_nodropParser.PREFIX);
	        this.state = 87;
	        this.match(n3_nodropParser.PNAME_NS);
	        this.state = 88;
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
	        this.state = 90;
	        this.match(n3_nodropParser.T__1);
	        this.state = 91;
	        this.match(n3_nodropParser.PNAME_NS);
	        this.state = 92;
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
	        this.state = 94;
	        this.match(n3_nodropParser.T__2);
	        this.state = 95;
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
	        this.state = 97;
	        this.subject();
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__5) | (1 << n3_nodropParser.T__6) | (1 << n3_nodropParser.T__7) | (1 << n3_nodropParser.T__9) | (1 << n3_nodropParser.T__10) | (1 << n3_nodropParser.T__11) | (1 << n3_nodropParser.T__12) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)))) !== 0)) {
	            this.state = 98;
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
	        this.state = 101;
	        this.verb();
	        this.state = 102;
	        this.objectList();
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===n3_nodropParser.T__3) {
	            this.state = 103;
	            this.match(n3_nodropParser.T__3);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__5) | (1 << n3_nodropParser.T__6) | (1 << n3_nodropParser.T__7) | (1 << n3_nodropParser.T__9) | (1 << n3_nodropParser.T__10) | (1 << n3_nodropParser.T__11) | (1 << n3_nodropParser.T__12) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)))) !== 0)) {
	                this.state = 104;
	                this.verb();
	                this.state = 105;
	                this.objectList();
	            }

	            this.state = 113;
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
	        this.state = 114;
	        this.object();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===n3_nodropParser.T__4) {
	            this.state = 115;
	            this.match(n3_nodropParser.T__4);
	            this.state = 116;
	            this.object();
	            this.state = 121;
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
	        this.state = 133;
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
	            this.state = 122;
	            this.predicate();
	            break;
	        case n3_nodropParser.T__5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.match(n3_nodropParser.T__5);
	            break;
	        case n3_nodropParser.T__6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 124;
	            this.match(n3_nodropParser.T__6);
	            this.state = 125;
	            this.expression();
	            break;
	        case n3_nodropParser.T__7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 126;
	            this.match(n3_nodropParser.T__7);
	            this.state = 127;
	            this.expression();
	            this.state = 128;
	            this.match(n3_nodropParser.T__8);
	            break;
	        case n3_nodropParser.T__9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 130;
	            this.match(n3_nodropParser.T__9);
	            break;
	        case n3_nodropParser.T__10:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 131;
	            this.match(n3_nodropParser.T__10);
	            break;
	        case n3_nodropParser.T__11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 132;
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
	        this.state = 135;
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
	        this.state = 140;
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
	            this.state = 137;
	            this.expression();
	            break;
	        case n3_nodropParser.T__12:
	            this.state = 138;
	            this.match(n3_nodropParser.T__12);
	            this.state = 139;
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
	        this.state = 142;
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
	        this.state = 144;
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
	        this.state = 146;
	        this.pathItem();
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case n3_nodropParser.T__13:
	        	this.state = 147;
	        	this.match(n3_nodropParser.T__13);
	        	this.state = 148;
	        	this.path();
	        	break;
	        case n3_nodropParser.T__14:
	        	this.state = 149;
	        	this.match(n3_nodropParser.T__14);
	        	this.state = 150;
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
	        this.state = 161;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.IRIREF:
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.iri();
	            break;
	        case n3_nodropParser.BLANK_NODE_LABEL:
	        case n3_nodropParser.ANON:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.blankNode();
	            break;
	        case n3_nodropParser.QuickVarName:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
	            this.quickVar();
	            break;
	        case n3_nodropParser.T__17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 156;
	            this.collection();
	            break;
	        case n3_nodropParser.T__15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 157;
	            this.blankNodePropertyList();
	            break;
	        case n3_nodropParser.IPLSTART:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 158;
	            this.iriPropertyList();
	            break;
	        case n3_nodropParser.BooleanLiteral:
	        case n3_nodropParser.String:
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 159;
	            this.literal();
	            break;
	        case n3_nodropParser.T__19:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 160;
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
	        this.state = 166;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.String:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.rdfLiteral();
	            break;
	        case n3_nodropParser.INTEGER:
	        case n3_nodropParser.DECIMAL:
	        case n3_nodropParser.DOUBLE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.numericLiteral();
	            break;
	        case n3_nodropParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 165;
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
	        this.state = 168;
	        this.match(n3_nodropParser.T__15);
	        this.state = 169;
	        this.predicateObjectList();
	        this.state = 170;
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
	        this.state = 172;
	        this.match(n3_nodropParser.IPLSTART);
	        this.state = 173;
	        this.iri();
	        this.state = 174;
	        this.predicateObjectList();
	        this.state = 175;
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
	        this.state = 177;
	        this.match(n3_nodropParser.T__17);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (n3_nodropParser.T__15 - 16)) | (1 << (n3_nodropParser.T__17 - 16)) | (1 << (n3_nodropParser.T__19 - 16)) | (1 << (n3_nodropParser.BooleanLiteral - 16)) | (1 << (n3_nodropParser.String - 16)) | (1 << (n3_nodropParser.IRIREF - 16)) | (1 << (n3_nodropParser.PNAME_NS - 16)) | (1 << (n3_nodropParser.PNAME_LN - 16)) | (1 << (n3_nodropParser.BLANK_NODE_LABEL - 16)) | (1 << (n3_nodropParser.INTEGER - 16)) | (1 << (n3_nodropParser.DECIMAL - 16)) | (1 << (n3_nodropParser.DOUBLE - 16)) | (1 << (n3_nodropParser.IPLSTART - 16)) | (1 << (n3_nodropParser.ANON - 16)) | (1 << (n3_nodropParser.QuickVarName - 16)))) !== 0)) {
	            this.state = 178;
	            this.object();
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 184;
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
	        this.state = 186;
	        this.match(n3_nodropParser.T__19);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__1) | (1 << n3_nodropParser.T__2) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)) | (1 << (n3_nodropParser.BASE - 32)) | (1 << (n3_nodropParser.PREFIX - 32)))) !== 0)) {
	            this.state = 187;
	            this.formulaContent();
	        }

	        this.state = 190;
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
	        this.state = 203;
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
	            this.state = 192;
	            this.n3Statement();
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===n3_nodropParser.T__0) {
	                this.state = 193;
	                this.match(n3_nodropParser.T__0);
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__1) | (1 << n3_nodropParser.T__2) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)) | (1 << (n3_nodropParser.BASE - 32)) | (1 << (n3_nodropParser.PREFIX - 32)))) !== 0)) {
	                    this.state = 194;
	                    this.formulaContent();
	                }

	            }

	            break;
	        case n3_nodropParser.BASE:
	        case n3_nodropParser.PREFIX:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.sparqlDirective();
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << n3_nodropParser.T__1) | (1 << n3_nodropParser.T__2) | (1 << n3_nodropParser.T__15) | (1 << n3_nodropParser.T__17) | (1 << n3_nodropParser.T__19) | (1 << n3_nodropParser.BooleanLiteral) | (1 << n3_nodropParser.String) | (1 << n3_nodropParser.IRIREF) | (1 << n3_nodropParser.PNAME_NS) | (1 << n3_nodropParser.PNAME_LN) | (1 << n3_nodropParser.BLANK_NODE_LABEL) | (1 << n3_nodropParser.INTEGER))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (n3_nodropParser.DECIMAL - 32)) | (1 << (n3_nodropParser.DOUBLE - 32)) | (1 << (n3_nodropParser.IPLSTART - 32)) | (1 << (n3_nodropParser.ANON - 32)) | (1 << (n3_nodropParser.QuickVarName - 32)) | (1 << (n3_nodropParser.BASE - 32)) | (1 << (n3_nodropParser.PREFIX - 32)))) !== 0)) {
	                this.state = 200;
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
	        this.state = 205;
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
	        this.state = 207;
	        this.match(n3_nodropParser.String);
	        this.state = 211;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case n3_nodropParser.LANGTAG:
	        	this.state = 208;
	        	this.match(n3_nodropParser.LANGTAG);
	        	break;
	        case n3_nodropParser.T__21:
	        	this.state = 209;
	        	this.match(n3_nodropParser.T__21);
	        	this.state = 210;
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
	        this.state = 215;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case n3_nodropParser.IRIREF:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.match(n3_nodropParser.IRIREF);
	            break;
	        case n3_nodropParser.PNAME_NS:
	        case n3_nodropParser.PNAME_LN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
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
	        this.state = 217;
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
	        this.state = 219;
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
	        this.state = 221;
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
