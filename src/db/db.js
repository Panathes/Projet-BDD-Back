const sqlite3 = require('sqlite3').verbose();
const path = require('path')

const dbPath = path.resolve(__dirname, 'portfolio.db')

let connection = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the portfolio database.');
  });


module.exports = connection;