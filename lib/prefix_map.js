exports.collapse = function(output, file) {
	// replace base-iri
	var baseIri = new RegExp("<file:///.*?" + file + "#(.*?)>", "g")
	output = output.replace(baseIri, (match, p, offset, string) => {
		return `<base>:${p}`
	})
	
	return output
}