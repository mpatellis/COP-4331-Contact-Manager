var router = require('express').Router();
var controller = require('../../controllers');
var loginRequired = require('../../controllers/user').loginRequired

module.exports = () => {
    router.route('/allusers')
        .get(controller.user.getAll)
        // .post(controller.user.addNew);

    router.route('/register')// :)
        .post(controller.user.register);

    router.route('/login')// :)
        .post(controller.user.login);

    router.route('/user', loginRequired)
        .get(controller.user.getById)
        .put(controller.user.updateById)
        .delete(controller.user.deleteById);
    
    router.route('/user/username/:username')// returns true if username exists
        .get(controller.user.getByUsername);

    return router
}