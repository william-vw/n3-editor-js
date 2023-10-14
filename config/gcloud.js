config = {  
	http: {
		hostname: 'http://35.203.103.208',
	    	port: 8080 
	},

	out: "/opt/app/n3-editor/out",

	tools: {
		eye: {
			exec: "eye", 
			exec: "/opt/eye/bin/eye", 
			// exec: "swipl -x /opt/app/n3-editor/opt/eye/lib/eye.pvm -- ",
		    folder: "/opt/app/n3-editor/lib/eye"
		},
		cwm: {
			// (use python2 for cwm)
			pythonCmd: "", // (python2 is not available)
            exec: ""
		},
		jen3: {
            exec: "/opt/app/n3-editor/lib/jen3/jen3.jar",
            codegen: "/opt/app/n3-editor/lib/jen3/codegen.jar",
		    folder: "/opt/app/n3-editor/lib/jen3"
		},
		jena: {
			exec: "/opt/app/n3-editor/lib/jena/sparql.jar",
		},
		triplify: {
			exec: "/opt/app/n3-editor/lib/triplify/sparql2spin.jar"
		},
		spin3: {
			folder: "/opt/app/n3-editor/lib/spin3"
		},
		xes: {
			folder: "/opt/app/n3-editor/lib/xes"
		},
		pqn: {
			folder: "/opt/app/n3-editor/lib/pqn"
		}
	},

	link: {
		max_len: 50000,
		db: {
            // mysql://b4837d17c012f1:e023e78d@us-cdbr-east-06.cleardb.net/heroku_e750abd160bbcaf?reconnect=true
			port: '33060',
            host: "us-cdbr-east-06.cleardb.net",
            db: "heroku_e750abd160bbcaf",
            user: "b4837d17c012f1",
            pwd: "e023e78d"
		}
	},

	path: "/Users/wvw/git/n3/n3-editor-js" // ??
}
