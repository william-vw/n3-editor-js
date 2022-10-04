const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const config = require('./config.js')
const tmp = require('./lib/tmp.js')
const eye = require('./lib/eye/eye.js')
const cwm = require('./lib/cwm/cwm.js')
const jen3 = require('./lib/jen3/jen3.js')
const { generateLink, retrieveLink } = require('./lib/gen_link.js')
const { checkBuiltinInput } = require('./lib/check_builtin_input.js')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/n3/editor', express.static(path.join(__dirname, 'editor')));

app.get('/n3/editor/s*', (request, response) => {
	console.log("link:", request.url)
	retrieveLink(request.url)
		.then((url) => {
			console.log("url: " + url)
			// response.send({ success: url })
			response.redirect(url)
		})
		.catch((error) => {
			console.log(error)
			response.send("Error: " + error)
		})
})

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
	// console.log("data:", data)
	console.log("task:", data.task, ", ", "system:", data.system);

	function ctu(ret) {
		// console.log("ret:", ret)
		if (ret.error) {
			console.log("error", ret.error)
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

		case 'generate_link':
			doGenerateLink(data, ctu)
			break

		case 'check_builtin_input':
			doCheckBuiltinInput(data, ctu)
			break

		default:
			ctu({ error: 'unknown task: ' + data.task })
	}
})

app.listen(config.http.port)
console.log(`Listening at http://${config.http.hostname}:${config.http.port}`)

function doReasoning(data, ctu) {
	tmp.save(data.formula, (file) => {

		function end(ret) {
			tmp.del(file)
			ctu(ret)
		}

		var reasoner = null;
		switch (data.system) {
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
				end({ error: `unsupported system: "${data.system}"` })
				break
		}
		if (reasoner)
			reasoner.exec(data.task, file, end)
	})
}

function doExplaining(data, ctu) {
	tmp.save(data.formula, (dataFile) => {

		// use eye to generate proof given input n3 file
		eye.exec('proof', dataFile, (proofObject) => {
			tmp.del(dataFile)
			
			if (proofObject.error) {
				ctu(proofObject)
				return
			}

			const proof = proofObject.success;
			tmp.save(proof, (proofFile) => {
				
				// use eye or jen3 to explain proof
				var reasoner = null;
				switch (data.system) {
					case "eye":
						reasoner = eye
						break

					case "jen3":
						reasoner = jen3
						break

					default:
						end({ error: `unsupported system: "${data.system}"` })
						break
				}
				if (reasoner)
					reasoner.exec('explain', proofFile, (explanation) => {
						tmp.del(proofFile)
						ctu(explanation)
					})
			})
		})
	})
}

function doGenerateLink(data, ctu) {
	generateLink(data.url)
		.then((link) => { console.log("generated link: " + link); ctu({ success: link }) })
		.catch((error) => { ctu({ error: error }) })
}

function doCheckBuiltinInput(data, ctu) {
	tmp.save(data.definitions, (defFile) => {
		tmp.save(data.test, (testFile) => {

			function end(ret) {
				tmp.del(defFile)
				tmp.del(testFile)
				ctu(ret)
			}

			checkBuiltinInput(defFile, testFile, end)
		})
	})
}
