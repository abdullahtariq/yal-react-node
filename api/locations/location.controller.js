var abstract = require('../abstract');
var LOCATION = require('./location.model');
var controller = abstract(LOCATION);

controller.createLocation = (req,res) => {

    controller.create(req,res);
}

controller.updateLocation = (req,res) => {
    
    controller.update(req,res);
}

module.exports = controller;