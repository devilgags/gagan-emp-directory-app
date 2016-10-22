//This is the entrypoint of the application. This file contains all the configurations of the application.

var express = require('express');
var path = require('path');
var chalk = require('chalk');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require("./db");
var routes = require('./routes/routes');
var users = require('./routes/users');
var corsFilter=require('./routes/filters/cors.filter.js');
var app = express();
var router = express.Router();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//serving static content in public folder
app.use('/',express.static(path.join(__dirname, 'public')));

//applying favicon
app.use(favicon(path.join(__dirname, 'public','static','media','favicon.ico')));

//applying CORS Filter for Cross Origin suppport
corsFilter(app);

//configuring the routes for the apis
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log(chalk.red("Error handler for page not found called "));
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
  console.log(chalk.red("Error handler for server called " + JSON.stringify(error)));
    res.status(err.status || 500).json(err);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  console.log(chalk.red("Error handler for server called " + JSON.stringify(err)));
  res.status(err.status || 500).json(err);
});


//configuring port 7000 for local developement
var port = process.env.PORT || 7000;

//starting the server
var server = app.listen(port, function (err) {
  if (err) {
    console.error(JSON.stringify(err));
  }
  else {
    console.log(chalk.yellow("Server listening on localhost:" + port));
    console.log(chalk.blue("Trying to connect to mongo db !"));
    db.connect();
  }
});

module.exports = app;
