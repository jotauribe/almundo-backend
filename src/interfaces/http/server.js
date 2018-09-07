const Express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hotelRouter = require('./routes');

function createServer() {
  const server = Express();

  server.set('view engine', 'ejs');
  server.use(logger('dev'));
  server.use(cors());
  server.use(Express.json());
  server.use(Express.urlencoded({ extended: false }));
  server.use(cookieParser());

  // error handler
  server.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.sendStatus(err.status || 500);
  });

  // endpoints
  server.use('/api', hotelRouter);

  // catch 404 and forward to error handler
  server.use(function(req, res, next) {
    if (req.app.get('env') === 'development') return next(createError(404));
    next();
  });

  return server;
}

module.exports = createServer();
