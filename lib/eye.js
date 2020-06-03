var { exec } = require('child_process')
var prefix = require('./prefix_map.js')

const eyePath = config.eyePath 

exports.exec = function(file, callback) {
	var cmd = `${eyePath} --n3 ${file} --pass-all --nope`
	
	exec(cmd, (err, stdout, stderr) => {
		// if (err) { throw err }

		var ret = null
		if (err) {
			// console.log("stderr", stderr)
			var dl = stderr.lastIndexOf("**") + 2
			var error = stderr.substring(dl).trim()

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
