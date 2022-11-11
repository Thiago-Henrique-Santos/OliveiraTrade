const database = require('../DataBase/connection');
const crypto = require('crypto');
const { debugPort } = require('process');

exports.signUp = (user) => {
    let hash = crypto.createHash('sha1');
    hash = hash.update(user.pass);

    const db = database.open('./DataBase/database.db');
    const query = db.prepare(`INSERT INTO user (name, email, cpf, pass) VALUES (?, ?, ?, ?);`);
    query.run(user.name, user.email, user.cpf, hash.digest('base64'));
    query.finalize();
    database.close(db);
}

exports.login = (login) => {
    let hash = crypto.createHash('sha1');
    hash = hash.update(login.pass);

    const db = database.open('./DataBase/database.db');
    database.run(db, `SELECT`);
    database.close(db);
}