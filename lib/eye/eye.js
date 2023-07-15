let { promiseExec } = require('../cmd_util.js')
var prefix = require('../prefix_map.js')
var { config } = require('../../config.js')

const eyeExec = config.tools.eye.exec
const eyeFolder = config.tools.eye.folder

exports.exec = async function (options, file) {
	let cmd = null
	switch (options.task) {

		case 'explain':
			cmd = `${eyeFolder}/explain/explain.sh -f ${eyeFolder} -e ${eyeExec} -r ${file} ${ (options.type == 'xexplain' ? "-x" : "") }`
			break

		default:
			cmd = `${eyeExec} ${file} --quantify http://eyereasoner.github.io/.well-known/genid/ --nope`
			switch (options.task) {
				case 'derivations':
					cmd += " --pass-only-new"
					break
				case 'deductive_closure':
					cmd += " --pass-all"
					break
			}
			break
	}

	// console.log("cmd", cmd);
	const [ stdout, stderr ] = await promiseExec(cmd)

	if (stderr) {
		if (stderr.includes("**")) {
			const dl = stderr.lastIndexOf("**") + 2
			error = stderr.substring(dl).trim()

			throw error
		}
	}

	// console.log("stdout", stdout)
	let output = stdout
	switch (options.task) {
		case 'explain':
			break

		default:
			output = clean(output, file)
			break
	}

	// console.log("output:", output)		  
	return output
}

function clean(output, file) {
	var dl = output.indexOf("\n", output.indexOf("# eye"))
	var dl2 = output.lastIndexOf("\n", output.indexOf("# ENDS") - 2)
	output = output.substring(dl, dl2).trim()

	return prefix.collapse(output, file)
}

exports.clean = clean