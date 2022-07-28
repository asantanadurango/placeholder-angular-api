const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
  host: process.env.HOST_DB || 'localhost',
  user: process.env.USER_DB || 'root',
  password: process.env.PASSWORD_DB || '',
  database: process.env.DATABASE_DB || 'placeholder',
});
connection.connect();
module.exports = connection;
