const UserController = require('../Controllers/UserController');
module.exports = (app)=>{
    app.post('/signup', UserController.post);
    app.get('/login', UserController.get);
}