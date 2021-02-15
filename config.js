exports.http = {
	hostname: '127.0.0.1',
	// hostname: 'ppr.cs.dal.ca',
	port: 3002
}

exports.exec = {
	eyePath: "/opt/eye/bin/eye.sh",
	
	pythonCmd: "python", // use python2 for cwm
	// pythonCmd: "C:/Python27/python.exe", // use python2 for cwm
	
	cwmPath: "/opt/cwm-1.2.1/swap/cwm.py",
	// cwmPath: "C:/cwm/cwm-1.2.1/swap/cwm.py"
}

exports.db = {
	user: 'root',
	// pwd: '12345',
	pwd: 'changeit'
}

// exports.path = "/home/woensel/projects/n3-editor-js"
exports.path = "D:/git/n3dev/n3-editor-js"
