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

N3AstPrinter.prototype.reportAmbiguity = 
	function(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
		this.onError(`reportAmbiguity: startIndex: ${startIndex}, stopIndex: ${stopIndex}, exact: ${exact}, ambigAlts: ${ambigAlts}, configs: ${configs}`)
}

N3AstPrinter.prototype.reportAttemptingFullContext = 
	function(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
		this.onError(`reportAttemptingFullContext: startIndex: ${startIndex}, stopIndex: ${stopIndex}, conflictingAlts: ${conflictingAlts}, configs: ${configs}`)
}

N3AstPrinter.prototype.reportContextSensitivity = 
	function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
		this.onError(`reportContextSensitivity: startIndex: ${startIndex}, stopIndex: ${stopIndex}, prediction: ${prediction}, configs: ${configs}`)
}

N3AstPrinter.prototype.newAstLine = function(line) {
	this.onAstLine(line)
}

n3.ast = function(formula, onAstLine, onError) {
	var output = []

	var printer = new N3AstPrinter(onAstLine, onError)
	n3.parse(formula, printer)
}