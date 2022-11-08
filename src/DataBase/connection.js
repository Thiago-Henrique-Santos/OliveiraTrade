const sqlite3 = require('sqlite3').verbose();

exports.open = (database) => {
    let oi = new sqlite3.Database(database, (err) => {
        if (err) {
            return console.error(err.message);
        }
    
        console.log("Connected to OliveiraTrade's database!");
    });
}