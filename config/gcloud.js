config = {  
	http: {
		hostname: 'https://editor.notation3.org',
		port: 8080,
		use_https: true 
	},

	out: "/opt/app/n3-editor-js/out",

	tools: {
		eye: {
			exec: "eye", 
			exec: "/opt/eye/bin/eye", 
			// exec: "swipl -x /opt/app/n3-editor-js/opt/eye/lib/eye.pvm -- ",
		    folder: "/opt/app/n3-editor-js/lib/eye"
		},
		cwm: {
			// (use python2 for cwm)
			pythonCmd: "", // (python2 is not available)
            exec: ""
		},
		jen3: {
            exec: "/opt/app/n3-editor-js/lib/jen3/jen3.jar",
            codegen: "/opt/app/n3-editor-js/lib/jen3/codegen.jar",
		    folder: "/opt/app/n3-editor-js/lib/jen3"
		},
		jena: {
			exec: "/opt/app/n3-editor-js/lib/jena/sparql.jar",
		},
		triplify: {
			exec: "/opt/app/n3-editor-js/lib/triplify/sparql2spin.jar"
		},
		spin3: {
			folder: "/opt/app/n3-editor-js/lib/spin3"
		},
		xes: {
			folder: "/opt/app/n3-editor-js/lib/xes"
		},
		pqn: {
			folder: "/opt/app/n3-editor-js/lib/pqn"
		},
		fun3: {
			folder: "/opt/app/n3-editor-js/lib/fun3"
		}
	},

	link: {
		max_len: 50000,
		db : { supported: true, uses_sqlite3: true }	
	}
}
