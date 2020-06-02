var antlr4 = require('antlr4');
var N3Lexer = require('./n3Lexer').n3Lexer;
var N3Parser = require('./n3Parser').n3Parser;
var N3PrefixListener = require('./n3PrefixListener').n3PrefixListener;
var N3PrintListener = require('./n3PrintListener').n3PrintListener;

function parse(input, listener) {
	var chars = new antlr4.InputStream(input);
	
	var n3Lexer = new N3Lexer(chars);
	n3Lexer.removeErrorListeners();
	n3Lexer.addErrorListener(listener);
	
	var tokens = new antlr4.CommonTokenStream(n3Lexer);
	
	var n3Parser = new N3Parser(tokens);
	n3Parser.removeErrorListeners();
	n3Parser.removeParseListeners();
	
	if (listener.syntaxError)
		// will call listener with any syntax (parser/lexer) error
		n3Parser.addErrorListener(listener);
	
	if (listener.unknownPrefix)
		// will call listener with any prefix errors
		n3Parser.addParseListener(new N3PrefixListener(listener));
	
	if (listener.newAstLine)
		// will call listener with individual ast lines
		n3Parser.addParseListener(new N3PrintListener(listener));
	
	n3Parser.n3Doc()
}

exports.parse = parse;