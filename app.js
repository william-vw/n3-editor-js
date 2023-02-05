const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const { config } = require('./config.js')
const tmp = require('./lib/tmp.js')
const eye = require('./lib/eye/eye.js')
const cwm = require('./lib/cwm/cwm.js')
const jen3 = require('./lib/jen3/jen3.js')
const triplify = require('./lib/triplify/triplify.js')
const { generateLink, resolveLink } = require('./lib/gen_link.js')
const { checkBuiltinInput } = require('./lib/check_builtin_input.js')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/n3/editor/s/*', (req, res) => {
	res.sendFile(path.join(__dirname, "editor/index.html")); 
});
app.use('/n3/sparql2n3*', (req, res) => {
	res.sendFile(path.join(__dirname, "editor/sparql2n3.html")); 
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
		(data.system? ", system: " + data.system : "")
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

		case 'generate_link':
			doGenerateLink(data, ctu)
			break

		case 'resolve_link':
			doResolveLink(data, ctu)
			break

		case 'check_builtin_input':
			doCheckBuiltinInput(data, ctu)
			break

		default:
			ctu({ error: 'unknown task: ' + data.task })
	}
})

app.listen(config.http.port)
console.log(`Listening at ${config.http.hostname}:${config.http.port}`)

function doReasoning(options, ctu) {
	tmp.save(options.formula, (file) => {

		function end(ret) {
			tmp.del(file)
			ctu(ret)
		}

		var reasoner = null;
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
				end({ error: `unsupported system: "${options.system}"` })
				break
		}
		if (reasoner)
			reasoner.exec(options, file, end)
	})
}

function doExplaining(options, ctu) {
	tmp.save(options.formula, (file) => {

		var reasoner = null;
		switch (options.system) {
			case "eye":
				reasoner = eye
				break

			default:
				end({ error: `unsupported system: "${options.system}"` })
				break
		}

		reasoner.exec(options, file, (explanation) => {
			tmp.del(file)

			ctu(explanation)
		})
	})
}

function doImperating(options, ctu) {
	tmp.save(options.formula, (file) => {

		var reasoner = jen3;
		reasoner.exec(options, file, (code) => {
			tmp.del(file)

			ctu(code)
		})
	})
}

function doTriplify(options, ctu) {
	tmp.save(options.formula, (file) => {

		triplify.exec(options, file, (code) => {
			tmp.del(file)

			ctu(code)
		})
	})
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

function doCheckBuiltinInput(options, ctu) {
	tmp.save(options.definitions, (defFile) => {
		tmp.save(options.test, (testFile) => {

			function end(ret) {
				tmp.del(defFile)
				tmp.del(testFile)
				ctu(ret)
			}

			checkBuiltinInput(defFile, testFile, end)
		})
	})
}
