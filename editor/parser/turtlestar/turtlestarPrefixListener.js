var turtlestarListener = require('./turtlestarListener').turtlestarListener;

function turtlestarPrefixListener(listener) {
	turtlestarListener.call(this);
	this.listener = listener;
	this.prefixes = {};
	
	return this;
}

turtlestarPrefixListener.prototype = Object.create(turtlestarListener.prototype);
turtlestarPrefixListener.prototype.constructor = turtlestarPrefixListener;

// Exit a parse tree produced by turtlestarParser#sparqlPrefix.
turtlestarPrefixListener.prototype.exitSparqlPrefix = function(ctx) {
	this.processPrefix(ctx.PNAME_NS(), ctx.IRIREF());
};

// Exit a parse tree produced by turtlestarParser#prefixID.
turtlestarPrefixListener.prototype.exitPrefixID = function(ctx) {
	this.processPrefix(ctx.PNAME_NS(), ctx.IRIREF());
};

turtlestarPrefixListener.prototype.processPrefix = function(pNameNs, iriRef) {
	if (pNameNs == null)
		return

	var prefix = pNameNs.getText().trim();
	prefix = prefix.substring(0, prefix.length - 1)

	var uri = this.iri(iriRef);
	this.prefixes[prefix] = uri;
}

// Exit a parse tree produced by turtlestarParser#prefixedName.
turtlestarPrefixListener.prototype.exitPrefixedName = function(ctx) {
	var pNameLn = ctx.PNAME_LN();

	if (pNameLn != null) {
		var pName = pNameLn.getText().trim();
		var prefix = pName.substring(0, pName.indexOf(":")).trim();

		if (prefix == "")
			return;
		
		if (this.prefixes[prefix] === undefined) {
			var line = ctx.start.line
			var start = ctx.start.column
			var end = start + prefix.length
			
			this.listener.unknownPrefix(prefix, pName, line, start, end);
		}
	}
};

turtlestarPrefixListener.prototype.text = function(node) {
	if (node == null)
		return null;
	
	return node.getText().trim();
}

turtlestarPrefixListener.prototype.iri = function(node) {
	var s = this.text(node);
	return s.substring(1, s.length - 1);
}

exports.turtlestarPrefixListener = turtlestarPrefixListener;