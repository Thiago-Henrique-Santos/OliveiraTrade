const User = require('../Models/UserModel');

exports.post = (req, res, next) => {
    User.signUp();
    res.status(201).send('Rots POST!');
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