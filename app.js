var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var knex = require('knex');

require('./app_server/models/create_bd');

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var studentRouter = require('./app_server/routes/student');
var catalogoRouter = require('./app_server/routes/catalogo');
var activityRouter = require('./app_server/routes/activityStu');
var monitoringRouter = require('./app_server/routes/monitoring');
var linkedTeachersRouter = require('./app_server/routes/linked_teachers');
var chooseActRouter = require('./app_server/routes/chooseAct');
var chooseStuRouter = require('./app_server/routes/chooseStu');
var executionRouter = require('./app_server/routes/execution');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter);
app.use('/catalogo', catalogoRouter);
app.use('/activityStu', activityRouter);
app.use('/monitoring', monitoringRouter);
app.use('/linked_teachers', linkedTeachersRouter);
app.use('/chooseAct', chooseActRouter);
app.use('/chooseStu', chooseStuRouter);
app.use('/execution', executionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
