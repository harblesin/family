require('dotenv').config();
const mysql = require('mysql');

let connection;
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const dbPort = process.env.DB_PORT;

connection = mysql.createConnection({
	host,
	user,
	password,
	database: database,
	namedParamaeters: true,
	multipleStatements: true,
	timezone: 'Z'
});

connection.connect(err => {
	if(err)
	 	console.log("DB CONNECTION FAILED DUDE", err);
	else 
		console.log("CONNECTED TO THE DB");
});

module.exports = connection;