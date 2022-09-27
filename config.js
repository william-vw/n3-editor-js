exports.http = {
	// IMPORTANT also change in index.html
	hostname: '127.0.0.1',
	// hostname: 'ppr.cs.dal.ca',
	port: 3002
}

exports.reasoners = {
	eye: {
		exec: "/opt/eye/bin/eye.sh",
		folder: "/Users/wvw/git/n3/n3-editor-js/lib/eye"
	},
	cwm: {
		pythonCmd: "python", // use python2 for cwm	
		// cwm: "/opt/cwm-1.2.1/swap/cwm.py"
		exec: "/Users/wvw/cwm-1.2.1/swap/cwm.py"
	},
	jen3: {
		exec: "/Users/wvw/git/n3/n3-editor-js/lib/jen3/jen3.jar",
		folder: "/Users/wvw/git/n3/n3-editor-js/lib/jen3"
	}
}

exports.db = {
	user: 'root',
	// pwd: '12345',
	// pwd: 'changeit'
	pwd: ''
}

// exports.path = "/home/woensel/projects/n3-editor-js"
exports.path = "/Users/wvw/git/n3/n3-editor-js"
