require('dotenv').config({path: __dirname + '/../.env'})
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.MYSQL_URL || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'ReviewsService'
});

connection.connect();

module.exports = connection;