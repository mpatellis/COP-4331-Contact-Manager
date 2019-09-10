var router = require('express').Router();
var contactsRoute = require('./contacts');
var userRoute = require('./user');
var loginRequired = require('../controllers/user').loginRequired


module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('GET request successfull!!');
    });

    router.use('/',loginRequired, contactsRoute());
    router.use('/', userRoute());

    return router;
};