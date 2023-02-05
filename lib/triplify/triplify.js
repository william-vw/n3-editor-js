var { exec } = require('child_process')
var { config } = require('../../config.js')

const jarFile = config.tools.triplify.exec;

exports.exec = function(options, file, callback) {
    var cmd = `java -jar ${jarFile} -sparql ${file}`;

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

		callback({ success: stdout })
	})
}