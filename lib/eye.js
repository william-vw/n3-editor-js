var { exec } = require('child_process')
var prefix = require('./prefix_map.js')

const eyePath = "C:/eye/eye.cmd"

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
			var dl = stdout.indexOf("\r\n\r\n")
			var dl2 = stdout.indexOf("\r\n\r\n", dl + 2)
			var output = stdout.substring(dl, dl2).trim()

			output = prefix.collapse(output, file)

			// console.log("output:", output)		  
			callback({ success: output })
		}
	})
}