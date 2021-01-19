// Generated from D:\git\n3dev\N3\grammar\turtlestar.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');
var turtlestarListener = require('./turtlestarListener').turtlestarListener;
var turtlestarVisitor = require('./turtlestarVisitor').turtlestarVisitor;

var grammarFileName = "turtlestar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00030\u00b6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0007\u00022\n\u0002\f\u0002\u000e\u0002",
    "5\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003=\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004C\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tZ\n\t\u0005\t\\\n",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nd\n\n\u0007",
    "\nf\n\n\f\n\u000e\ni\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000bn\n\u000b\f\u000b\u000e\u000bq\u000b\u000b\u0003\f\u0003\f\u0005",
    "\fu\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r{\n\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0005\u000f\u0085\n\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0005\u0011\u0090\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0005\u0012\u0096\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u009b\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0007\u0015\u00a3\n\u0015\f\u0015\u000e",
    "\u0015\u00a6\u000b\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0005\u0016\u00ae\n\u0016\u0003\u0017\u0003",
    "\u0017\u0005\u0017\u00b2\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0002\u0002\u0019\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.\u0002\u0003\u0003\u0002\u0016\u0017",
    "\u00bc\u00023\u0003\u0002\u0002\u0002\u0004<\u0003\u0002\u0002\u0002",
    "\u0006B\u0003\u0002\u0002\u0002\bD\u0003\u0002\u0002\u0002\nI\u0003",
    "\u0002\u0002\u0002\fM\u0003\u0002\u0002\u0002\u000eP\u0003\u0002\u0002",
    "\u0002\u0010[\u0003\u0002\u0002\u0002\u0012]\u0003\u0002\u0002\u0002",
    "\u0014j\u0003\u0002\u0002\u0002\u0016t\u0003\u0002\u0002\u0002\u0018",
    "z\u0003\u0002\u0002\u0002\u001a|\u0003\u0002\u0002\u0002\u001c\u0084",
    "\u0003\u0002\u0002\u0002\u001e\u0086\u0003\u0002\u0002\u0002 \u008f",
    "\u0003\u0002\u0002\u0002\"\u0095\u0003\u0002\u0002\u0002$\u009a\u0003",
    "\u0002\u0002\u0002&\u009c\u0003\u0002\u0002\u0002(\u00a0\u0003\u0002",
    "\u0002\u0002*\u00a9\u0003\u0002\u0002\u0002,\u00b1\u0003\u0002\u0002",
    "\u0002.\u00b3\u0003\u0002\u0002\u000202\u0005\u0004\u0003\u000210\u0003",
    "\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u000246\u0003\u0002\u0002\u000253\u0003\u0002\u0002",
    "\u000267\u0007\u0002\u0002\u00037\u0003\u0003\u0002\u0002\u00028=\u0005",
    "\u0006\u0004\u00029:\u0005\u0010\t\u0002:;\u0007\u0003\u0002\u0002;",
    "=\u0003\u0002\u0002\u0002<8\u0003\u0002\u0002\u0002<9\u0003\u0002\u0002",
    "\u0002=\u0005\u0003\u0002\u0002\u0002>C\u0005\b\u0005\u0002?C\u0005",
    "\n\u0006\u0002@C\u0005\u000e\b\u0002AC\u0005\f\u0007\u0002B>\u0003\u0002",
    "\u0002\u0002B?\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BA\u0003",
    "\u0002\u0002\u0002C\u0007\u0003\u0002\u0002\u0002DE\u0007\u0004\u0002",
    "\u0002EF\u0007\u0016\u0002\u0002FG\u0007\u0015\u0002\u0002GH\u0007\u0003",
    "\u0002\u0002H\t\u0003\u0002\u0002\u0002IJ\u0007\u0005\u0002\u0002JK",
    "\u0007\u0015\u0002\u0002KL\u0007\u0003\u0002\u0002L\u000b\u0003\u0002",
    "\u0002\u0002MN\u0007)\u0002\u0002NO\u0007\u0015\u0002\u0002O\r\u0003",
    "\u0002\u0002\u0002PQ\u0007*\u0002\u0002QR\u0007\u0016\u0002\u0002RS",
    "\u0007\u0015\u0002\u0002S\u000f\u0003\u0002\u0002\u0002TU\u0005\u0018",
    "\r\u0002UV\u0005\u0012\n\u0002V\\\u0003\u0002\u0002\u0002WY\u0005&\u0014",
    "\u0002XZ\u0005\u0012\n\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002Z\\\u0003\u0002\u0002\u0002[T\u0003\u0002\u0002\u0002[W",
    "\u0003\u0002\u0002\u0002\\\u0011\u0003\u0002\u0002\u0002]^\u0005\u0016",
    "\f\u0002^g\u0005\u0014\u000b\u0002_c\u0007\u0006\u0002\u0002`a\u0005",
    "\u0016\f\u0002ab\u0005\u0014\u000b\u0002bd\u0003\u0002\u0002\u0002c",
    "`\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002df\u0003\u0002\u0002",
    "\u0002e_\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002",
    "\u0002\u0002gh\u0003\u0002\u0002\u0002h\u0013\u0003\u0002\u0002\u0002",
    "ig\u0003\u0002\u0002\u0002jo\u0005\u001c\u000f\u0002kl\u0007\u0007\u0002",
    "\u0002ln\u0005\u001c\u000f\u0002mk\u0003\u0002\u0002\u0002nq\u0003\u0002",
    "\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u0015",
    "\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002ru\u0005\u001a\u000e",
    "\u0002su\u0007\b\u0002\u0002tr\u0003\u0002\u0002\u0002ts\u0003\u0002",
    "\u0002\u0002u\u0017\u0003\u0002\u0002\u0002v{\u0005,\u0017\u0002w{\u0007",
    "\u0014\u0002\u0002x{\u0005(\u0015\u0002y{\u0005\u001e\u0010\u0002zv",
    "\u0003\u0002\u0002\u0002zw\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002",
    "\u0002zy\u0003\u0002\u0002\u0002{\u0019\u0003\u0002\u0002\u0002|}\u0005",
    ",\u0017\u0002}\u001b\u0003\u0002\u0002\u0002~\u0085\u0005,\u0017\u0002",
    "\u007f\u0085\u0007\u0014\u0002\u0002\u0080\u0085\u0005$\u0013\u0002",
    "\u0081\u0085\u0005(\u0015\u0002\u0082\u0085\u0005&\u0014\u0002\u0083",
    "\u0085\u0005\u001e\u0010\u0002\u0084~\u0003\u0002\u0002\u0002\u0084",
    "\u007f\u0003\u0002\u0002\u0002\u0084\u0080\u0003\u0002\u0002\u0002\u0084",
    "\u0081\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084",
    "\u0083\u0003\u0002\u0002\u0002\u0085\u001d\u0003\u0002\u0002\u0002\u0086",
    "\u0087\u0007\t\u0002\u0002\u0087\u0088\u0005 \u0011\u0002\u0088\u0089",
    "\u0005\u001a\u000e\u0002\u0089\u008a\u0005\"\u0012\u0002\u008a\u008b",
    "\u0007\n\u0002\u0002\u008b\u001f\u0003\u0002\u0002\u0002\u008c\u0090",
    "\u0005,\u0017\u0002\u008d\u0090\u0007\u0014\u0002\u0002\u008e\u0090",
    "\u0005\u001e\u0010\u0002\u008f\u008c\u0003\u0002\u0002\u0002\u008f\u008d",
    "\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090!",
    "\u0003\u0002\u0002\u0002\u0091\u0096\u0005,\u0017\u0002\u0092\u0096",
    "\u0007\u0014\u0002\u0002\u0093\u0096\u0005$\u0013\u0002\u0094\u0096",
    "\u0005\u001e\u0010\u0002\u0095\u0091\u0003\u0002\u0002\u0002\u0095\u0092",
    "\u0003\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0094",
    "\u0003\u0002\u0002\u0002\u0096#\u0003\u0002\u0002\u0002\u0097\u009b",
    "\u0005*\u0016\u0002\u0098\u009b\u0007\u0011\u0002\u0002\u0099\u009b",
    "\u0007\u0012\u0002\u0002\u009a\u0097\u0003\u0002\u0002\u0002\u009a\u0098",
    "\u0003\u0002\u0002\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b%",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u000b\u0002\u0002\u009d\u009e",
    "\u0005\u0012\n\u0002\u009e\u009f\u0007\f\u0002\u0002\u009f\'\u0003\u0002",
    "\u0002\u0002\u00a0\u00a4\u0007\r\u0002\u0002\u00a1\u00a3\u0005\u001c",
    "\u000f\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003\u0002",
    "\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002",
    "\u0002\u0002\u00a5\u00a7\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002",
    "\u0002\u0002\u00a7\u00a8\u0007\u000e\u0002\u0002\u00a8)\u0003\u0002",
    "\u0002\u0002\u00a9\u00ad\u0007\u0013\u0002\u0002\u00aa\u00ae\u0007\u0019",
    "\u0002\u0002\u00ab\u00ac\u0007\u000f\u0002\u0002\u00ac\u00ae\u0005,",
    "\u0017\u0002\u00ad\u00aa\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002",
    "\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae+\u0003\u0002",
    "\u0002\u0002\u00af\u00b2\u0007\u0015\u0002\u0002\u00b0\u00b2\u0005.",
    "\u0018\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003\u0002",
    "\u0002\u0002\u00b2-\u0003\u0002\u0002\u0002\u00b3\u00b4\t\u0002\u0002",
    "\u0002\u00b4/\u0003\u0002\u0002\u0002\u00133<BY[cgotz\u0084\u008f\u0095",
    "\u009a\u00a4\u00ad\u00b1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "'@prefix'", "'@base'", "';'", "','", 
                     "'a'", "'<<'", "'>>'", "'['", "']'", "'('", "')'", 
                     "'^^'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, "COMMENT", "NumericLiteral", 
                      "BooleanLiteral", "String", "BlankNode", "IRIREF", 
                      "PNAME_NS", "PNAME_LN", "BLANK_NODE_LABEL", "LANGTAG", 
                      "INTEGER", "DECIMAL", "DOUBLE", "EXPONENT", "STRING_LITERAL_LONG_SINGLE_QUOTE", 
                      "STRING_LITERAL_LONG_QUOTE", "STRING_LITERAL_QUOTE", 
                      "STRING_LITERAL_SINGLE_QUOTE", "UCHAR", "ECHAR", "WS", 
                      "ANON", "PN_CHARS_BASE", "PN_CHARS_U", "PN_CHARS", 
                      "BASE", "PREFIX", "PN_PREFIX", "PN_LOCAL", "PLX", 
                      "PERCENT", "HEX", "PN_LOCAL_ESC" ];
turtlestarParser.symbolicNames = symbolicNames;

var ruleNames =  [ "turtleStarDoc", "statement", "directive", "prefixID", 
                   "base", "sparqlBase", "sparqlPrefix", "triples", "predicateObjectList", 
                   "objectList", "verb", "subject", "predicate", "object", 
                   "tripleX", "subjectX", "objectX", "literal", "blankNodePropertyList", 
                   "collection", "rdfLiteral", "iri", "prefixedName" ];

function turtlestarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

turtlestarParser.prototype = Object.create(antlr4.Parser.prototype);
turtlestarParser.prototype.constructor = turtlestarParser;

Object.defineProperty(turtlestarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

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

function TurtleStarDocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_turtleStarDoc;
    return this;
}

TurtleStarDocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TurtleStarDocContext.prototype.constructor = TurtleStarDocContext;

TurtleStarDocContext.prototype.EOF = function() {
    return this.getToken(turtlestarParser.EOF, 0);
};

TurtleStarDocContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

TurtleStarDocContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterTurtleStarDoc(this);
	}
};

TurtleStarDocContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitTurtleStarDoc(this);
	}
};

TurtleStarDocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitTurtleStarDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.TurtleStarDocContext = TurtleStarDocContext;

turtlestarParser.prototype.turtleStarDoc = function() {

    var localctx = new TurtleStarDocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, turtlestarParser.RULE_turtleStarDoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtlestarParser.T__1) | (1 << turtlestarParser.T__2) | (1 << turtlestarParser.T__6) | (1 << turtlestarParser.T__8) | (1 << turtlestarParser.T__10) | (1 << turtlestarParser.BlankNode) | (1 << turtlestarParser.IRIREF) | (1 << turtlestarParser.PNAME_NS) | (1 << turtlestarParser.PNAME_LN))) !== 0) || _la===turtlestarParser.BASE || _la===turtlestarParser.PREFIX) {
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
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
};

StatementContext.prototype.triples = function() {
    return this.getTypedRuleContext(TriplesContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.StatementContext = StatementContext;

turtlestarParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, turtlestarParser.RULE_statement);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.T__1:
        case turtlestarParser.T__2:
        case turtlestarParser.BASE:
        case turtlestarParser.PREFIX:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.directive();
            break;
        case turtlestarParser.T__6:
        case turtlestarParser.T__8:
        case turtlestarParser.T__10:
        case turtlestarParser.BlankNode:
        case turtlestarParser.IRIREF:
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
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
};

function DirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_directive;
    return this;
}

DirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirectiveContext.prototype.constructor = DirectiveContext;

DirectiveContext.prototype.prefixID = function() {
    return this.getTypedRuleContext(PrefixIDContext,0);
};

DirectiveContext.prototype.base = function() {
    return this.getTypedRuleContext(BaseContext,0);
};

DirectiveContext.prototype.sparqlPrefix = function() {
    return this.getTypedRuleContext(SparqlPrefixContext,0);
};

DirectiveContext.prototype.sparqlBase = function() {
    return this.getTypedRuleContext(SparqlBaseContext,0);
};

DirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterDirective(this);
	}
};

DirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitDirective(this);
	}
};

DirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.DirectiveContext = DirectiveContext;

turtlestarParser.prototype.directive = function() {

    var localctx = new DirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, turtlestarParser.RULE_directive);
    try {
        this.state = 64;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.prefixID();
            break;
        case turtlestarParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.base();
            break;
        case turtlestarParser.PREFIX:
            this.enterOuterAlt(localctx, 3);
            this.state = 62;
            this.sparqlPrefix();
            break;
        case turtlestarParser.BASE:
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
};

function PrefixIDContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_prefixID;
    return this;
}

PrefixIDContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixIDContext.prototype.constructor = PrefixIDContext;

PrefixIDContext.prototype.PNAME_NS = function() {
    return this.getToken(turtlestarParser.PNAME_NS, 0);
};

PrefixIDContext.prototype.IRIREF = function() {
    return this.getToken(turtlestarParser.IRIREF, 0);
};

PrefixIDContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterPrefixID(this);
	}
};

PrefixIDContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitPrefixID(this);
	}
};

PrefixIDContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitPrefixID(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.PrefixIDContext = PrefixIDContext;

turtlestarParser.prototype.prefixID = function() {

    var localctx = new PrefixIDContext(this, this._ctx, this.state);
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
};

function BaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_base;
    return this;
}

BaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BaseContext.prototype.constructor = BaseContext;

BaseContext.prototype.IRIREF = function() {
    return this.getToken(turtlestarParser.IRIREF, 0);
};

BaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterBase(this);
	}
};

BaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitBase(this);
	}
};

BaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitBase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.BaseContext = BaseContext;

turtlestarParser.prototype.base = function() {

    var localctx = new BaseContext(this, this._ctx, this.state);
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
};

function SparqlBaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_sparqlBase;
    return this;
}

SparqlBaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SparqlBaseContext.prototype.constructor = SparqlBaseContext;

SparqlBaseContext.prototype.BASE = function() {
    return this.getToken(turtlestarParser.BASE, 0);
};

SparqlBaseContext.prototype.IRIREF = function() {
    return this.getToken(turtlestarParser.IRIREF, 0);
};

SparqlBaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterSparqlBase(this);
	}
};

SparqlBaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitSparqlBase(this);
	}
};

SparqlBaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitSparqlBase(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.SparqlBaseContext = SparqlBaseContext;

turtlestarParser.prototype.sparqlBase = function() {

    var localctx = new SparqlBaseContext(this, this._ctx, this.state);
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
};

function SparqlPrefixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_sparqlPrefix;
    return this;
}

SparqlPrefixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SparqlPrefixContext.prototype.constructor = SparqlPrefixContext;

SparqlPrefixContext.prototype.PREFIX = function() {
    return this.getToken(turtlestarParser.PREFIX, 0);
};

SparqlPrefixContext.prototype.PNAME_NS = function() {
    return this.getToken(turtlestarParser.PNAME_NS, 0);
};

SparqlPrefixContext.prototype.IRIREF = function() {
    return this.getToken(turtlestarParser.IRIREF, 0);
};

SparqlPrefixContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterSparqlPrefix(this);
	}
};

SparqlPrefixContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitSparqlPrefix(this);
	}
};

SparqlPrefixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitSparqlPrefix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.SparqlPrefixContext = SparqlPrefixContext;

turtlestarParser.prototype.sparqlPrefix = function() {

    var localctx = new SparqlPrefixContext(this, this._ctx, this.state);
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
};

function TriplesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_triples;
    return this;
}

TriplesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TriplesContext.prototype.constructor = TriplesContext;

TriplesContext.prototype.subject = function() {
    return this.getTypedRuleContext(SubjectContext,0);
};

TriplesContext.prototype.predicateObjectList = function() {
    return this.getTypedRuleContext(PredicateObjectListContext,0);
};

TriplesContext.prototype.blankNodePropertyList = function() {
    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
};

TriplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterTriples(this);
	}
};

TriplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitTriples(this);
	}
};

TriplesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitTriples(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.TriplesContext = TriplesContext;

turtlestarParser.prototype.triples = function() {

    var localctx = new TriplesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, turtlestarParser.RULE_triples);
    var _la = 0; // Token type
    try {
        this.state = 89;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.T__6:
        case turtlestarParser.T__10:
        case turtlestarParser.BlankNode:
        case turtlestarParser.IRIREF:
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.subject();
            this.state = 83;
            this.predicateObjectList();
            break;
        case turtlestarParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 85;
            this.blankNodePropertyList();
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtlestarParser.T__5) | (1 << turtlestarParser.IRIREF) | (1 << turtlestarParser.PNAME_NS) | (1 << turtlestarParser.PNAME_LN))) !== 0)) {
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
};

function PredicateObjectListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_predicateObjectList;
    return this;
}

PredicateObjectListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateObjectListContext.prototype.constructor = PredicateObjectListContext;

PredicateObjectListContext.prototype.verb = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VerbContext);
    } else {
        return this.getTypedRuleContext(VerbContext,i);
    }
};

PredicateObjectListContext.prototype.objectList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectListContext);
    } else {
        return this.getTypedRuleContext(ObjectListContext,i);
    }
};

PredicateObjectListContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterPredicateObjectList(this);
	}
};

PredicateObjectListContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitPredicateObjectList(this);
	}
};

PredicateObjectListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitPredicateObjectList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.PredicateObjectListContext = PredicateObjectListContext;

turtlestarParser.prototype.predicateObjectList = function() {

    var localctx = new PredicateObjectListContext(this, this._ctx, this.state);
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
        while(_la===turtlestarParser.T__3) {
            this.state = 93;
            this.match(turtlestarParser.T__3);
            this.state = 97;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtlestarParser.T__5) | (1 << turtlestarParser.IRIREF) | (1 << turtlestarParser.PNAME_NS) | (1 << turtlestarParser.PNAME_LN))) !== 0)) {
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
};

function ObjectListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_objectList;
    return this;
}

ObjectListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectListContext.prototype.constructor = ObjectListContext;

ObjectListContext.prototype.object = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectContext);
    } else {
        return this.getTypedRuleContext(ObjectContext,i);
    }
};

ObjectListContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterObjectList(this);
	}
};

ObjectListContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitObjectList(this);
	}
};

ObjectListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitObjectList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.ObjectListContext = ObjectListContext;

turtlestarParser.prototype.objectList = function() {

    var localctx = new ObjectListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, turtlestarParser.RULE_objectList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.object();
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===turtlestarParser.T__4) {
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
};

function VerbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_verb;
    return this;
}

VerbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VerbContext.prototype.constructor = VerbContext;

VerbContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

VerbContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterVerb(this);
	}
};

VerbContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitVerb(this);
	}
};

VerbContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitVerb(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.VerbContext = VerbContext;

turtlestarParser.prototype.verb = function() {

    var localctx = new VerbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, turtlestarParser.RULE_verb);
    try {
        this.state = 114;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.IRIREF:
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.predicate();
            break;
        case turtlestarParser.T__5:
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
};

function SubjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_subject;
    return this;
}

SubjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubjectContext.prototype.constructor = SubjectContext;

SubjectContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

SubjectContext.prototype.BlankNode = function() {
    return this.getToken(turtlestarParser.BlankNode, 0);
};

SubjectContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

SubjectContext.prototype.tripleX = function() {
    return this.getTypedRuleContext(TripleXContext,0);
};

SubjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterSubject(this);
	}
};

SubjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitSubject(this);
	}
};

SubjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitSubject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.SubjectContext = SubjectContext;

turtlestarParser.prototype.subject = function() {

    var localctx = new SubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, turtlestarParser.RULE_subject);
    try {
        this.state = 120;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.IRIREF:
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.iri();
            break;
        case turtlestarParser.BlankNode:
            this.enterOuterAlt(localctx, 2);
            this.state = 117;
            this.match(turtlestarParser.BlankNode);
            break;
        case turtlestarParser.T__10:
            this.enterOuterAlt(localctx, 3);
            this.state = 118;
            this.collection();
            break;
        case turtlestarParser.T__6:
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
};

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitPredicate(this);
	}
};

PredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.PredicateContext = PredicateContext;

turtlestarParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
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
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

ObjectContext.prototype.BlankNode = function() {
    return this.getToken(turtlestarParser.BlankNode, 0);
};

ObjectContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ObjectContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

ObjectContext.prototype.blankNodePropertyList = function() {
    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
};

ObjectContext.prototype.tripleX = function() {
    return this.getTypedRuleContext(TripleXContext,0);
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitObject(this);
	}
};

ObjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitObject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.ObjectContext = ObjectContext;

turtlestarParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, turtlestarParser.RULE_object);
    try {
        this.state = 130;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.IRIREF:
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.iri();
            break;
        case turtlestarParser.BlankNode:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.match(turtlestarParser.BlankNode);
            break;
        case turtlestarParser.NumericLiteral:
        case turtlestarParser.BooleanLiteral:
        case turtlestarParser.String:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
            this.literal();
            break;
        case turtlestarParser.T__10:
            this.enterOuterAlt(localctx, 4);
            this.state = 127;
            this.collection();
            break;
        case turtlestarParser.T__8:
            this.enterOuterAlt(localctx, 5);
            this.state = 128;
            this.blankNodePropertyList();
            break;
        case turtlestarParser.T__6:
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
};

function TripleXContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_tripleX;
    return this;
}

TripleXContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TripleXContext.prototype.constructor = TripleXContext;

TripleXContext.prototype.subjectX = function() {
    return this.getTypedRuleContext(SubjectXContext,0);
};

TripleXContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

TripleXContext.prototype.objectX = function() {
    return this.getTypedRuleContext(ObjectXContext,0);
};

TripleXContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterTripleX(this);
	}
};

TripleXContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitTripleX(this);
	}
};

TripleXContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitTripleX(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.TripleXContext = TripleXContext;

turtlestarParser.prototype.tripleX = function() {

    var localctx = new TripleXContext(this, this._ctx, this.state);
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
};

function SubjectXContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_subjectX;
    return this;
}

SubjectXContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubjectXContext.prototype.constructor = SubjectXContext;

SubjectXContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

SubjectXContext.prototype.BlankNode = function() {
    return this.getToken(turtlestarParser.BlankNode, 0);
};

SubjectXContext.prototype.tripleX = function() {
    return this.getTypedRuleContext(TripleXContext,0);
};

SubjectXContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterSubjectX(this);
	}
};

SubjectXContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitSubjectX(this);
	}
};

SubjectXContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitSubjectX(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.SubjectXContext = SubjectXContext;

turtlestarParser.prototype.subjectX = function() {

    var localctx = new SubjectXContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, turtlestarParser.RULE_subjectX);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.IRIREF:
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 138;
            this.iri();
            break;
        case turtlestarParser.BlankNode:
            this.enterOuterAlt(localctx, 2);
            this.state = 139;
            this.match(turtlestarParser.BlankNode);
            break;
        case turtlestarParser.T__6:
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
};

function ObjectXContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_objectX;
    return this;
}

ObjectXContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectXContext.prototype.constructor = ObjectXContext;

ObjectXContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

ObjectXContext.prototype.BlankNode = function() {
    return this.getToken(turtlestarParser.BlankNode, 0);
};

ObjectXContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ObjectXContext.prototype.tripleX = function() {
    return this.getTypedRuleContext(TripleXContext,0);
};

ObjectXContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterObjectX(this);
	}
};

ObjectXContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitObjectX(this);
	}
};

ObjectXContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitObjectX(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.ObjectXContext = ObjectXContext;

turtlestarParser.prototype.objectX = function() {

    var localctx = new ObjectXContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, turtlestarParser.RULE_objectX);
    try {
        this.state = 147;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.IRIREF:
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.iri();
            break;
        case turtlestarParser.BlankNode:
            this.enterOuterAlt(localctx, 2);
            this.state = 144;
            this.match(turtlestarParser.BlankNode);
            break;
        case turtlestarParser.NumericLiteral:
        case turtlestarParser.BooleanLiteral:
        case turtlestarParser.String:
            this.enterOuterAlt(localctx, 3);
            this.state = 145;
            this.literal();
            break;
        case turtlestarParser.T__6:
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
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.rdfLiteral = function() {
    return this.getTypedRuleContext(RdfLiteralContext,0);
};

LiteralContext.prototype.NumericLiteral = function() {
    return this.getToken(turtlestarParser.NumericLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(turtlestarParser.BooleanLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.LiteralContext = LiteralContext;

turtlestarParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, turtlestarParser.RULE_literal);
    try {
        this.state = 152;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.String:
            this.enterOuterAlt(localctx, 1);
            this.state = 149;
            this.rdfLiteral();
            break;
        case turtlestarParser.NumericLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 150;
            this.match(turtlestarParser.NumericLiteral);
            break;
        case turtlestarParser.BooleanLiteral:
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
};

function BlankNodePropertyListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_blankNodePropertyList;
    return this;
}

BlankNodePropertyListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlankNodePropertyListContext.prototype.constructor = BlankNodePropertyListContext;

BlankNodePropertyListContext.prototype.predicateObjectList = function() {
    return this.getTypedRuleContext(PredicateObjectListContext,0);
};

BlankNodePropertyListContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterBlankNodePropertyList(this);
	}
};

BlankNodePropertyListContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitBlankNodePropertyList(this);
	}
};

BlankNodePropertyListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitBlankNodePropertyList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.BlankNodePropertyListContext = BlankNodePropertyListContext;

turtlestarParser.prototype.blankNodePropertyList = function() {

    var localctx = new BlankNodePropertyListContext(this, this._ctx, this.state);
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
};

function CollectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;

CollectionContext.prototype.object = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectContext);
    } else {
        return this.getTypedRuleContext(ObjectContext,i);
    }
};

CollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitCollection(this);
	}
};

CollectionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitCollection(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.CollectionContext = CollectionContext;

turtlestarParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, turtlestarParser.RULE_collection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(turtlestarParser.T__10);
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtlestarParser.T__6) | (1 << turtlestarParser.T__8) | (1 << turtlestarParser.T__10) | (1 << turtlestarParser.NumericLiteral) | (1 << turtlestarParser.BooleanLiteral) | (1 << turtlestarParser.String) | (1 << turtlestarParser.BlankNode) | (1 << turtlestarParser.IRIREF) | (1 << turtlestarParser.PNAME_NS) | (1 << turtlestarParser.PNAME_LN))) !== 0)) {
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
};

function RdfLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_rdfLiteral;
    return this;
}

RdfLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RdfLiteralContext.prototype.constructor = RdfLiteralContext;

RdfLiteralContext.prototype.String = function() {
    return this.getToken(turtlestarParser.String, 0);
};

RdfLiteralContext.prototype.LANGTAG = function() {
    return this.getToken(turtlestarParser.LANGTAG, 0);
};

RdfLiteralContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

RdfLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterRdfLiteral(this);
	}
};

RdfLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitRdfLiteral(this);
	}
};

RdfLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitRdfLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.RdfLiteralContext = RdfLiteralContext;

turtlestarParser.prototype.rdfLiteral = function() {

    var localctx = new RdfLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, turtlestarParser.RULE_rdfLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(turtlestarParser.String);
        this.state = 171;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
        case turtlestarParser.LANGTAG:
        	this.state = 168;
        	this.match(turtlestarParser.LANGTAG);
        	break;
        case turtlestarParser.T__12:
        	this.state = 169;
        	this.match(turtlestarParser.T__12);
        	this.state = 170;
        	this.iri();
        	break;
        case turtlestarParser.T__0:
        case turtlestarParser.T__3:
        case turtlestarParser.T__4:
        case turtlestarParser.T__6:
        case turtlestarParser.T__7:
        case turtlestarParser.T__8:
        case turtlestarParser.T__9:
        case turtlestarParser.T__10:
        case turtlestarParser.T__11:
        case turtlestarParser.NumericLiteral:
        case turtlestarParser.BooleanLiteral:
        case turtlestarParser.String:
        case turtlestarParser.BlankNode:
        case turtlestarParser.IRIREF:
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
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
};

function IriContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_iri;
    return this;
}

IriContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IriContext.prototype.constructor = IriContext;

IriContext.prototype.IRIREF = function() {
    return this.getToken(turtlestarParser.IRIREF, 0);
};

IriContext.prototype.prefixedName = function() {
    return this.getTypedRuleContext(PrefixedNameContext,0);
};

IriContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterIri(this);
	}
};

IriContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitIri(this);
	}
};

IriContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitIri(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.IriContext = IriContext;

turtlestarParser.prototype.iri = function() {

    var localctx = new IriContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, turtlestarParser.RULE_iri);
    try {
        this.state = 175;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case turtlestarParser.IRIREF:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this.match(turtlestarParser.IRIREF);
            break;
        case turtlestarParser.PNAME_NS:
        case turtlestarParser.PNAME_LN:
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
};

function PrefixedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = turtlestarParser.RULE_prefixedName;
    return this;
}

PrefixedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixedNameContext.prototype.constructor = PrefixedNameContext;

PrefixedNameContext.prototype.PNAME_NS = function() {
    return this.getToken(turtlestarParser.PNAME_NS, 0);
};

PrefixedNameContext.prototype.PNAME_LN = function() {
    return this.getToken(turtlestarParser.PNAME_LN, 0);
};

PrefixedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.enterPrefixedName(this);
	}
};

PrefixedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof turtlestarListener ) {
        listener.exitPrefixedName(this);
	}
};

PrefixedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof turtlestarVisitor ) {
        return visitor.visitPrefixedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




turtlestarParser.PrefixedNameContext = PrefixedNameContext;

turtlestarParser.prototype.prefixedName = function() {

    var localctx = new PrefixedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, turtlestarParser.RULE_prefixedName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        _la = this._input.LA(1);
        if(!(_la===turtlestarParser.PNAME_NS || _la===turtlestarParser.PNAME_LN)) {
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
};


exports.turtlestarParser = turtlestarParser;
