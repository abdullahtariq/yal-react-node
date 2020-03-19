'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var locationSchema = new Schema({

  Customer : Boolean,
  Address : String,
  City : String,
  District : String
});

module.exports = mongoose.model('locations_model', locationSchema);
