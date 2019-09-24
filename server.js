var express = require('express')
var app = express()
var routes = require('./routes')
var config = require('./config')

require('./middleware')(app)

app.use(routes())

var mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
  .set('useFindAndModify', false)
  .set('useCreateIndex', true)

var url = config.db.url

mongoose.Promise = global.Promise
mongoose.connect(url, { useNewUrlParser: true })

app.use(express.static(path.join(dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(dirname, "client", "build", "index.html"));
});

const PORT = config.port


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

