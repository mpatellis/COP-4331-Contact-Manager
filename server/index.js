var express = require('express');
var app = express();
var routes = require('./routes');

require('./middleware')(app);


app.use(routes());


module.exports = app;