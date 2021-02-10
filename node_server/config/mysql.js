require('dotenv').config();
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
	port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    namedParameters: true,
    multipleStatements: true,
    timezone: 'Z'
});


connection.connect(err => {
    if(err)
        console.log("DATABASE CONNECTION FAILED", err);
    else   
        console.log('Connected to MYSQL at ' + process.env.DB_HOST);
});


module.exports = connection;