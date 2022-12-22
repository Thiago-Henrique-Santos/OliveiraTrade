const UserController = require('../Controllers/UserController');
module.exports = (app)=>{
    app.post('/signup', UserController.signUp);
    app.post('/signin', UserController.signIn);
}