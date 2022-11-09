const database = require('../DataBase/connection');
const crypto = require('crypto');

exports.signUp = (user) => {
    let hash = crypto.createHash('sha1');
    hash = hash.update(user.pass);

    const db = database.open('./DataBase/database.db');
    database.run(db, `INSERT INTO user (name, email, cpf, pass) VALUES ('${user.name}', '${user.email}', '${user.cpf}', '${hash.digest('base64')}');`);
    database.close(db);
}