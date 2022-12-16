const User = require('../Models/UserModel');

exports.post = async (req, res) => {
    try {
        const query = await User.signUp(req.body);
        res.status(201).send(query);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.get = async (req, res) => {
    try {
        const query = await User.login(req.body);
        console.log(query);
        
        if (query) {
            console.log(query);
            if (query.id) {
                res.status(200).send(query);
            } else {
                res.status(403).send(query);
            }
        } else {
            res.status(500).send('Erro desconhecido! ' + query)
        }
    } catch (error) {
        res.status(500).send('Ocorreu um erro em UserController.js > método get');
    }
}