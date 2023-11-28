config = {
	http: {
		hostname: 'http://127.0.0.1',
		port: 3002,
		use_https: false
	},

	out: "/Users/wvw/git/n3/n3-editor-js/out",

	tools: {
		eye: {
			exec: "eye",
			folder: "/Users/wvw/git/n3/n3-editor-js/lib/eye"
		},
		cwm: {
			// (use python2 for cwm)
			pythonCmd: "python",
			exec: "/Users/wvw/cwm-1.2.1/swap/cwm.py"
		},
		jen3: {
			exec: "/Users/wvw/git/n3/n3-editor-js/lib/jen3/jen3.jar",
			codegen: "/Users/wvw/git/n3/n3-editor-js/lib/jen3/codegen.jar",
			folder: "/Users/wvw/git/n3/n3-editor-js/lib/jen3"
		},
		jena: {
			exec: "/Users/wvw/git/n3/n3-editor-js/lib/jena/sparql.jar",
		},
		triplify: {
			exec: "/Users/wvw/git/n3/n3-editor-js/lib/triplify/sparql2spin.jar"
		},
		spin3: {
			folder: "/Users/wvw/git/n3/n3-editor-js/lib/spin3"
		},
		xes: {
			folder: "/Users/wvw/git/n3/n3-editor-js/lib/xes"
		},
		pqn: {
			folder: "/Users/wvw/git/n3/n3-editor-js/lib/pqn"
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
			// pwd: '' // big macbook
			pwd: 'changeit' // small macbook
		}
	},

	path: "/Users/wvw/git/n3/n3-editor-js"
}