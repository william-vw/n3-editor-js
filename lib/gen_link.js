const mysql = require("mysql")
const randomstring = require("randomstring")
const dateFormat = require('dateformat')
const config = require('../config.js')

exports.generateLink = async function (url) {
	const conn = await getDbConn()

	const id = await generateUniqueId(conn)
	// console.log("unique id?", id)

	await insertId(id, url, conn)
	return genLink(id, url)
}

exports.retrieveLink = async function (url) {
	const conn = await getDbConn()

	const id = getId(url)
	// console.log("retrieving:", id)

	const results = await getLink(id, conn)
	console.log("results?", results.length, results)
	if (results.length > 0) {
		return results[0].url
	} else {
		throw "link " + id + " does not exist"
	}
}

function genLink(id, url) {
	const path = url.substring(0, url.lastIndexOf("?"))
	return path + "s/" + id
}

function getId(url) {
	return url.substring(url.indexOf("/s/") + 3)
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

function insertId(id, url, conn) {
	return new Promise((resFn, rejFn) => {
		const time = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss")
		conn.query(
			"INSERT INTO link (id, url, time) VALUES (?, ?, ?)",
			[id, url, time], (error, results) => {
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
