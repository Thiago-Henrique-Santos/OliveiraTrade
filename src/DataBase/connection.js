const sqlite3 = require('sqlite3').verbose();

exports.open = (database) => {
    database = new sqlite3.Database(database, (err) => {
        if (err) {
            return console.error(err.message);
        }
    
        console.log("Connected to OliveiraTrade's database!");
    });

    database.run('CREATE TABLE IF NOT EXISTS user (id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, name VARCHAR(80), email VARCHAR(70), cpf VARCHAR(14), password VARCHAR(25));');
    return database;
}

exports.run = (database, sql) => {
    database.run(sql);
}

exports.close = (database) => {
    database.close((err) => {
        if (err) {
            return console.error(err);
        }

        console.log("Closing connection to OliveiraTrade's database!");
    });
}