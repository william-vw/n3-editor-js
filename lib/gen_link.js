const mysql = require("mysql")
const randomstring = require("randomstring")
const dateFormat = require('dateformat')
const { config } = require('../config.js')

exports.generateLink = async function (formula, format) {
	const conn = await getDbConn()

	const id = await generateUniqueId(conn)
	// console.log("unique id?", id)

	await insertId(id, formula, format, conn)
	return id
}

exports.resolveLink = async function (url) {
	const conn = await getDbConn()

	const id = getId(url)
	// console.log("retrieving:", id)

	let results = await getLink(id, conn)
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
	return mysql.createPool({
		host: config.link.db.host,
		user: config.link.db.user,
		password: config.link.db.pwd,
		database: config.link.db.db
	})
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

function checkId(id, conn) {
	return new Promise((resFn, rejFn) =>
		conn.query("SELECT url FROM link WHERE id = ?", [id],
			(error, results) => {
				if (error)
					rejFn(error)
				else
					resFn(results.length > 0)
			})
	)
}

function insertId(id, formula, format, conn) {
	return new Promise((resFn, rejFn) => {
		const time = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss")
		conn.query(
			"INSERT INTO link (id, url, time) VALUES (?, ?, ?)",
			[id, format + "-" + formula, time], (error, results) => {
				if (error)
						rejFn(error)
					else
						resFn(results)
			})
	});
}

function getLink(id, conn) {
	return new Promise((resFn, rejFn) =>
		conn.query("SELECT url FROM link WHERE id = ?", [id], 
			(error, results) => {
				if (error)
					rejFn(error)
				else
					resFn(results)
		})
		// return conn.query(`SELECT url FROM link WHERE id = '${id}'`)
	);
}

function ranString() {
	return randomstring.generate(8)
}
