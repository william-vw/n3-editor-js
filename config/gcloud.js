config = {  
	http: {
		hostname: 'http://editor.notation3.org',
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
		db : { uses_sqlite3: true }	
	}
}
