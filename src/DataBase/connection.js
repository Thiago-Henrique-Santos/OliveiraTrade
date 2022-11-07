const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log("Connected to OliveiraTrade's database!");
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }

    console.log("Closed connection to OliveiraTrade's database!");
});