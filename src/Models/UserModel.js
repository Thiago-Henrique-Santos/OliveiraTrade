const database = require('../DataBase/connection');

exports.signUp = (user) => {
    const db = database.open('./DataBase/database.db');
    //database.run(db, `INSERT INTO user (name, email, cpf, password) VALUES ('Thiago', 'thiagohsantosths@gmail.com', '084.430.946-05', 'senha1');`);
    database.close(db);
}