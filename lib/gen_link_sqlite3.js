const { AsyncDatabase } = require("promised-sqlite3")
const randomstring = require("randomstring")
const dateFormat = require('dateformat')
const { config } = require('../config/main.js')

exports.generateLink = async function (formula, format) {
	const conn = await getDbConn()

	const id = await generateUniqueId(conn)
	// console.log("unique id?", id)

	await insertId(id, formula, format, conn)
	return id 
}

exports.resolveLink = async function (id) {
	const conn = await getDbConn()

	let results = await getLink(id, conn)
	if (results.length == 0)
		throw "link " + id + " does not exist"
	else {
		const result = results[0]
		var field = result.url
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

async function getDbConn() {
	const conn = await AsyncDatabase.open('/home/william_vanwoensel/db/n3-editor.db')
	return conn
}

async function generateUniqueId(conn) {
	const id = ranString()
	// console.log("id?", id)

	const exists = await checkId(id, conn)
	// console.log("exists?", exists)
	if (exists)
		return generateUniqueId(conn)
	else
		return id
}

async function checkId(id, conn) {
	const rows = getLink(id, conn)
	return rows.length > 0
}

async function insertId(id, formula, format, conn) {
	const time = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss")
	await conn.run("INSERT INTO link (id, url, time) VALUES (?, ?, ?)", id, format + "-" + formula, time)
}

async function getLink(id, conn) {
	const rows = await conn.all("SELECT url FROM link WHERE id = ?", id) 
	return rows;
}

function ranString() {
	return randomstring.generate(8)
}
