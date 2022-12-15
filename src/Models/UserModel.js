const database = require('../DataBase/connection');
const crypto = require('crypto');

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

    const sql = `SELECT * FROM user WHERE user.email = ? AND user.pass = ?;`;

    const db = database.open('./DataBase/database.db');
    db.get(sql, [login.email, hash.digest('base64')], (err, row) => {
        if (err) {
            return `Erro: ${err.message}`;
        }

        if (row) {
            return row ? row : 'Email ou senha incorreto!';   
        } else {
            return 'O erro está em algo envolvendo a variável row!';
        }
    });
    database.close(db);
}