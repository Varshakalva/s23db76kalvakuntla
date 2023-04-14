var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pearlRouter = require('./routes/pearl');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var pearl = require("./models/pearl");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var db = mongoose.connection;

//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pearl', pearlRouter);
app.use('/board', boardRouter);
app.use('/selector',selectorRouter);

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

// We can seed the collection if needed on
async function recreateDB(){
// Delete everything
await pearl.deleteMany();

let instance1 = new pearl({Pearl_Color:"Green", Pearl_Weight:"10gms", Pearl_Cost:50});
instance1.save().then(doc=>{

  console.log("First object saved")
}
  ).catch(err=>{

  console.error(err)})

let instance2 = new pearl({Pearl_Color:"White", Pearl_Weight:"15gms", Pearl_Cost:55});
instance2.save().then(doc=>{

  console.log("Second object saved")}

  ).catch(err=>{

  console.error(err)})

let instance3 = new pearl({Pearl_Color:"Black", Pearl_Weight:"20gms", Pearl_Cost:60});
instance3.save().then(doc=>{

  console.log("Third object saved")}

  ).catch(err=>{

  console.error(err)})
}
let reseed = true;
if (reseed) { recreateDB();}


module.exports = app;

//Get the default connection
//Bind connection to error event
