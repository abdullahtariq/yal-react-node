var abstract = require('../abstract');
var ATTANDENCE = require('./attandence.model');
var controller = abstract(ATTANDENCE);

controller.createAttandence = (req,res) => {

    controller.create(req,res);
}

controller.updateAttandence = (req,res) => {
    
    controller.update(req,res);
}

module.exports = controller;