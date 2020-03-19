'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var weaponSchema = new Schema({

  License : String,
  ValidTill : String,
  Type : String,
  Model : String,
  Bullet : String,
  IssuedTo : String
});

module.exports = mongoose.model('weapons_model', weaponSchema);
