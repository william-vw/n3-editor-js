const hostname = '127.0.0.1';
const port = 3000;

var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var tmp = require('./lib/tmp.js')
var eye = require('./lib/eye.js')

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static('ex_client'));

app.get('/', (request, response) => {
	console.log('GET /')

	var html = 
	`<html>
		<body>
			<h1>Welcome to Serve-Reason!</h1>
			<h3>Serving reason since 1st June 2020</h3>
		</body>
	</html>`

	response.writeHead(200, {'Content-Type': 'text/html'})
	response.end(html)
})

app.post('/', (request, response) => {
	console.log("POST /")	

	var data = request.body
	console.log("data:", data)

	tmp.save(data.formula, (file) => {
		// only deductive_closure & eye are currently supported
		switch (data.system) {
			case "eye":
				eye.exec(file, (ret) => {
					tmp.del(file)	
					response.send(ret)
				})
			break
			
			default:
				response.send({ error: `unknown system: ${data.system}` })
			break
		}
	})
})

app.listen(port)
console.log(`Listening at http://localhost:${port}`)

/*const http = require('http');
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});*/