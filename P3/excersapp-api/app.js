var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var ejerciciosRouter = require('./routes/ejercicios');
var ejerciciosEntrenamientoRouter = require('./routes/ejerciciosEntrenamiento');
var entrenamientosRouter = require('./routes/entrenamientos');
var informesRouter = require('./routes/informes');
var usuariosRouter = require('./routes/usuarios');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ejercicios', ejerciciosRouter);
app.use('/ejerciciosEntrenamiento', ejerciciosEntrenamientoRouter);
app.use('/entrenamientos', entrenamientosRouter);
app.use('/informes', informesRouter);
app.use('/usuarios', usuariosRouter);
app.use('/api', apiRouter);

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

app.listen(process.env.PORT || 3002);

const Sequelize = require('sequelize');

  
module.exports = app;
