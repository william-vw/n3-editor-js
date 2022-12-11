config = {
	http: {
		hostname: 'https://n3-editor.herokuapp.com',
	    port: ((typeof process) !== undefined ? process.env.PORT : undefined)
	},

	reasoners: {
		eye: {
			exec: "/app/opt/eye/bin/eye", 
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

if (typeof exports === 'object' && typeof module === 'object')
	module.exports = {
		config
	};