var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username:req.body.username }).then ((err, user) =>{
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
}))
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pearlRouter = require('./routes/pearl');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var pearl = require("./models/pearl");
var resourceRouter= require("./routes/resource");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  // passport config
  // Use the existing connection
  // The Account model
  var Account =require('./models/account');
  passport.use(new LocalStrategy(Account.authenticate()));
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());
  
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
app.use('/resource', resourceRouter);

// passport config
// Use the existing connection
// The Account model
//var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

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
