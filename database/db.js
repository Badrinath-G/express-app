var mysql = require('mysql');

require('dotenv').config();

//ecelldb mysql connection
var connection = mysql.createConnection({
    host     : process.env.db_host,
    user     : process.env.db_username,
    password : process.env.db_password,
    database : process.env.db_name
});

module.exports = connection;