#!/usr/bin/env node

/**
 * Module dependencies.
 */

var express = require('express');
var app = require('../app');
var debug = require('debug')('record:server');
var http = require('http');
var https = require('https');
var fs = require('fs');
var httpApp = express();

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '7771');
app.set('port', port);



/**
 * Create HTTP server.
 */



if (port == '7771') {
  var httpsOption = { 
    key: fs.readFileSync(__dirname+'/../super.key'),
    cert: fs.readFileSync(__dirname+'/../super.crt')
  }

  https.createServer(httpsOption, app).listen(port, function(){
    console.log("Https server listening on port " + 443);
  });

  /*
     httpApp.get("*", function (req, res, next) {
     res.redirect("https://" + req.headers.host + "" + req.path);
     });
     httpApp.set('port', 7772);

     var server = http.createServer(httpApp).listen(7772);
     server.on('error', onError);
     server.on('listening', onListening);
     */

}
else {
  var server = http.createServer(app);

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
      process.exit(1);
      break;
      default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
