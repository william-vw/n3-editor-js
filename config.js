exports.http = {
	// IMPORTANT also change in index.html
	// hostname: 'http://ppr.cs.dal.ca', // ppr
	// hostname: 'http://127.0.0.1', // local
	// port: 3002 // ppr, local
	hostname: 'https://n3-editor.herokuapp.com', // heroku
	port: process.env.PORT // heroku
}

exports.reasoners = {
	eye: {
		exec: "/opt/eye/bin/eye.sh", // ppr
		// folder: "/Users/wvw/git/n3/n3-editor-js/lib/eye" // local
		folder: "/app/lib/eye"
	},
	cwm: {
		pythonCmd: "python", // use python2 for cwm	
		// cwm: "/opt/cwm-1.2.1/swap/cwm.py" // ppr
		exec: "/Users/wvw/cwm-1.2.1/swap/cwm.py" // local
	},
	jen3: {
		// exec: "/Users/wvw/git/n3/n3-editor-js/lib/jen3/jen3.jar", // local
		// folder: "/Users/wvw/git/n3/n3-editor-js/lib/jen3", // local
		exec: "/app/lib/jen3/jen3.jar", // heroku
		folder: "/app/lib/jen3" // heroku
	}
}

exports.db = {
	user: 'root',
	// pwd: '12345',
	// pwd: 'changeit' // ppr (?)
	pwd: '' // local
}

// exports.path = "/home/woensel/projects/n3-editor-js" // ppr
exports.path = "/Users/wvw/git/n3/n3-editor-js" // local
