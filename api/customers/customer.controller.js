var abstract = require('../abstract');
var CUSTOMER = require('./customer.model');
var controller = abstract(CUSTOMER);

controller.createCustomer = (req,res) => {

    controller.create(req,res);
}

controller.updateCustomer = (req,res) => {
    
    controller.update(req,res);
}

module.exports = controller;