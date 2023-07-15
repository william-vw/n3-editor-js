const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const { config } = require('./config.js')
const tmp = require('./lib/tmp.js')
const eye = require('./lib/eye/eye.js')
// const cwm = require('./lib/cwm/cwm.js')
const jen3 = require('./lib/jen3/jen3.js')
const jena = require('./lib/jena/jena.js')
const triplify = require('./lib/triplify/triplify.js')
const spin3 = require('./lib/spin3/spin3.js')
const { generateLink, resolveLink } = require('./lib/gen_link.js')
const { checkBuiltinInput } = require('./lib/check_builtin_input.js')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/n3/editor/s/*', (req, res) => {
	res.sendFile(path.join(__dirname, "editor/index.html"));
});
app.use('/n3/editor/out', express.static("out"));
app.use('/n3/spin3*', (req, res) => {
	res.sendFile(path.join(__dirname, "editor/spin3.html"));
});
app.use('/n3/sparql*', (req, res) => {
	res.sendFile(path.join(__dirname, "editor/sparql.html"));
});
app.use('/n3/editor', express.static(path.join(__dirname, "editor")));
app.use('/n3/lib/eyebrow', express.static(path.join(__dirname, "lib/eyebrow")));
app.use('/n3/config.js', express.static(path.join(__dirname, 'config.js')));

app.get('/n3', (request, response) => {
	console.log('GET /')

	const html =
		`<html>
		<body>
			<h1>Welcome to the N3 server!</h1>
			<h3>Serving N3 since 2nd June 2020.</h3>
			config:
			<pre>${JSON.stringify(config, null, 4)}</pre>			</p>
		</body>
	</html>`

	response.writeHead(200, { 'Content-Type': 'text/html' })
	response.end(html)
})

app.post('/n3', (request, response) => {
	console.log("POST /")

	const data = request.body
	// console.log("data:", data);
	console.log(
		"task:", data.task,
		(data.subTask ? ", subTask: " + data.subTask : ""),
		(data.system ? ", system: " + data.system : "")
	);

	function ctu(ret) {
		// console.log("ret:", ret)
		if (ret.error) {
			console.error("error", ret.error)
		}
		response.send(ret)
	}

	switch (data.task) {

		case 'derivations':
		case 'deductive_closure':
			doReasoning(data, ctu)
			break

		case 'explain':
			doExplaining(data, ctu)
			break

		case 'imperate':
			doImperating(data, ctu)
			break

		case 'triplify':
			doTriplify(data, ctu)
			break

		case 'query':
			doQuery(data, ctu)
			break

		case 'spin3':
			doSpin3(data, ctu);
			break
	
		case 'check_builtin_input':
			doCheckBuiltinInput(data, ctu)
			break

		case 'generate_link':
			doGenerateLink(data, ctu)
			break

		case 'resolve_link':
			doResolveLink(data, ctu)
			break

		default:
			ctu({ error: 'unknown task: ' + data.task })
	}
})

app.listen(config.http.port)
console.log(`Listening at ${config.http.hostname}:${config.http.port}`)

async function doReasoning(options, ctu) {
	let file;
	try {
		file = await tmp.save(options.formula)

		let reasoner = null;
		switch (options.system) {
			case "eye":
				reasoner = eye
				break

			case "cwm":
				reasoner = cwm
				break

			case "jen3":
				reasoner = jen3
				break

			default:
				throw `unsupported system: "${options.system}"`
		}
		
		const output = await reasoner.exec(options, file)
		ctu({ success: output })

	} catch (e) {
		console.log(e)
		ctu({ error: e + "" })
	
	} finally {
		await tmp.del(file)
	}
}

async function doExplaining(options, ctu) {
	let file
	try {
		file = await tmp.save(options.formula)

		let reasoner = null;
		switch (options.system) {
			case "eye":
				reasoner = eye
				break

			default:
				throw `unsupported system: "${options.system}"`
		}

		const explanation = await reasoner.exec(options, file)
		ctu({ success: explanation })

	} catch(e) {
		console.log(e)
		ctu({ error: e })

	} finally {
		await tmp.del(file)
	}
}

async function doImperating(options, ctu) {
	let file
	try {
		file = await tmp.save(options.formula)
		
		const reasoner = jen3;
		const code = await reasoner.exec(options, file)
		ctu({ success: code })

	} catch (e) {
		console.log(e)
		ctu({ error: e + "" })

	} finally {
		await tmp.del(file)
	}
}

async function doTriplify(options, ctu) {
	let file
	try {
		file = tmp.save(options.formula)

		const code = await triplify.exec(options, file)
		ctu({ success: code })

	} catch (e) {
		console.log(e)
		ctu({ error: e + "" })

	} finally {
		await tmp.del(file)
	}
}

async function doQuery(options, ctu) {
	let data, query
	try {
		data = await tmp.save(options.data)
		query = await tmp.save(options.query)

		let engine = null;
		switch (options.system) {

			case "jena":
				engine = jena
				break

			default:
				throw `unsupported system: "${options.system}"`
		}
		
		const output = await engine.exec(options, data, query)
		ctu({ success: output })

	} catch (e) {
		console.log(e)
		ctu({ error: e + "" })

	} finally {
		await tmp.del(data)
		await tmp.del(query)
	}
}

async function doSpin3(options, ctu) {
	let data, query
	try {
		data = await tmp.save(options.data)
		query = await tmp.save(options.query)

		const output = await spin3.exec(options, data, query);
		ctu({ success: output })
		
	} catch (e) {
		console.log(e)
		ctu({ error: e + "" })

	} finally {
		await tmp.del(data)
		await tmp.del(query)
	}
}

function doGenerateLink(options, ctu) {
	generateLink(options.formula, options.format)
		.then((id) => { console.log("generated link:", id); ctu({ success: id }) })
		.catch((error) => { ctu({ error: error }) })
}

function doResolveLink(options, ctu) {
	resolveLink(options.id)
		.then((data) => {
			// console.log("resolved link:", data);
			ctu({ success: data })
		})
		.catch((error) => { ctu({ error: error }) })
}

async function doCheckBuiltinInput(options, ctu) {
	let defFile, testFile
	try {
		defFile = await tmp.save(options.definitions)
		testFile = await tmp.save(options.test)

		const output = await checkBuiltinInput(defFile, testFile)
		ctu({ success: output })

	} catch (e) {
		console.log(e)
		ctu({ error: e + "" })

	} finally {
		await tmp.del(defFile)
		await tmp.del(testFile)
	}
}
