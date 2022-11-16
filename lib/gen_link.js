const mysqlx = require('@mysql/xdevapi');
const randomstring = require("randomstring");
const dateFormat = require('dateformat');
const { config } = require('../config.js')

exports.generateLink = async function(formula, format) {	
	const session = await getDbConn()
	const table = session.getSchema('n3_links').getTable('link')
	
	const id = await generateUniqueId(table)
	// console.log("unique id?", id)
	
	await insertId(id, formula, format, table)
	return id;
}

exports.resolveLink = async function(id) {
	const session = await getDbConn()
	const table = session.getSchema('n3_links').getTable('link')
	
	// console.log("retrieving:", id)
	
	results = await getLink(id, table)
	const result = results.fetchOne()
	if (!result)
		throw "link " + id + " does not exist"
	else {
		var field = result[0]
		if (field.startsWith("http")) {
			// url-encode hash symbol so we can work with url search params	
			field = field.replace(/#/g, "%23");
			var params = new URLSearchParams(field.substring(field.indexOf("?")))

			return {
				formula: params.get("formula"),
				format: params.get("format")
			}

		} else {
			let idx = field.indexOf("-")
			let format = field.substring(0, idx)
			let formula = field.substring(idx + 1)
			
			return {
				formula: formula,
				format: format
			}
		}
	}
}

function getDbConn() {
	let dbc = config.link.db
	return mysqlx.getSession({
		user: dbc.user,
		password: dbc.pwd,
		host: dbc.host,
		port: dbc.port
	})
}

async function generateUniqueId(table) {
	const id = ranString()
	// console.log("id?", id)

	const exists = await checkId(id, table)
	// console.log("exists?", exists)
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

function insertId(id, formula, format, table) {
	const time = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss");
	return table
	.insert('id', 'url', 'time')
	.values(id, format + "-" + formula, time)
	.execute()
}

function getLink(id, table) {
	return table
	.select([ 'url' ])
	.where("id = :id")
	.bind('id', id)
	.execute()
}

function ranString() {
	return randomstring.generate(8)
}
