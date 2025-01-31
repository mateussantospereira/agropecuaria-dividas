const mysql = require("mysql");
const config = require("./config");

console.log(config.connection())

const connection = mysql.createConnection(config.connection());

module.exports = connection;
