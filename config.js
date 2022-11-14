exports.http = {
	// IMPORTANT also change in service.js
	// - ppr
	// hostname: 'http://ppr.cs.dal.ca',
	// port: 3002
	// - local
	hostname: 'http://127.0.0.1',
	port: 3002
	// - heroku
	// hostname: 'https://n3-editor.herokuapp.com',
	// port: process.env.PORT
}

exports.reasoners = {
	eye: {
		// - ppr
		// exec: "/home/woensel/projects/n3-editor-js/opt/eye/bin/eye",
		// folder: "/home/woensel/projects/n3-editor-js/lib/eye"
		// - local
		exec: "/Users/wvw/git/n3/n3-editor-js/opt/eye/bin/eye",
		folder: "/Users/wvw/git/n3/n3-editor-js/lib/eye"
		// - heroku
		// exec: "/app/opt/eye/bin/eye", 
		// folder: "/app/lib/eye"
	},
	cwm: {
		// (use python2 for cwm)
		// - ppr
		// pythonCmd: "python",
		// exec: "/opt/cwm-1.2.1/swap/cwm.py"
		// - local
		pythonCmd: "python",
		exec: "/Users/wvw/cwm-1.2.1/swap/cwm.py"
		// - heroku
		// pythonCmd: "", // (python2 is not available)
		// exec: ""
	},
	jen3: {
		// - ppr
		// exec: "/home/woensel/projects/n3-editor-js/lib/jen3/jen3.jar",
		// folder: "/home/woensel/projects/n3-editor-js/lib/jen3",
		// - local
		exec: "/Users/wvw/git/n3/n3-editor-js/lib/jen3/jen3.jar",
		folder: "/Users/wvw/git/n3/n3-editor-js/lib/jen3",
		// - heroku
		// exec: "/app/lib/jen3/jen3.jar",
		// folder: "/app/lib/jen3"
	}
}

exports.db = {
	port: '33060',
	// - ppr
	// host: 'localhost',
	// db: "n3_links",
	// user: 'root', 
	// pwd: 'changeit',
	// local
	host: 'localhost',
	db: "n3_links",
	user: 'root',
	pwd: ''
	// - heroku
	// mysql://b4837d17c012f1:e023e78d@us-cdbr-east-06.cleardb.net/heroku_e750abd160bbcaf?reconnect=true
	// host: "us-cdbr-east-06.cleardb.net",
	// db: "heroku_e750abd160bbcaf",
	// user: "b4837d17c012f1",
	// pwd: "e023e78d"
}

// exports.path = "/home/woensel/projects/n3-editor-js" // ppr
exports.path = "/Users/wvw/git/n3/n3-editor-js" // local
