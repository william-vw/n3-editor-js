var { exec } = require('child_process')
var prefix = require('./prefix_map.js')

const cwmPath = config.cwmPath 

exports.exec = function(file, callback) {
	var cmd = `python ${cwmPath} --n3 ${file} --think`
	
	exec(cmd, (err, stdout, stderr) => {
		// if (err) { throw err }
		
		var ret = null
		if (err) {
			// console.log("stderr", stderr)
			var dl = stderr.lastIndexOf("swap.notation3.BadSyntax")
			var error = stderr.substring(dl).trim()

			console.log("error:", error)
			callback({ error: error })
			
		} else {
			// console.log("stdout", stdout)
			var dl = stdout.indexOf("\n", stdout.indexOf("Base was:")) + 1
			var dl2 = stdout.indexOf("#ENDS") - 1
			var output = stdout.substring(dl, dl2).trim()

			// output = prefix.collapse(output, file)

			// console.log("output:", output)		  
			callback({ success: output })
		}
	})
}
