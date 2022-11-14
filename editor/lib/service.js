// const serviceUrl = "http://ppr.cs.dal.ca:3002/n3" // ppr
const serviceUrl = "http://127.0.0.1:3002/n3" // local
// const serviceUrl = "https://n3-editor.herokuapp.com/n3"

import { eyebrow } from "../../lib/eyebrow/eyebrow.js";

function exec(options, onSuccess, onError) {
	switch (options.system) {
		case 'eyebrow':
			eyebrow(options.task, options.formula, (output) => {
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
