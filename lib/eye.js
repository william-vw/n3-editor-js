var { exec } = require('child_process')
var prefix = require('./prefix_map.js')
var config = require('../config.js')

const eyePath = config.exec.eyePath

exports.exec = function(file, callback) {
	var cmd = `${eyePath} --n3 ${file} --pass-all --nope`
	
	exec(cmd, (err, stdout, stderr) => {
		// if (err) { throw err }

		var ret = null
		if (err) {
			var error = stderr
			if (stderr.includes("**")) {
				var dl = stderr.lastIndexOf("**") + 2
				error = stderr.substring(dl).trim()
			}

			console.log("error:", error)
			callback({ error: error })

		} else {
			// console.log("stdout", stdout)
			var dl = stdout.indexOf("\n", stdout.indexOf("#eye"))
			var dl2 = stdout.lastIndexOf("\n", stdout.indexOf("#ENDS") - 2)
			var output = stdout.substring(dl, dl2).trim()

			output = prefix.collapse(output, file)

			// console.log("output:", output)		  
			callback({ success: output })
		}
	})
}
