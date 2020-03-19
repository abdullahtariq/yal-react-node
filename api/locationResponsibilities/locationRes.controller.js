var abstract = require('../abstract');
var RESPONSIBILITY = require('./locationRes.model');
var controller = abstract(RESPONSIBILITY);

controller.createLocRes = (req,res) => {

    controller.create(req,res);
}

controller.updateLocRes = (req,res) => {
    
    controller.update(req,res);
}

module.exports = controller;