const UserController = require('../Controllers/UserController');
module.exports = (app)=>{
    app.post('/signup', UserController.post);
    app.get('/signin', UserController.get);
}