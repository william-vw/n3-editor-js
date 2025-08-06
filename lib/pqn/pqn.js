// const fs = require('fs/promises');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

var { config } = require('../../config/main.js')

const eyeExec = config.tools.eye.exec
const pqnFolder = config.tools.pqn.folder

exports.exec = async function (options, query, log) {
	let cmd = `${eyeExec} ${pqnFolder}/pqn.n3 --turtle ${log} --query ${query} --nope`
	console.log("cmd", cmd);
	const { stdout, stderr } = await exec(cmd)

	if (stderr) {
		if (stderr.includes("**")) {
			const dl = stderr.lastIndexOf("**") + 2
			error = stderr.substring(dl).trim()

			throw error
		}
	}
	
	// - using eyejs
	// let stdout = ""
    // const Module = await SwiplEye({ print: (str) => { stdout += str + "\n"; }, arguments: ['-q'] });

	// const pqnData = await fs.readFile(`${pqnFolder}/pqn.n3`, { encoding: 'utf8' });
	// const logData = await fs.readFile(log, { encoding: 'utf8' });
	// const queryData = await fs.readFile(query, { encoding: 'utf8' });

	// Module.FS.writeFile('pqn.n3', pqnData);
	// Module.FS.writeFile('log.n3', logData);
	// Module.FS.writeFile('query.n3', queryData);

	// queryOnce(Module, 'main', ["./pqn.n3", '--turtle', "./log.n3", '--query', "./query.n3", '--nope']);

	console.log("pqn's stdout:", stdout)
	let output = stdout
    output = clean(output, query)
	  
	return { data: output }}

function clean(output, file) {
	var dl = output.indexOf("\n", output.indexOf("# eye"))
	var dl2 = output.lastIndexOf("\n", output.indexOf("# ENDS") - 2)
	output = output.substring(dl, dl2).trim()

	// return prefix.collapse(output, file)
	return output
}

exports.clean = clean