let { promiseExec } = require('../cmd_util.js')
var { config } = require('../../config/main.js')

const jarFile = config.tools.triplify.exec;

exports.exec = async function(options, file) {
    const cmd = `java -jar ${jarFile} -sparql ${file}`;
    console.log(cmd);

	let [ stdout, stderr ] = await promiseExec(cmd)
	
	if (stderr != "") {
		if (stderr.trim().startsWith("Picked up JAVA_TOOL_OPTIONS"))
			stderr = stderr.substring(stderr.indexOf("\n") + 1).trim();

		// console.log("stderr? ", stderr);
		if (stderr) {
			throw stderr
		}
	}

	return stdout
}