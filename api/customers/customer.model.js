'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var customerSchema = new Schema({

  Name : String,
  Location : Array,
  Manager : String,
  StartContract : Date,
  EndContract: Date
});

module.exports = mongoose.model('customers_model', customerSchema);
