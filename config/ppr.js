config = {
	http: {
		hostname: 'http://ppr.cs.dal.ca',
		port: 3002
	},

	tools: {
		eye: {
			exec: "/home/woensel/projects/n3-editor-js/opt/eye/bin/eye",
			folder: "/home/woensel/projects/n3-editor-js/lib/eye"
		},
		cwm: {
			// (use python2 for cwm)
			pythonCmd: "python",
			exec: "/opt/cwm-1.2.1/swap/cwm.py"
		},
		jen3: {
			exec: "/home/woensel/projects/n3-editor-js/lib/jen3/jen3.jar",
			codegen: "/home/woensel/projects/n3-editor-js/lib/jen3/codegen.jar",
			folder: "/home/woensel/projects/n3-editor-js/lib/jen3"
		},
		triplify: {
			exec: "/home/woensel/projects/n3-editor-js/lib/triplify/sparql2spin.jar"
		}
	},

	link: {
		max_len: 50000,
		db: {
			supported: true,
			uses_sqlite3: false,
			port: '33060',
			host: 'localhost',
			db: "n3_links",
			user: 'root', 
			pwd: 'changeit'
		}
	},

	path: "/home/woensel/projects/n3-editor-js"
}