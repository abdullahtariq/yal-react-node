const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const cors = require('cors');
var logger = require('morgan');
const mongoose = require('mongoose');

var items = require('./api/items/items.controller');

// Serve the static files from the React app
app.use(logger('dev'));
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({ extended: false,limit: '5mb' }));
app.use(bodyParser({limit: '5mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// An api endpoint that returns a short list of items
app.get('/api/getList', items.getList);
app.post('/api/list', items.createList);

// Handles any requests that don't match the ones above
/*app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});*/

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

// Connect to database
const string_uri = "mongodb://localhost/mydb";
mongoose.connect(string_uri, { useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.on('error', function(err) {
	console.error('MongoDB connection error: ' + err);
	process.exit(-1);
	}
);



require('./routes/index')(app);
//app.use('/', indexRouter);
//app.use('/users', usersRouter);

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