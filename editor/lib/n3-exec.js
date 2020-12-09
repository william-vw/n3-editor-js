n3.exec = function(service, options, onSuccess, onError) {
	$.post(service, options, (output, status) => {
		// console.log(status, output)
		
		if (output.success !== undefined)
			onSuccess(output.success)
		else
			onError(output.error)
	})
}
