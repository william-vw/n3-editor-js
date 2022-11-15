config = {
	http: {
		hostname: 'http://127.0.0.1',
		port: 3002
	},

	reasoners: {
		eye: {
			exec: "/Users/wvw/git/n3/n3-editor-js/opt/eye/bin/eye",
			folder: "/Users/wvw/git/n3/n3-editor-js/lib/eye"
		},
		cwm: {
			// (use python2 for cwm)
			pythonCmd: "python",
			exec: "/Users/wvw/cwm-1.2.1/swap/cwm.py"
		},
		jen3: {
			exec: "/Users/wvw/git/n3/n3-editor-js/lib/jen3/jen3.jar",
			folder: "/Users/wvw/git/n3/n3-editor-js/lib/jen3"
		}
	},

	db: {
		port: '33060',
		host: 'localhost',
		db: "n3_links",
		user: 'root',
		pwd: ''
	},

	path: "/Users/wvw/git/n3/n3-editor-js"
}

if (typeof exports === 'object' && typeof module === 'object')
	module.exports = {
		config
	};