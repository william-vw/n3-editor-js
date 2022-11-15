const mysqlx = require('@mysql/xdevapi');
const randomstring = require("randomstring");
const dateFormat = require('dateformat');
const { config } = require('../config.js')

exports.generateLink = async function(url) {	
	const session = await getDbConn()
	const table = session.getSchema('n3_links').getTable('link')
	
	const id = await generateUniqueId(table)
	// console.log("unique id?", id)
	
	await insertId(id, url, table)
	return genLink(id, url)
}

exports.retrieveLink = async function(url) {
	const session = await getDbConn()
	const table = session.getSchema('n3_links').getTable('link')
	
	const id = getId(url)
	// console.log("retrieving:", id)
	
	results = await getLink(id, table)
	const result = results.fetchOne()
	if (!result)
		throw "link " + id + " does not exist"
	else
		return result[0]
}

function genLink(id, url) {
	const path = url.substring(0, url.lastIndexOf("?"))
	return path + "s/" + id
}

function getId(url) {
	return url.substring(url.indexOf("/s/") + 3)
}

function getDbConn() {
	return mysqlx.getSession({
		user: config.db.user,
		password: config.db.pwd,
		host: 'localhost',
		port: '33060'
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

function insertId(id, url, table) {
	const time = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss");
	return table
	.insert('id', 'url', 'time')
	.values(id, url, time)
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
