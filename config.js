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
		// - local, ppr
		// exec: "/opt/eye/bin/eye.sh", // ppr
		// folder: "/Users/wvw/git/n3/n3-editor-js/lib/eye" // local
		// - heroku
		exec: "/app/opt/eye/bin/eye", 
		folder: "/app/lib/eye"
	},
	cwm: {
		// - local, ppr
		// (use python2 for cwm)
		pythonCmd: "python", // local, ppr
		// exec: "/opt/cwm-1.2.1/swap/cwm.py" // ppr
		// exec: "/Users/wvw/cwm-1.2.1/swap/cwm.py" // local
		// - heroku
		pythonCmd: "", // (python2 is not available)
		exec: ""
	},
	jen3: {
		// - local
		// exec: "/Users/wvw/git/n3/n3-editor-js/lib/jen3/jen3.jar",
		// folder: "/Users/wvw/git/n3/n3-editor-js/lib/jen3",
		// - heroku
		exec: "/app/lib/jen3/jen3.jar",
		folder: "/app/lib/jen3"
	}
}

exports.db = {
	port: '33060',
	// - local, ppr
	// host: 'localhost',
	// db: "n3_links",
	// user: 'root', // local, ppr
	// pwd: '12345', // (?)
	// pwd: 'changeit' // ppr (?)
	// pwd: '' // local
	// - heroku
	// mysql://b4837d17c012f1:e023e78d@us-cdbr-east-06.cleardb.net/heroku_e750abd160bbcaf?reconnect=true
	host: "us-cdbr-east-06.cleardb.net",
	db: "heroku_e750abd160bbcaf",
	user: "b4837d17c012f1",
	pwd: "e023e78d"
}

// exports.path = "/home/woensel/projects/n3-editor-js" // ppr
exports.path = "/Users/wvw/git/n3/n3-editor-js" // local
