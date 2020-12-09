const mysqlx = require('@mysql/xdevapi');
const randomstring = require("randomstring");

async function generateLink(url) {
	try {
		const session = await getDbConn()
		const table = session.getSchema('n3_links').getTable('link')
		
		const id = await generateUniqueId(table)
		console.log("unique id?", id)
		
		await insertLink(id, url, table)
		
	} catch(error) {
		console.log(error.info.msg)
	}
}

function getDbConn() {
	return mysqlx.getSession({
		user: 'root',
		password: '12345',
		host: 'localhost',
		port: '33060'
	})
}

async function generateUniqueId(table) {
	const id = ranString()
	console.log("id?", id)

	const exists = await checkId(id, table)
	console.log("exists?", exists)
	if (exists)
		return generateUniqueId(table)
	else
		return id;
}

function checkId(id, table) {
	return new Promise((resFn, rejFn) => 
		table
		.select([ 'url' ])
		.where("id = :id")
		.bind('id', id)
		.execute()
		.then((results) => resFn(results.fetchOne() !== undefined))
		.catch((error) => rejFn(error))
	)
}

function insertLink(id, url, table) {
	return new Promise((resFn, rejFn) => 
		table
		.insert('id', 'url')
		.values(id, url)
		.execute()
		.then(resFn)
		.catch(rejFn)
	)
}

var cnt = 0
function ranString() {
	if (cnt++ == 0)
		return "123"
	else
		return randomstring.generate(8)
}

generateLink("http://ppr.cs.dal.ca:3002/n3/editor?formula=somelongformula")