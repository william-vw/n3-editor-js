config = {
	http: {
		hostname: 'https://n3-editor.herokuapp.com',
	    port: ((typeof process) != "undefined" ? process.env.PORT : undefined)
	},

	out: "/app/out",

	tools: {
		eye: {
			// exec: "/app/opt/eye/bin/eye", 
			exec: "swipl -x /app/opt/eye/lib/eye.pvm -- ",
		    folder: "/app/lib/eye"
		},
		cwm: {
			// (use python2 for cwm)
			pythonCmd: "", // (python2 is not available)
            exec: ""
		},
		jen3: {
            exec: "/app/lib/jen3/jen3.jar",
            codegen: "/app/lib/jen3/codegen.jar",
		    folder: "/app/lib/jen3"
		},
		jena: {
			exec: "/app/lib/jena/sparql.jar",
		},
		triplify: {
			exec: "/app/lib/triplify/sparql2spin.jar"
		},
		spin3: {
			folder: "/app/lib/spin3"
		},
		xes: {
			folder: "/app/lib/xes"
		},
		pqn: {
			folder: "/app/lib/pqn"
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