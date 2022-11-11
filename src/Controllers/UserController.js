const User = require('../Models/UserModel');

exports.post = (req, res) => {
    try {
        User.signUp(req.body);
        res.status(201).send(`Conta de ${req.body.name} criada com sucesso!`);
    } catch (error) {
        console.log(error)
    }
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