var antlr4 = require('antlr4');
var TurtleStarLexer = require('./turtlestarLexer').turtlestarLexer;
var TurtleStarParser = require('./turtlestarParser').turtlestarParser;
var TurtleStarPrefixListener = require('./turtlestarPrefixListener').turtlestarPrefixListener;
// var TurtleStarPrintListener = require('./turtlestarPrintListener').turtlestarPrintListener;
var TurtleStarPrintVisitor = require('./turtlestarPrintVisitor').turtlestarPrintVisitor;

function parse(input, listener) {
	var chars = new antlr4.InputStream(input);
	
	var turtlestarLexer = new TurtleStarLexer(chars);
	turtlestarLexer.removeErrorListeners();
	turtlestarLexer.addErrorListener(listener);
	
	var tokens = new antlr4.CommonTokenStream(turtlestarLexer);
	
	var turtlestarParser = new TurtleStarParser(tokens);
	turtlestarParser.removeErrorListeners();
	turtlestarParser.removeParseListeners();
	
	if (listener.syntaxError)
		// will call listener with any syntax (parser/lexer) error
		turtlestarParser.addErrorListener(listener);
	
	if (listener.unknownPrefix)
		// will call listener with any prefix errors
		turtlestarParser.addParseListener(new TurtleStarPrefixListener(listener));
	
	// if (listener.newAstLine)
		// will call listener with individual ast lines
		// turtlestarParser.addParseListener(new TurtleStarPrintListener(listener));
	
	var ast = turtlestarParser.turtleStarDoc()
	if (listener.newAstLine)
		new TurtleStarPrintVisitor(listener).visit(ast)
}

exports.parse = parse;