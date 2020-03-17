'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var itemSchema = new Schema({
  FirstName: String,
  LastName: String,
  Nic: String,
  License: String,
  CarRegistration : String,
  Address : String,
  CellNo : String,
});

module.exports = mongoose.model('item_model', itemSchema);
