var fs = require('fs/promises')

async function exists (path) {  
	try {
		await fs.access(path)
	  	return true
	} catch {
	  	return false
	}
  }

exports.save = async function(contents, file) {
	file = exports.name(file)

	if (!await exists("tmp"))
		await fs.mkdir("tmp")

	await fs.writeFile(file, contents)
	return file
}

exports.name = async function(file) {
	if (file === undefined)
		file = "tmp/tmp_" + new Date().valueOf() + ".n3"

	// console.log("file?", file)
	if (await exists(file)) {
		// TODO
		file = "tmp/tmp_" + new Date().valueOf() + "_2.n3"
		return await exports.name(file)

	} else
		return file
}

exports.del = async function(file) {
	await fs.unlink(file)
}
