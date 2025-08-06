let { promiseExec } = require('../cmd_util.js')
var prefix = require('../prefix_map.js')
var { config } = require('../../config/main.js')

const jenaExec = config.tools.jena.exec;

exports.exec = async function(options, data, query) {
	const cmd = `java -jar ${jenaExec} -n3 ${data} -query ${query}`;
	// console.log(cmd);

	let [ stderr, stdout ] = await promiseExec(cmd)
	if (stderr != "") {
		if (stderr.trim().startsWith("Picked up JAVA_TOOL_OPTIONS"))
			stderr = stderr.substring(stderr.indexOf("\n") + 1).trim();

		// console.log("stderr? ", stderr);
		if (stderr)
			throw stderr
	}

	const output = prefix.collapse(stdout, data)
	return output
}
