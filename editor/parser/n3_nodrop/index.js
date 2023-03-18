// - CommonJS
// var antlr4 = require('antlr4');
// var N3Lexer = require('./n3_nodropLexer').n3Lexer;
// var N3Parser = require('./n3_nodropParser').n3Parser;
// var N3PrefixListener = require('./n3_nodropPrefixListener').n3PrefixListener;
// var N3PrintListener = require('./n3_nodropPrintListener').n3PrintListener;
// var N3PrintVisitor = require('./n3_nodropPrintVisitor').n3PrintVisitor;

// - ES6
import InputStream from 'antlr4/src/antlr4/InputStream';
import CommonTokenStream from 'antlr4/src/antlr4/CommonTokenStream';
import N3Lexer from './n3_nodropLexer';
import N3Parser from './n3_nodropParser';
import N3PrefixListener from './n3_nodropPrefixListener';
import N3FormatVisitor from './n3_nodropFormatVisitor';


export function parse(input, listener) {
	var chars = new InputStream(input);
	
	var n3Lexer = new N3Lexer(chars);
	n3Lexer.removeErrorListeners();
	n3Lexer.addErrorListener(listener);
	
	var tokens = new CommonTokenStream(n3Lexer);
	
	var n3Parser = new N3Parser(tokens);
	n3Parser.removeErrorListeners();
	n3Parser.removeParseListeners();
	
	if (listener.syntaxError)
		// will call listener with any syntax (parser/lexer) error
		n3Parser.addErrorListener(listener);
	
	if (listener.unknownPrefix)
		// will call listener with any prefix errors
		n3Parser.addParseListener(new N3PrefixListener(listener));
	
	// if (listener.newAstLine)
	// 	// will call listener with individual ast lines
	// 	n3Parser.addParseListener(new N3PrintListener(listener));
	
	var ast = n3Parser.n3Doc()
	if (listener.newAstLine)
		new N3PrintVisitor(listener).visit(ast)
}

export function format(input, config) {
	var chars = new InputStream(input);
	
	var n3Lexer = new N3Lexer(chars);	
	var tokens = new CommonTokenStream(n3Lexer);
	
	var n3Parser = new N3Parser(tokens);
	
	let ast = n3Parser.n3Doc();
	// return ast;

	var visitor = new N3FormatVisitor(config);
	return visitor.visitN3Doc(ast);
}

// exports.parse = parse;