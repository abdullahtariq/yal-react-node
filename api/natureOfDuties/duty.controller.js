var abstract = require('../abstract');
var NATUREDUTY = require('./duty.model');
var controller = abstract(NATUREDUTY);

controller.createDuty = (req,res) => {

    controller.create(req,res);
}

controller.updateDuty = (req,res) => {
    
    controller.update(req,res);
}

module.exports = controller;