var errors = require('../components/errors');
var express = require('express');
var path = require('path');
var router = express.Router();
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'S.T.S Application' });
// });


module.exports = function(app){

  // app.use('/api/driver',require('../api/driver'));
//    app.use('/api/admin',require('../api/adminstration'));
//    app.use('/api/student',require('../api/student'));
//    app.use('/api/school',require('../api/school'));
//    app.use('/api/attendance',require('../api/attendance'));
//    app.use('/api/distance',require('../api/distance'));
//    app.use('/api/notification',require('../api/notifications'));
//    app.use('/api/group',require('../api/group'));
//    app.use('/api/feedback',require('../api/feedback'));
//    app.use('/api/message',require('../api/messages'));
//    app.use('/api/timing',require('../api/timings'));
//    app.use('/api/casting',require('../api/broadCasting'));
  // All other routes should redirect to the index.html
  app.route('/:url(api|auth|components|app|bower_components|assets|socket.io)/*')
    .get(errors[404]);

    app.route('/*')
    .get(function(req, res) {
      console.log('I am in default area');
       res.render('index', { title: 'Yaldram Application' });
    });
};
