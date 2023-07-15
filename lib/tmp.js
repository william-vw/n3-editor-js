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
	if (file === undefined)
		file = "tmp/tmp_" + new Date().valueOf() + ".n3"

	if (!await exists("tmp"))
		await fs.mkdir("tmp")

	// console.log("file?", file)
	if (await exists(file)) {
		file = "tmp/tmp_" + new Date().valueOf() + "_2.n3"
		return await exports.save(contents, file)

	} else {
		await fs.writeFile(file, contents)
		return file
	}
}

exports.del = async function(file) {
	await fs.unlink(file)
}
