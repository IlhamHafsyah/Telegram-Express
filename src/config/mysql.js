const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  timezone: process.env.DB_TIMEZONE,
});

connection.connect((error) => {
  if (error) {
    console.log(`Turn on the database! ${error}`);
  } else {
    console.log("You are now connected to database ...");
  }
});

module.exports = connection;
