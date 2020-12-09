n3.link = function(service, url, onSuccess, onError) {
	$.post(service, {
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
