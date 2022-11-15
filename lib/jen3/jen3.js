var { exec } = require('child_process')
var prefix = require('../prefix_map.js')
var { config } = require('../../config.js')

const jen3Exec = config.reasoners.jen3.exec
const jen3Folder = config.reasoners.jen3.folder;

exports.exec = function(options, file, callback) {
	// (for 'explain', file parameter = proof)
	var cmd = `java -jar ${jen3Exec} -n3 ${file}`;
	switch (options.task) {
		case 'derivations':
			cmd += " -inferences";
			break;

		case 'deductive_closure':
			cmd += " -conclusion";
			break;

		case 'explain':
			cmd += ` -explain -folder ${jen3Folder}`;
			break;
	}
	
	// console.log(cmd);
	exec(cmd, (err, stdout, stderr) => {
		if (stderr != "") {
			callback({ error: stderr })

		} else {
			var output = prefix.collapse(stdout, file)
			callback({ success: output })
		}
	})
}
