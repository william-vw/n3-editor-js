var { exec } = require('child_process')
var prefix = require('./prefix_map.js')
var config = require('../config.js')

const jen3Exec = config.reasoners.jen3.exec

exports.exec = function(task, file, callback) {
	// (for 'explain', file parameter = proof)
	var cmd = `java -jar ${jen3Exec} -n3 ${file}`;
	switch (task) {
		case 'derivations':
			cmd += " -inferences";
			break;

		case 'deductive_closure':
			cmd += " -conclusion";
			break;

		case 'explain':
			cmd += " -explain";
			break;
	}
	
	exec(cmd, (err, stdout, stderr) => {
		if (err) {
			callback({ error: stderr })

		} else {
			var output = prefix.collapse(stdout, file)
			// console.log("output:", output)

			callback({ success: output })
		}
	})
}
