const database = require('../DataBase/connection');
const crypto = require('crypto');
const { resolve } = require('path');

exports.signUp = (user) => {
    return new Promise((resolve, reject) => {
        let hash = crypto.createHash('sha1');
        hash = hash.update(user.pass);
        user.pass = hash.digest('base64');

        const db = database.open('./DataBase/database.db');
        const query = db.prepare(`INSERT INTO user (name, email, cpf, pass) VALUES (?, ?, ?, ?);`);
        query.run(user.name, user.email, user.cpf, user.pass);
        query.finalize();
        database.close(db);

        delete user.pass;
        resolve(user);
    })
}

exports.signIn = (login) => {
    return new Promise ((resolve, reject) => {
        let hash = crypto.createHash('sha1');
        hash = hash.update(login.pass);
        login.pass = hash.digest('base64');

        const sql = `SELECT * FROM user WHERE user.email = ? AND user.pass = ?;`;

        const db = database.open('./DataBase/database.db');
        db.get(sql, [login.email, login.pass], (err, row) => {
            if (err) {
                reject(JSON.stringify({message : `Erro: ${err.message}`}));
            } else {
                const loginInformation = row && row!=undefined ? row : JSON.stringify({message : 'Email ou senha incorreto!'});
                delete loginInformation.pass;
                resolve(loginInformation);
            }
        });
        database.close(db);
    });
}