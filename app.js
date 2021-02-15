const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

const config = require('./config.js')
const tmp = require('./lib/tmp.js')
const eye = require('./lib/eye.js')
const cwm = require('./lib/cwm.js')
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

	response.writeHead(200, {'Content-Type': 'text/html'})
	response.end(html)
})

app.post('/n3', (request, response) => {
	console.log("POST /")	

	const data = request.body
	// console.log("data:", data)
	
	function ctu(ret) {
		// console.log("ret:", ret)
		if (ret.error) {
			console.log(ret.error)
		}
		response.send(ret)
	}
	
	switch (data.task) {
				
		case 'deductive_closure':
			doDeductiveClosure(data, ctu)
			break

		case 'generate_link':
			doGenerateLink(data, ctu)
			break
			
		case 'check_builtin_input':
			doCheckBuiltinInput(data, ctu)
			break
			
		default:
			ctu({ error : 'unknown task: ' + data.task })
	}
})

app.listen(config.http.port)
console.log(`Listening at http://${config.http.hostname}:${config.http.port}`)

function doDeductiveClosure(data, ctu) {	
	tmp.save(data.formula, (file) => {
		
		function end(ret) {
			tmp.del(file)
			ctu(ret)
		}		
		
		switch (data.system) {
			case "eye":
				eye.exec(file, end)
			break
			
			case "cwm":
				cwm.exec(file, end)
			break
			
			default:
				end({ error: `unknown system: "${data.system}"` })
			break
		}
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