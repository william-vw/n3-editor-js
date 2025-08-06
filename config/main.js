if (typeof process === 'object') {
	let name;
	console.log("where is home?", process.env.HOME)
	if (process.env.HOME) {
		if (process.env.HOME == '/app')
			name = "heroku.js";
		else if (process.env.HOME == '/home/nodeapp')
			name = "gcloud.js"
		else {
			name = "local.js"
			console.log("assuming local")
		}
	} else {
		name = "local.js";
	}

	const location = `./${name}`;
	require(location);

	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = {
			config
		};

} else {	
	let hostname = window.location.hostname
	let name;
	if (hostname === 'localhost' || hostname === '127.0.0.1') {
		name = "local.js";
	} else if (hostname == 'n3-editor.herokuapp.com') {
		name = "heroku.js";
	} else
		name = "gcloud.js";

	const location = `/n3/config/${name}`;
	$.ajax({ async: false, url: location, dataType: 'script' })
		.done(function (script, textStatus) { })
		.fail(function (jqxhr, settings, exception) {
			console.error(`Error getting config at "${location}": ${exception}`);
		});
}
