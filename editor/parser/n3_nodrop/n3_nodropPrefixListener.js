import n3_nodropListener from './n3_nodropListener';

export default class n3_nodropPrefixListener extends n3_nodropListener {

	constructor(listener) {
		super();

		this.listener = listener;
		this.prefixes = {};
	}

	// Exit a parse tree produced by n3Parser#sparqlPrefix.
	exitSparqlPrefix(ctx) {
		this.processPrefix(ctx.PNAME_NS(), ctx.IRIREF());
	}

	// Exit a parse tree produced by n3Parser#prefixID.
	exitPrefixID(ctx) {
		this.processPrefix(ctx.PNAME_NS(), ctx.IRIREF());
	}

	processPrefix(pNameNs, iriRef) {
		if (pNameNs == null)
			return

		var prefix = pNameNs.getText().trim();
		prefix = prefix.substring(0, prefix.length - 1)

		var uri = this.iri(iriRef);
		this.prefixes[prefix] = uri;
	}

	// Exit a parse tree produced by n3Parser#prefixedName.
	exitPrefixedName(ctx) {
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
	}

	text(node) {
		if (node == null)
			return null;

		return node.getText().trim();
	}

	iri(node) {
		var s = this.text(node);
		return s.substring(1, s.length - 1);
	}
}