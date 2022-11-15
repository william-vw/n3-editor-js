const { config } = require('../config.js')
var exec = require('child_process').exec, child;

exports.checkBuiltinInput = function(defFile, testFile, ctu) {
	var cmd = `java -jar ${config.path}/lib/checkBuiltinInput.jar -definitions ${defFile} -test ${testFile}`
	//var cmd = "java -jar D:/git/n3dev/n3-editor-js/lib/checkBuiltinInput.jar  -definitions D:/git/n3dev/jena-core/src/main/resources/etc/builtins/builtins.n3 -test D:/git/n3dev/jena-core/testing/N3/builtin_input0.n3"
	// console.log(cmd)
	child = exec(cmd,
		function (error, stdout, stderr) {
			//console.log('error', error)
			//console.log('stdout', stdout)
			//console.log('stderr', stderr)
			
			if (error)
				ctu({ error: error + "" })
			else if (stderr)
				ctu({ error: stderr + "" })
			else {
				const out = JSON.parse(stdout)
				ctu({ success: out })
			}
	});
}
