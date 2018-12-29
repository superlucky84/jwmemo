var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var debug = require('debug')('sorting:server');



// ROUTING
var jnotecontrol = require('./controller/JnoteController');
var indexcontrol = require('./controller/IndexController');




var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/dist/img/jinw-memo.ico'));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/dist', express.static(__dirname + '/dist'));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/images', express.static(__dirname + '/images'));

app.use('/', indexcontrol);
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


