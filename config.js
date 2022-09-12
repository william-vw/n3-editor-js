exports.http = {
	// IMPORTANT also change in index.html
	hostname: '127.0.0.1',
	// hostname: 'ppr.cs.dal.ca',
	port: 3002
}

exports.exec = {
	eyePath: "/opt/eye/bin/eye.sh",
	
	pythonCmd: "python", // use python2 for cwm
	
	// cwmPath: "/opt/cwm-1.2.1/swap/cwm.py"
	cwmPath: "/Users/wvw/cwm-1.2.1/swap/cwm.py",

	jen3Path: "/Users/wvw/git/n3/jen3/jen3.jar"
}

exports.db = {
	user: 'root',
	// pwd: '12345',
	pwd: 'changeit'
}

// exports.path = "/home/woensel/projects/n3-editor-js"
exports.path = "/Users/wvw/git/n3/n3-editor-js"
