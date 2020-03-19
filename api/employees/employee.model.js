'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  Name: String,
  FatherName: String,
  MotherName: String,
  Password: String,
  Designation: String,
  CNIC: String,
  DOB: String,
  DateOfEntry : Date,
  DateOfExist : Date,
  PrevCompany : String,
  Education : String,
  Address : String,
  PerAddress : String,
  District : String,
  Salary : Number,
  CellNo : String,
  Car : String,
  ComuDevice : String,
  Certificates : Array,
  CurrentlyEmloyed : Boolean,
  Location : {
    type : Schema.Types.ObjectId,
    ref: 'locations_model'
  },
  Weapon : {
    type : Schema.Types.ObjectId,
    ref: 'weapons_model'
  },
  NatureOfDuty : {
    type : Schema.Types.ObjectId,
    ref: 'natureOfDuties_model'
  },
  LocResponsibility : {
    type : Schema.Types.ObjectId,
    ref: 'locationResponsibilities_model'
  },
  Customer : {
    type : Schema.Types.ObjectId,
    ref: 'customers_model'
  },
  CurrentDate : {
    type : Date,
    default : new Date()
  }
});

module.exports = mongoose.model('employees_model', employeeSchema);
