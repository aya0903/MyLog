// db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0311",
  database: "mylog",
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL接続エラー:", err);
  } else {
    console.log("MySQL接続成功");
  }
});

module.exports = connection;
