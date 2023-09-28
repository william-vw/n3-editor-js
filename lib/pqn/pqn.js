let { promiseExec } = require('../cmd_util.js')
var prefix = require('../prefix_map.js')
var { config } = require('../../config/main.js')

const eyeExec = config.tools.eye.exec
const pqnFolder = config.tools.pqn.folder

exports.exec = async function (options, query, log) {
    // "eye $pqn --turtle $log --query $query --nope"
	let cmd = `${eyeExec} ${pqnFolder}/pqn.n3 --turtle ${log} --query ${query} --nope`
    switch (options.task) {
        case 'derivations':
            cmd += " --pass-only-new"
            break
        case 'deductive_closure':
            cmd += " --pass-all"
            break
	}

	// console.log("cmd", cmd);
	const [ stdout, stderr ] = await promiseExec(cmd)

	if (stderr) {
		throw stderr
		// if (stderr.includes("**")) {
		// 	const dl = stderr.lastIndexOf("**") + 2
		// 	error = stderr.substring(dl).trim()

		// 	throw error
		// }
	}

	// console.log("stdout", stdout)
	let output = stdout
    // output = clean(output, query)
	  
	return { data: output }
}

function clean(output, file) {
	var dl = output.indexOf("\n", output.indexOf("# eye"))
	var dl2 = output.lastIndexOf("\n", output.indexOf("# ENDS") - 2)
	output = output.substring(dl, dl2).trim()

	return prefix.collapse(output, file)
}

exports.clean = clean