var express = require('express')
var hbs = require('express-handlebars')

var app = express()
var blog = require('./blog')
var path = require('path')

app.engine ('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get ('/', function (req, res) {
  res.render('index', blog)
})

app.listen (3000, function(){
   console.log ('listening on port 3000')
})
