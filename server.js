var express = require('express')
var hbs = require('express-handlebars')
var fs = require('fs')

var app = express()
var blog = require('./blog')
var path = require('path')

app.engine ('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get ('/', function (req, res) {
  fs.readFile ('./blog.json', function(err, contents){
    var blogContents = JSON.parse(contents)
    res.render('index', blogContents)
  })
})

app.get ('/blog/:id', function (req, res) {
  res.render('blog', blog.blog[req.params.id])
})

app.listen (3000, function(){
   console.log ('listening on port 3000')
})
