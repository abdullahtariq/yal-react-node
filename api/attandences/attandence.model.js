'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var attandenceSchema = new Schema({

  Date :{type:Date,
         default: new Date()} ,
  EmployeeId : String,
  Status : String,
  Remarks : String,
  MarkedBy: String,
  OverTime: String,
  Location: Object,
  NatureOfDuty: Object,
  DateOfEntry: String,
  Customer: String,
});

module.exports = mongoose.model('attandences_model', attandenceSchema);
