const createError = require('http-errors');
const Express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hotelRouter = require('./routes/hotels');

const server = Express();

server.set('view engine', 'ejs');
server.use(logger('dev'));
server.use(Express.json());
server.use(Express.urlencoded({ extended: false }));
server.use(cookieParser());

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
});

// endpoints
server.use('/hotel', () => 'hotelRouter');

module.exports = server;
