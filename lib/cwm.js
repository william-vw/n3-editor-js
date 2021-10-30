var { exec } = require('child_process')
var prefix = require('./prefix_map.js')
var config = require('../config.js')

const pythonCmd = config.exec.pythonCmd
const cwmPath = config.exec.cwmPath 

exports.exec = function(task, file, callback) {
	var cmd = `${pythonCmd} ${cwmPath} --n3 ${file}`
	switch (task) {
		case 'derivations':
			cmd += ` --filter=${file}`;
			break;
		case 'deductive_closure':
			cmd += " --think";
			break;
	}
	console.log(cmd);

	exec(cmd, (err, stdout, stderr) => {
		// if (err) { throw err }
		
		var ret = null
		if (err) {
			// console.log("stderr", stderr)
			var error = null;
			
			var dl = stderr.lastIndexOf("swap.notation3.BadSyntax")
			if (dl == -1)
				dl = stderr.lastIndexOf("ValueError")
			
			if (dl != -1)
				error = stderr.substring(dl).trim()
			else
				error = stderr

			// console.log("error:", error)
			callback({ error: error })
			
		} else {
			// console.log("stdout", stdout)
			
			var dl = stdout.indexOf("\n", stdout.indexOf("Base was:")) + 1
			var dl2 = stdout.indexOf("#ENDS") - 1
			var output = stdout.substring(dl, dl2).trim()

			output = prefix.collapse(output, file)

			// console.log("output:", output)		  
			callback({ success: output })
		}
	})
}
