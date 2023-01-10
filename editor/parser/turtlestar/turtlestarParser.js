// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import turtlestarListener from './turtlestarListener.js';
import turtlestarVisitor from './turtlestarVisitor.js';


const serializedATN = [4,1,46,180,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,1,
1,1,1,1,1,1,3,1,59,8,1,1,2,1,2,1,2,1,2,3,2,65,8,2,1,3,1,3,1,3,1,3,1,3,1,
4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,88,8,7,
3,7,90,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,98,8,8,5,8,100,8,8,10,8,12,8,103,
9,8,1,9,1,9,1,9,5,9,108,8,9,10,9,12,9,111,9,9,1,10,1,10,3,10,115,8,10,1,
11,1,11,1,11,1,11,3,11,121,8,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,
3,13,131,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,3,15,142,8,15,
1,16,1,16,1,16,1,16,3,16,148,8,16,1,17,1,17,1,17,3,17,153,8,17,1,18,1,18,
1,18,1,18,1,19,1,19,5,19,161,8,19,10,19,12,19,164,9,19,1,19,1,19,1,20,1,
20,1,20,1,20,3,20,172,8,20,1,21,1,21,3,21,176,8,21,1,22,1,22,1,22,0,0,23,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,1,1,0,
20,21,186,0,49,1,0,0,0,2,58,1,0,0,0,4,64,1,0,0,0,6,66,1,0,0,0,8,71,1,0,0,
0,10,75,1,0,0,0,12,78,1,0,0,0,14,89,1,0,0,0,16,91,1,0,0,0,18,104,1,0,0,0,
20,114,1,0,0,0,22,120,1,0,0,0,24,122,1,0,0,0,26,130,1,0,0,0,28,132,1,0,0,
0,30,141,1,0,0,0,32,147,1,0,0,0,34,152,1,0,0,0,36,154,1,0,0,0,38,158,1,0,
0,0,40,167,1,0,0,0,42,175,1,0,0,0,44,177,1,0,0,0,46,48,3,2,1,0,47,46,1,0,
0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,
0,52,53,5,0,0,1,53,1,1,0,0,0,54,59,3,4,2,0,55,56,3,14,7,0,56,57,5,1,0,0,
57,59,1,0,0,0,58,54,1,0,0,0,58,55,1,0,0,0,59,3,1,0,0,0,60,65,3,6,3,0,61,
65,3,8,4,0,62,65,3,12,6,0,63,65,3,10,5,0,64,60,1,0,0,0,64,61,1,0,0,0,64,
62,1,0,0,0,64,63,1,0,0,0,65,5,1,0,0,0,66,67,5,2,0,0,67,68,5,20,0,0,68,69,
5,19,0,0,69,70,5,1,0,0,70,7,1,0,0,0,71,72,5,3,0,0,72,73,5,19,0,0,73,74,5,
1,0,0,74,9,1,0,0,0,75,76,5,39,0,0,76,77,5,19,0,0,77,11,1,0,0,0,78,79,5,40,
0,0,79,80,5,20,0,0,80,81,5,19,0,0,81,13,1,0,0,0,82,83,3,22,11,0,83,84,3,
16,8,0,84,90,1,0,0,0,85,87,3,36,18,0,86,88,3,16,8,0,87,86,1,0,0,0,87,88,
1,0,0,0,88,90,1,0,0,0,89,82,1,0,0,0,89,85,1,0,0,0,90,15,1,0,0,0,91,92,3,
20,10,0,92,101,3,18,9,0,93,97,5,4,0,0,94,95,3,20,10,0,95,96,3,18,9,0,96,
98,1,0,0,0,97,94,1,0,0,0,97,98,1,0,0,0,98,100,1,0,0,0,99,93,1,0,0,0,100,
103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,17,1,0,0,0,103,101,1,0,0,
0,104,109,3,26,13,0,105,106,5,5,0,0,106,108,3,26,13,0,107,105,1,0,0,0,108,
111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,19,1,0,0,0,111,109,1,0,0,
0,112,115,3,24,12,0,113,115,5,6,0,0,114,112,1,0,0,0,114,113,1,0,0,0,115,
21,1,0,0,0,116,121,3,42,21,0,117,121,5,18,0,0,118,121,3,38,19,0,119,121,
3,28,14,0,120,116,1,0,0,0,120,117,1,0,0,0,120,118,1,0,0,0,120,119,1,0,0,
0,121,23,1,0,0,0,122,123,3,42,21,0,123,25,1,0,0,0,124,131,3,42,21,0,125,
131,5,18,0,0,126,131,3,34,17,0,127,131,3,38,19,0,128,131,3,36,18,0,129,131,
3,28,14,0,130,124,1,0,0,0,130,125,1,0,0,0,130,126,1,0,0,0,130,127,1,0,0,
0,130,128,1,0,0,0,130,129,1,0,0,0,131,27,1,0,0,0,132,133,5,7,0,0,133,134,
3,30,15,0,134,135,3,24,12,0,135,136,3,32,16,0,136,137,5,8,0,0,137,29,1,0,
0,0,138,142,3,42,21,0,139,142,5,18,0,0,140,142,3,28,14,0,141,138,1,0,0,0,
141,139,1,0,0,0,141,140,1,0,0,0,142,31,1,0,0,0,143,148,3,42,21,0,144,148,
5,18,0,0,145,148,3,34,17,0,146,148,3,28,14,0,147,143,1,0,0,0,147,144,1,0,
0,0,147,145,1,0,0,0,147,146,1,0,0,0,148,33,1,0,0,0,149,153,3,40,20,0,150,
153,5,15,0,0,151,153,5,16,0,0,152,149,1,0,0,0,152,150,1,0,0,0,152,151,1,
0,0,0,153,35,1,0,0,0,154,155,5,9,0,0,155,156,3,16,8,0,156,157,5,10,0,0,157,
37,1,0,0,0,158,162,5,11,0,0,159,161,3,26,13,0,160,159,1,0,0,0,161,164,1,
0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,165,1,0,0,0,164,162,1,0,0,0,165,
166,5,12,0,0,166,39,1,0,0,0,167,171,5,17,0,0,168,172,5,23,0,0,169,170,5,
13,0,0,170,172,3,42,21,0,171,168,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,
172,41,1,0,0,0,173,176,5,19,0,0,174,176,3,44,22,0,175,173,1,0,0,0,175,174,
1,0,0,0,176,43,1,0,0,0,177,178,7,0,0,0,178,45,1,0,0,0,17,49,58,64,87,89,
97,101,109,114,120,130,141,147,152,162,171,175];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class turtlestarParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'.'", "'@prefix'", "'@base'", "';'", 
                            "','", "'a'", "'<<'", "'>>'", "'['", "']'", 
                            "'('", "')'", "'^^'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "COMMENT", 
                             "NumericLiteral", "BooleanLiteral", "String", 
                             "BlankNode", "IRIREF", "PNAME_NS", "PNAME_LN", 
                             "BLANK_NODE_LABEL", "LANGTAG", "INTEGER", "DECIMAL", 
                             "DOUBLE", "EXPONENT", "STRING_LITERAL_LONG_SINGLE_QUOTE", 
                             "STRING_LITERAL_LONG_QUOTE", "STRING_LITERAL_QUOTE", 
                             "STRING_LITERAL_SINGLE_QUOTE", "UCHAR", "ECHAR", 
                             "WS", "ANON", "PN_CHARS_BASE", "PN_CHARS_U", 
                             "PN_CHARS", "BASE", "PREFIX", "PN_PREFIX", 
                             "PN_LOCAL", "PLX", "PERCENT", "HEX", "PN_LOCAL_ESC" ];
    static ruleNames = [ "turtleStarDoc", "statement", "directive", "prefixID", 
                         "base", "sparqlBase", "sparqlPrefix", "triples", 
                         "predicateObjectList", "objectList", "verb", "subject", 
                         "predicate", "object", "tripleX", "subjectX", "objectX", 
                         "literal", "blankNodePropertyList", "collection", 
                         "rdfLiteral", "iri", "prefixedName" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = turtlestarParser.ruleNames;
        this.literalNames = turtlestarParser.literalNames;
        this.symbolicNames = turtlestarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	turtleStarDoc() {
	    let localctx = new TurtleStarDocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, turtlestarParser.RULE_turtleStarDoc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 3934860) !== 0) || _la===39 || _la===40) {
	            this.state = 46;
	            this.statement();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(turtlestarParser.EOF);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, turtlestarParser.RULE_statement);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 3:
	        case 39:
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.directive();
	            break;
	        case 7:
	        case 9:
	        case 11:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.triples();
	            this.state = 56;
	            this.match(turtlestarParser.T__0);
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



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, turtlestarParser.RULE_directive);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.prefixID();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.base();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.sparqlPrefix();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 63;
	            this.sparqlBase();
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



	prefixID() {
	    let localctx = new PrefixIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, turtlestarParser.RULE_prefixID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(turtlestarParser.T__1);
	        this.state = 67;
	        this.match(turtlestarParser.PNAME_NS);
	        this.state = 68;
	        this.match(turtlestarParser.IRIREF);
	        this.state = 69;
	        this.match(turtlestarParser.T__0);
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
	    this.enterRule(localctx, 8, turtlestarParser.RULE_base);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(turtlestarParser.T__2);
	        this.state = 72;
	        this.match(turtlestarParser.IRIREF);
	        this.state = 73;
	        this.match(turtlestarParser.T__0);
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
	    this.enterRule(localctx, 10, turtlestarParser.RULE_sparqlBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(turtlestarParser.BASE);
	        this.state = 76;
	        this.match(turtlestarParser.IRIREF);
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
	    this.enterRule(localctx, 12, turtlestarParser.RULE_sparqlPrefix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(turtlestarParser.PREFIX);
	        this.state = 79;
	        this.match(turtlestarParser.PNAME_NS);
	        this.state = 80;
	        this.match(turtlestarParser.IRIREF);
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
	    this.enterRule(localctx, 14, turtlestarParser.RULE_triples);
	    var _la = 0; // Token type
	    try {
	        this.state = 89;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 11:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.subject();
	            this.state = 83;
	            this.predicateObjectList();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.blankNodePropertyList();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 3670080) !== 0)) {
	                this.state = 86;
	                this.predicateObjectList();
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



	predicateObjectList() {
	    let localctx = new PredicateObjectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, turtlestarParser.RULE_predicateObjectList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.verb();
	        this.state = 92;
	        this.objectList();
	        this.state = 101;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 93;
	            this.match(turtlestarParser.T__3);
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 3670080) !== 0)) {
	                this.state = 94;
	                this.verb();
	                this.state = 95;
	                this.objectList();
	            }

	            this.state = 103;
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
	    this.enterRule(localctx, 18, turtlestarParser.RULE_objectList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.object();
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 105;
	            this.match(turtlestarParser.T__4);
	            this.state = 106;
	            this.object();
	            this.state = 111;
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
	    this.enterRule(localctx, 20, turtlestarParser.RULE_verb);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.predicate();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 113;
	            this.match(turtlestarParser.T__5);
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
	    this.enterRule(localctx, 22, turtlestarParser.RULE_subject);
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.iri();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.match(turtlestarParser.BlankNode);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 118;
	            this.collection();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 119;
	            this.tripleX();
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, turtlestarParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.iri();
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
	    this.enterRule(localctx, 26, turtlestarParser.RULE_object);
	    try {
	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.iri();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.match(turtlestarParser.BlankNode);
	            break;
	        case 15:
	        case 16:
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 126;
	            this.literal();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
	            this.collection();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 128;
	            this.blankNodePropertyList();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 129;
	            this.tripleX();
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



	tripleX() {
	    let localctx = new TripleXContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, turtlestarParser.RULE_tripleX);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(turtlestarParser.T__6);
	        this.state = 133;
	        this.subjectX();
	        this.state = 134;
	        this.predicate();
	        this.state = 135;
	        this.objectX();
	        this.state = 136;
	        this.match(turtlestarParser.T__7);
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



	subjectX() {
	    let localctx = new SubjectXContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, turtlestarParser.RULE_subjectX);
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.iri();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.match(turtlestarParser.BlankNode);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.tripleX();
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



	objectX() {
	    let localctx = new ObjectXContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, turtlestarParser.RULE_objectX);
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.iri();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 144;
	            this.match(turtlestarParser.BlankNode);
	            break;
	        case 15:
	        case 16:
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 145;
	            this.literal();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 146;
	            this.tripleX();
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
	    this.enterRule(localctx, 34, turtlestarParser.RULE_literal);
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.rdfLiteral();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 150;
	            this.match(turtlestarParser.NumericLiteral);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 151;
	            this.match(turtlestarParser.BooleanLiteral);
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
	    this.enterRule(localctx, 36, turtlestarParser.RULE_blankNodePropertyList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(turtlestarParser.T__8);
	        this.state = 155;
	        this.predicateObjectList();
	        this.state = 156;
	        this.match(turtlestarParser.T__9);
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
	    this.enterRule(localctx, 38, turtlestarParser.RULE_collection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(turtlestarParser.T__10);
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4164224) !== 0)) {
	            this.state = 159;
	            this.object();
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 165;
	        this.match(turtlestarParser.T__11);
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
	    this.enterRule(localctx, 40, turtlestarParser.RULE_rdfLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(turtlestarParser.String);
	        this.state = 171;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 23:
	        	this.state = 168;
	        	this.match(turtlestarParser.LANGTAG);
	        	break;
	        case 13:
	        	this.state = 169;
	        	this.match(turtlestarParser.T__12);
	        	this.state = 170;
	        	this.iri();
	        	break;
	        case 1:
	        case 4:
	        case 5:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
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
	    this.enterRule(localctx, 42, turtlestarParser.RULE_iri);
	    try {
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            this.match(turtlestarParser.IRIREF);
	            break;
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 174;
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
	    this.enterRule(localctx, 44, turtlestarParser.RULE_prefixedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
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


}

turtlestarParser.EOF = antlr4.Token.EOF;
turtlestarParser.T__0 = 1;
turtlestarParser.T__1 = 2;
turtlestarParser.T__2 = 3;
turtlestarParser.T__3 = 4;
turtlestarParser.T__4 = 5;
turtlestarParser.T__5 = 6;
turtlestarParser.T__6 = 7;
turtlestarParser.T__7 = 8;
turtlestarParser.T__8 = 9;
turtlestarParser.T__9 = 10;
turtlestarParser.T__10 = 11;
turtlestarParser.T__11 = 12;
turtlestarParser.T__12 = 13;
turtlestarParser.COMMENT = 14;
turtlestarParser.NumericLiteral = 15;
turtlestarParser.BooleanLiteral = 16;
turtlestarParser.String = 17;
turtlestarParser.BlankNode = 18;
turtlestarParser.IRIREF = 19;
turtlestarParser.PNAME_NS = 20;
turtlestarParser.PNAME_LN = 21;
turtlestarParser.BLANK_NODE_LABEL = 22;
turtlestarParser.LANGTAG = 23;
turtlestarParser.INTEGER = 24;
turtlestarParser.DECIMAL = 25;
turtlestarParser.DOUBLE = 26;
turtlestarParser.EXPONENT = 27;
turtlestarParser.STRING_LITERAL_LONG_SINGLE_QUOTE = 28;
turtlestarParser.STRING_LITERAL_LONG_QUOTE = 29;
turtlestarParser.STRING_LITERAL_QUOTE = 30;
turtlestarParser.STRING_LITERAL_SINGLE_QUOTE = 31;
turtlestarParser.UCHAR = 32;
turtlestarParser.ECHAR = 33;
turtlestarParser.WS = 34;
turtlestarParser.ANON = 35;
turtlestarParser.PN_CHARS_BASE = 36;
turtlestarParser.PN_CHARS_U = 37;
turtlestarParser.PN_CHARS = 38;
turtlestarParser.BASE = 39;
turtlestarParser.PREFIX = 40;
turtlestarParser.PN_PREFIX = 41;
turtlestarParser.PN_LOCAL = 42;
turtlestarParser.PLX = 43;
turtlestarParser.PERCENT = 44;
turtlestarParser.HEX = 45;
turtlestarParser.PN_LOCAL_ESC = 46;

turtlestarParser.RULE_turtleStarDoc = 0;
turtlestarParser.RULE_statement = 1;
turtlestarParser.RULE_directive = 2;
turtlestarParser.RULE_prefixID = 3;
turtlestarParser.RULE_base = 4;
turtlestarParser.RULE_sparqlBase = 5;
turtlestarParser.RULE_sparqlPrefix = 6;
turtlestarParser.RULE_triples = 7;
turtlestarParser.RULE_predicateObjectList = 8;
turtlestarParser.RULE_objectList = 9;
turtlestarParser.RULE_verb = 10;
turtlestarParser.RULE_subject = 11;
turtlestarParser.RULE_predicate = 12;
turtlestarParser.RULE_object = 13;
turtlestarParser.RULE_tripleX = 14;
turtlestarParser.RULE_subjectX = 15;
turtlestarParser.RULE_objectX = 16;
turtlestarParser.RULE_literal = 17;
turtlestarParser.RULE_blankNodePropertyList = 18;
turtlestarParser.RULE_collection = 19;
turtlestarParser.RULE_rdfLiteral = 20;
turtlestarParser.RULE_iri = 21;
turtlestarParser.RULE_prefixedName = 22;

class TurtleStarDocContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtlestarParser.RULE_turtleStarDoc;
    }

	EOF() {
	    return this.getToken(turtlestarParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterTurtleStarDoc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitTurtleStarDoc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitTurtleStarDoc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtlestarParser.RULE_statement;
    }

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	triples() {
	    return this.getTypedRuleContext(TriplesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtlestarParser.RULE_directive;
    }

	prefixID() {
	    return this.getTypedRuleContext(PrefixIDContext,0);
	};

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	sparqlPrefix() {
	    return this.getTypedRuleContext(SparqlPrefixContext,0);
	};

	sparqlBase() {
	    return this.getTypedRuleContext(SparqlBaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitDirective(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitDirective(this);
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
        this.ruleIndex = turtlestarParser.RULE_prefixID;
    }

	PNAME_NS() {
	    return this.getToken(turtlestarParser.PNAME_NS, 0);
	};

	IRIREF() {
	    return this.getToken(turtlestarParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterPrefixID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitPrefixID(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_base;
    }

	IRIREF() {
	    return this.getToken(turtlestarParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitBase(this);
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
        this.ruleIndex = turtlestarParser.RULE_sparqlBase;
    }

	BASE() {
	    return this.getToken(turtlestarParser.BASE, 0);
	};

	IRIREF() {
	    return this.getToken(turtlestarParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterSparqlBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitSparqlBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_sparqlPrefix;
    }

	PREFIX() {
	    return this.getToken(turtlestarParser.PREFIX, 0);
	};

	PNAME_NS() {
	    return this.getToken(turtlestarParser.PNAME_NS, 0);
	};

	IRIREF() {
	    return this.getToken(turtlestarParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterSparqlPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitSparqlPrefix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitSparqlPrefix(this);
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
        this.ruleIndex = turtlestarParser.RULE_triples;
    }

	subject() {
	    return this.getTypedRuleContext(SubjectContext,0);
	};

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterTriples(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitTriples(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_predicateObjectList;
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
	    if(listener instanceof turtlestarListener ) {
	        listener.enterPredicateObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitPredicateObjectList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_objectList;
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
	    if(listener instanceof turtlestarListener ) {
	        listener.enterObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitObjectList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_verb;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterVerb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitVerb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_subject;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(turtlestarParser.BlankNode, 0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	tripleX() {
	    return this.getTypedRuleContext(TripleXContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitSubject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_predicate;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitPredicate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_object;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(turtlestarParser.BlankNode, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	tripleX() {
	    return this.getTypedRuleContext(TripleXContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitObject(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TripleXContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtlestarParser.RULE_tripleX;
    }

	subjectX() {
	    return this.getTypedRuleContext(SubjectXContext,0);
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	objectX() {
	    return this.getTypedRuleContext(ObjectXContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterTripleX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitTripleX(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitTripleX(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubjectXContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtlestarParser.RULE_subjectX;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(turtlestarParser.BlankNode, 0);
	};

	tripleX() {
	    return this.getTypedRuleContext(TripleXContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterSubjectX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitSubjectX(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitSubjectX(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectXContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtlestarParser.RULE_objectX;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(turtlestarParser.BlankNode, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	tripleX() {
	    return this.getTypedRuleContext(TripleXContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterObjectX(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitObjectX(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitObjectX(this);
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
        this.ruleIndex = turtlestarParser.RULE_literal;
    }

	rdfLiteral() {
	    return this.getTypedRuleContext(RdfLiteralContext,0);
	};

	NumericLiteral() {
	    return this.getToken(turtlestarParser.NumericLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(turtlestarParser.BooleanLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_blankNodePropertyList;
    }

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterBlankNodePropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitBlankNodePropertyList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitBlankNodePropertyList(this);
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
        this.ruleIndex = turtlestarParser.RULE_collection;
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
	    if(listener instanceof turtlestarListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitCollection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitCollection(this);
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
        this.ruleIndex = turtlestarParser.RULE_rdfLiteral;
    }

	String() {
	    return this.getToken(turtlestarParser.String, 0);
	};

	LANGTAG() {
	    return this.getToken(turtlestarParser.LANGTAG, 0);
	};

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterRdfLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitRdfLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_iri;
    }

	IRIREF() {
	    return this.getToken(turtlestarParser.IRIREF, 0);
	};

	prefixedName() {
	    return this.getTypedRuleContext(PrefixedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterIri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitIri(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
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
        this.ruleIndex = turtlestarParser.RULE_prefixedName;
    }

	PNAME_NS() {
	    return this.getToken(turtlestarParser.PNAME_NS, 0);
	};

	PNAME_LN() {
	    return this.getToken(turtlestarParser.PNAME_LN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.enterPrefixedName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtlestarListener ) {
	        listener.exitPrefixedName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof turtlestarVisitor ) {
	        return visitor.visitPrefixedName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




turtlestarParser.TurtleStarDocContext = TurtleStarDocContext; 
turtlestarParser.StatementContext = StatementContext; 
turtlestarParser.DirectiveContext = DirectiveContext; 
turtlestarParser.PrefixIDContext = PrefixIDContext; 
turtlestarParser.BaseContext = BaseContext; 
turtlestarParser.SparqlBaseContext = SparqlBaseContext; 
turtlestarParser.SparqlPrefixContext = SparqlPrefixContext; 
turtlestarParser.TriplesContext = TriplesContext; 
turtlestarParser.PredicateObjectListContext = PredicateObjectListContext; 
turtlestarParser.ObjectListContext = ObjectListContext; 
turtlestarParser.VerbContext = VerbContext; 
turtlestarParser.SubjectContext = SubjectContext; 
turtlestarParser.PredicateContext = PredicateContext; 
turtlestarParser.ObjectContext = ObjectContext; 
turtlestarParser.TripleXContext = TripleXContext; 
turtlestarParser.SubjectXContext = SubjectXContext; 
turtlestarParser.ObjectXContext = ObjectXContext; 
turtlestarParser.LiteralContext = LiteralContext; 
turtlestarParser.BlankNodePropertyListContext = BlankNodePropertyListContext; 
turtlestarParser.CollectionContext = CollectionContext; 
turtlestarParser.RdfLiteralContext = RdfLiteralContext; 
turtlestarParser.IriContext = IriContext; 
turtlestarParser.PrefixedNameContext = PrefixedNameContext; 
