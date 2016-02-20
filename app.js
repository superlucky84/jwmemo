var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var http = require('http');
var debug = require('debug')('sorting:server');

// ROUTING
var jnotecontrol = require('./controller/JnoteController.js');




var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/jnote', jnotecontrol);


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.message);
  res.render('error', {
    message: err.message,
    error: err
  });
});

module.exports = app;


