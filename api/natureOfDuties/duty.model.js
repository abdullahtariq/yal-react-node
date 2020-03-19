'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var dutySchema = new Schema({

  DayNight : String,
  ShiftHours : String,
  Manager : Boolean,
  Manages : Array
});

module.exports = mongoose.model('natureOfDuties_model', dutySchema);
