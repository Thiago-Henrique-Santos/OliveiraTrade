const sqlite3 = require('sqlite3').verbose();

exports.open = (database) => {
    database = new sqlite3.Database(database, (err) => {
        if (err) {
            return console.error(err.message);
        }
    
        console.log("Connected to OliveiraTrade's database!");
    });

    return database;
}

exports.close = (database) => {
    database.close((err) => {
        if (err) {
            return console.error(err);
        }

        console.log("Closing connection to OliveiraTrade's database!");
    });
}