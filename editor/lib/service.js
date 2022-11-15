import { eyebrow } from "../../lib/eyebrow/eyebrow.js";

const serviceUrl = `${config.http.hostname}:${config.http.port}/n3`;

function exec(options, onSuccess, onError) {
	switch (options.system) {
		case 'eyebrow':
			eyebrow(options, options.formula, (output) => {
				if (output.success)
					onSuccess(output.success);
				else
					onError(output.error);
			});
			break;

		default:
			$.post(serviceUrl, options, (output, status) => {
				// console.log(status, output)

				switch (status) {

					case 'success':
						if (output.success !== undefined)
							onSuccess(output.success)
						else
							onError(output.error)
						break

					default:
						onError("Error reaching N3 service.")
						break
				}
			}).fail((response) => {
				onError("Error reaching N3 service.")
			})
			break;
	}
}

function link(url, onSuccess, onError) {
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

window.service = { exec: exec, link: link }
