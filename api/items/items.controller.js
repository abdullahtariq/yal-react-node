var abstract = require('../abstract');
var ITEM = require('./item.model');
var controller = abstract(ITEM);

controller.getList = (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
}

controller.createList = (req,res) => {
    //res.send('Reach to createlist')
    controller.create(req,res);
}

module.exports = controller;