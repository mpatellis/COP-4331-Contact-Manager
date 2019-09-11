var app = require('./server');
var config = require('./server/config')
var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true)
    .set('useFindAndModify', false)
    .set('useCreateIndex', true);

var url = config.db.url;

mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true})

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

