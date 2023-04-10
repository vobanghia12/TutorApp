const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
const con = mysql.createPool({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

con.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  }
  if (connection) {
    console.log("Connected to database");
    connection.release();
  }
});

module.exports = con;
