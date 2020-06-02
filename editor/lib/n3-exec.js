n3.exec = function(url, options, onSuccess, onError) {
	$.post(url, options, (output, status) => {
			console.log(status, output)
			
			if (output.success !== undefined)
				onSuccess(output.success)
			else
				onError(output.error)
		})
}