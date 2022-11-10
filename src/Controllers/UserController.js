const User = require('../Models/UserModel');

exports.post = (req, res, next) => {
    try {
        const user = {
            name: 'Thiago',
            email: 'thiagohsantosths@gmail.com',
            cpf: '084.430.946.05',
            pass: '1SenhaDeTeste%'
        }
        User.signUp(user);
        res.status(201).send('Rots POST!');
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