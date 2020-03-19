var abstract = require('../abstract');
var EMPLOYEE = require('./employee.model');
var controller = abstract(EMPLOYEE);
var crypto = require('crypto');


controller.createEmployee = (req,res) => {
    
    var data = req.body ;
    var hash = crypto.createHash('md5').update(data.Password).digest('hex');
    data.Password = hash
    //  console.log(data)
    req.body= data;
    controller.create(req,res);
}

controller.updateEmployee = (req,res) => {
    var data = req.body ;
    if(data.Password){
        var hash = crypto.createHash('md5').update(data.Password).digest('hex');
        data.Password = hash
      }
    req.body= data;
    controller.update(req,res);
}

module.exports = controller;