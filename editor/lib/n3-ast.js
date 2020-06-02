function N3AstPrinter(onAstLine, onError) {
	this.onAstLine = onAstLine
	this.onError = onError
}
N3AstPrinter.prototype.syntaxError = 
	function(recognizer, offendingSymbol, line, column, msg, err) {
		// parser error
		if (offendingSymbol)
			this.onError(`${offendingSymbol}\nline ${line}, col ${column}: ${msg}`)
		// lexer error
		else
			this.onError(`line ${line}, col ${column}: ${msg}`)
}

N3AstPrinter.prototype.newAstLine = function(line) {
	this.onAstLine(line)
}

n3.ast = function(formula, onAstLine, onError) {
	var output = []

	var printer = new N3AstPrinter(onAstLine, onError)
	n3.parse(formula, printer)
}