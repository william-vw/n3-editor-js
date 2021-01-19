function exec(serviceUrl, options, onSuccess, onError) {
	$.post(serviceUrl, options, (output, status) => {
		// console.log(status, output)
		
		if (output.success !== undefined)
			onSuccess(output.success)
		else
			onError(output.error)
	})
}

function link(serviceUrl, url, onSuccess, onError) {
	$.post(serviceUrl, {
		task: 'generate_link',
		url: url
		
	}, (output, status) => {
		// console.log(status, output)
		
		if (output.success !== undefined)
			onSuccess(output.success)
		else
			onError(output.error)
	})
}

service = { exec: exec, link: link }