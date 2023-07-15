let { promiseExec } = require('../cmd_util.js')
var prefix = require('../prefix_map.js')
var { config } = require('../../config.js')

const jen3Exec = config.tools.jen3.exec;
const jen3Folder = config.tools.jen3.folder;
const jen3Codegen = config.tools.jen3.codegen;

exports.exec = async function(options, file) {
	let cmdOptions, jarFile;
	switch (options.task) {
		case 'derivations':
			cmdOptions = "-inferences";
			jarFile = jen3Exec;
			break;

		case 'deductive_closure':
			cmdOptions = "-conclusion";
			jarFile = jen3Exec;
			break;

		case 'explain':
			// (for 'explain', file parameter is the proof)
			cmdOptions = `-explain -folder ${jen3Folder}`;
			jarFile = jen3Exec;
			break;

		case 'imperate':
			cmdOptions = `-language ${options.language}`;
			jarFile = jen3Codegen;
			break;
	}

	const cmd = `java -jar ${jarFile} -n3 ${file} ${cmdOptions}`;
	// console.log(cmd);

	let [ stdout, stderr ] = await promiseExec(cmd)
	if (stderr != "") {
		if (stderr.trim().startsWith("Picked up JAVA_TOOL_OPTIONS"))
			stderr = stderr.substring(stderr.indexOf("\n") + 1).trim();

		// console.log("stderr? ", stderr);
		if (stderr)
			throw stderr
	}

	const output = prefix.collapse(stdout, file)
	return output
}
