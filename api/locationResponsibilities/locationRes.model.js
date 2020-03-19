'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var locationResSchema = new Schema({

  ResForLocation : Array,
  ResForEmployee : Array
});

module.exports = mongoose.model('locationResponsibilities_model', locationResSchema);
