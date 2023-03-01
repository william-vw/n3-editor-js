var { exec } = require('child_process')
var prefix = require('../prefix_map.js')
var { config } = require('../../config.js')

const jenaExec = config.tools.jena.exec;

exports.exec = function(options, data, query, callback) {
	var cmd = `java -jar ${jenaExec} -n3 ${data} -query ${query}`;
	
	console.log(cmd);
	exec(cmd, (err, stdout, stderr) => {
		if (stderr != "") {
			if (stderr.trim().startsWith("Picked up JAVA_TOOL_OPTIONS"))
				stderr = stderr.substring(stderr.indexOf("\n") + 1).trim();

			console.log("stderr? ", stderr);
			if (stderr) {
				callback({ error: stderr })
				return;
			}
		}

		var output = prefix.collapse(stdout, data)
		callback({ success: output })
	})
}
