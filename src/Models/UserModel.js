const database = require('../DataBase/connection');
const crypto = require('crypto');
const { resolve } = require('path');

exports.signUp = (user) => {
    return new Promise((resolve, reject) => {
        let hash = crypto.createHash('sha1');
        hash = hash.update(user.pass);

        const db = database.open('./DataBase/database.db');
        const query = db.prepare(`INSERT INTO user (name, email, cpf, pass) VALUES (?, ?, ?, ?);`);
        query.run(user.name, user.email, user.cpf, hash.digest('base64'));
        query.finalize();
        database.close(db);

        console.log(user);
        resolve(user);
    })
}

exports.login = (login) => {
    return new Promise ((resolve, reject) => {
        let hash = crypto.createHash('sha1');
        hash = hash.update(login.pass);

        const sql = `SELECT * FROM user WHERE user.email = ? AND user.pass = ?;`;

        const db = database.open('./DataBase/database.db');
        db.get(sql, [login.email, hash.digest('base64')], (err, row) => {
            if (err) {
                const errMessage = `Erro: ${err.message}`;
                reject(errMessage);
            } else {
                resolve(row && row!=undefined ? row : 'Email ou senha incorreto!');
            }
        });
        database.close(db);
    });
}