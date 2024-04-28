const mysql = require("mysql2");
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "220822",
  database: "pms",
});

db.connect((err) => {
  if (err) {
    console.error("Errorrr connecting to SQL server:", err);
  } else {
    console.log("SQL server connected successfully!");
  }
});

module.exports = db;
