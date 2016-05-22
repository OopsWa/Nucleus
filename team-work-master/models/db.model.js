var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : config.mysql.host,
  user     : config.mysql.user,
  password : config.mysql.password,
  database : config.mysql.database
});


module.exports = connection;
