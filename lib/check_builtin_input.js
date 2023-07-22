const { config } = require('../config/main.js')
let { promiseExec } = require('./cmd_util.js')

exports.checkBuiltinInput = async function(defFile, testFile) {
	const  cmd = `java -jar ${config.path}/lib/checkBuiltinInput.jar -definitions ${defFile} -test ${testFile}`
	//var cmd = "java -jar D:/git/n3dev/n3-editor-js/lib/checkBuiltinInput.jar  -definitions D:/git/n3dev/jena-core/src/main/resources/etc/builtins/builtins.n3 -test D:/git/n3dev/jena-core/testing/N3/builtin_input0.n3"
	// console.log(cmd)
	
	const [ stdout, stderr ] = await promiseExec(cmd)
	//console.log('error', error)
	//console.log('stdout', stdout)
	//console.log('stderr', stderr)
	
	if (stderr)
		throw stderr
	else {
		const out = JSON.parse(stdout)
		return out
	}
}