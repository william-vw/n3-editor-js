function SyntaxValidator() {
	this.output = []
}

SyntaxValidator.prototype.syntaxError = function(recognizer, offendingSymbol,
		line, column, msg, err) {
	
	line -= 1

	// parser error
	if (offendingSymbol) {
		var start = offendingSymbol.start
		var end = offendingSymbol.stop + 1

		this.consoleError("parser", line, start, end, msg)
		this.output.push({
			message : msg,
			severity : "error",
			from : {
				line : line,
				ch : start
			},
			to : {
				line : line,
				ch : end
			}
		})

		// lexer error
	} else {
		var str = err.input.strdata
		var start = column
		var end = column + str.length

		this.consoleError("lexer", line, start, end, msg)
		this.output.push({
			message : msg,
			severity : "error",
			from : {
				line : line,
				ch : start
			},
			to : {
				line : line,
				ch : end
			}
		})
	}
}

SyntaxValidator.prototype.unknownPrefix = function(prefix, pName, line,
		start, end) {
	
	line -= 1
	
	var msg = `unknown prefix "${prefix}" in "${pName}`
	this.consoleError("parser", line, start, end, msg)
			
	this.output.push({
		message : msg,
		severity : "error",
		from : {
			line : line,
			ch : start
		},
		to : {
			line : line,
			ch : end
		}
	})
},

SyntaxValidator.prototype.consoleError = function(type, line, start, end, msg) {
	console.error(`[${type}] line ${line}, col ${start}-${end}: ${msg}`)
}

function doLint(text, options, editor, lib) {
	var output = []
	text = editor.getDoc().getValue()

	var validator = new SyntaxValidator()
	lib.parse(text, validator)

	// console.log(validator.output)
	return validator.output
}

n3.lint = function(text, options, editor) {
	return doLint(text, options, editor, n3)
}

turtlestar.lint = function(text, options, editor) {
	return doLint(text, options, editor, turtlestar)
}

// doesn't seem to work for me
// tried adding it to codemirror addon folder (copying setup from other
// lints); re-installing codemirror (npm install), ..

// CodeMirror.registerHelper("lint", "n3", validator);
