const database = require('../DataBase/connection');

exports.post = (req, res, next) => {
    const db = database.open('./Database/database.db');
    res.status(201).send('Rots POST!');
    database.close(db);
}

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID --> ${id}`);
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID --> ${id}`);
}

exports.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
}

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID --> ${id}`);
 };