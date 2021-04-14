var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.MYSQL_URL || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  database: process.env.MYSQL_DATABASE || 'service1'
});

connection.connect();

module.exports = connection;