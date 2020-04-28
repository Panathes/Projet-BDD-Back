const sqlite3 = require('sqlite3').verbose();

let connection = new sqlite3.Database("../db/portfolio", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the portfolio database.');
  });


module.exports = connection;