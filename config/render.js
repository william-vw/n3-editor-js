config = {
	http: {
		hostname: 'https://n3-editor.onrender.com',
	    port: ((typeof process) != "undefined" ? process.env.PORT : undefined)
	},

	out: "out",

	tools: {
		eye: {
			// exec: "eye", 
			// exec: "opt/eye/bin/eye", 
			exec: "swipl -x opt/eye/lib/eye.pvm -- ",
		    folder: "lib/eye"
		},
		cwm: {
			// (use python2 for cwm)
			pythonCmd: "", // (python2 is not available)
            exec: ""
		},
		jen3: {
            exec: "lib/jen3/jen3.jar",
            codegen: "lib/jen3/codegen.jar",
		    folder: "lib/jen3"
		},
		jena: {
			exec: "lib/jena/sparql.jar",
		},
		triplify: {
			exec: "lib/triplify/sparql2spin.jar"
		},
		spin3: {
			folder: "lib/spin3"
		},
		xes: {
			folder: "lib/xes"
		},
		pqn: {
			folder: "lib/pqn"
		}
	},

	link: {
		max_len: 50000,
		db: {
			supported: true,
			uses_sqlite3: false,
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