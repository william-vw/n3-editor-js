// heroku
if (typeof process === 'object') {
	let name;
	console.log("home?? " + process.env.HOME);
	if (process.env.HOME && process.env.HOME == '/app') {
		name = "heroku.js";
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
	} else if (hostname == 'n3-editor.onrender.com') {
		name = "render.js"
	} else
		console.error("where the poop are we??")

	const location = `/n3/config/${name}`;
	$.ajax({ async: false, url: location, dataType: 'script' })
		.done(function (script, textStatus) { })
		.fail(function (jqxhr, settings, exception) {
			console.error(`Error getting config at "${location}": ${exception}`);
		});
}