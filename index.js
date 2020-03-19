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
var employee = require('./api/employees/employee.controller');
var customer = require('./api/customers/customer.controller');
var locResponsibility = require('./api/locationResponsibilities/locationRes.controller');
var location = require('./api/locations/location.controller');
var natureOfDuty = require('./api/natureOfDuties/duty.controller');
var weapon = require('./api/weapons/weapon.controller');
var attandence = require('./api/attandences/attandence.controller');

// Serve the static files from the React app
app.use(logger('dev'));
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({ extended: false,limit: '5mb' }));
app.use(bodyParser({limit: '5mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// An api endpoint that returns a short list of items
app.get('/api/getAllEmps',employee.index)
app.post('/api/createEmp',employee.createEmployee)
app.put('/api/updateEmp/:id',employee.updateEmployee)
app.delete('/api/deleteEmp/:id',employee.destroy)

app.get('/api/getAllCosts',customer.index)
app.post('/api/createCos',customer.createCustomer)
app.put('/api/updateCos/:id',customer.updateCustomer)
app.delete('/api/deleteCos/:id',customer.destroy)

app.get('/api/getAllLocReses',locResponsibility.index)
app.post('/api/createLocRes',locResponsibility.createLocRes)
app.put('/api/updateLocRes/:id',locResponsibility.updateLocRes)
app.delete('/api/deleteLocRes/:id',locResponsibility.destroy)

app.get('/api/getAllLocs',location.index)
app.post('/api/createLoc',location.createLocation)
app.put('/api/updateLoc/:id',location.updateLocation)
app.delete('/api/deleteLoc/:id',location.destroy)

app.get('/api/getAllDuties',natureOfDuty.index)
app.post('/api/createDuty',natureOfDuty.createDuty)
app.put('/api/updateDuty/:id',natureOfDuty.updateDuty)
app.delete('/api/deleteDuty/:id',natureOfDuty.destroy)

app.get('/api/getAllWeapons',weapon.index)
app.post('/api/createWeapon',weapon.createWeapon)
app.put('/api/updateWeapon/:id',weapon.updateWeapon)
app.delete('/api/deleteWeapon/:id',weapon.destroy)

app.get('/api/getAllAttans',attandence.index)
app.post('/api/createAttan',attandence.createAttandence)
app.put('/api/updateAttan/:id',attandence.updateAttandence)
app.delete('/api/deleteAttan/:id',attandence.destroy)

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
const string_uri = "mongodb://admin:admin123@ds125574.mlab.com:25574/yaldram-db";
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