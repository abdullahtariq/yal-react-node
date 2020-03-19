var abstract = require('../abstract');
var WEAPON = require('./weapon.model');
var controller = abstract(WEAPON);

controller.createWeapon = (req,res) => {

    controller.create(req,res);
}

controller.updateWeapon = (req,res) => {
    
    controller.update(req,res);
}

module.exports = controller;