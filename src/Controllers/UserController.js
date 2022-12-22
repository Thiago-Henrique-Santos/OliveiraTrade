const User = require('../Models/UserModel');

exports.signUp = async (req, res) => {
    try {
        const query = await User.signUp(req.body);
        res.status(201).send(query);
    } catch (error) {
        res.status(500).send(JSON.stringify({message: `Ocorreu o seguinte erro inesperado: ${error}`}));
    }
}

exports.signIn = async (req, res) => {
    try {
        const query = await User.signIn(req.body);
        
        if (query) {
            if (query.id) {
                res.status(200).send(query);
            } else {
                res.status(403).send(query);
            }
        } else {
            res.status(500).send('Erro desconhecido! ' + query)
        }
    } catch (error) {
        res.status(500).send(JSON.stringify({message: `Ocorreu o seguinte erro inesperado: ${error}`}));
    }
}