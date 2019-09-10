var config = require('./../config')
var bodyParser = require('body-parser');
var jsonwedtoken = require('jsonwebtoken');
var User = require('../models/user')
var cors = require('cors');


// setup global middleware here

module.exports = (app) => {
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(async (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      jsonwedtoken.verify(req.headers.authorization.split(' ')[1], config.secrets.jwt, (err, decode) => {
        req.user = decode;
        if (err) req.user = undefined;
      })
    }else {
      req.user = undefined;
    }
    if (req.user)
      await User.findById(req.user._id, (err, user) => {
        if (!user) req.user = undefined;
      })
    next()
  });

};
