'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PieceSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the hardware'
  },
  price: {
    type: Number,
    default: 0
  },
  url: {
      type: String,
      required: 'Please enter an url to buy it'
  },
  type: {
      type: String,
      default : "mainboard"
  }
});

module.exports = mongoose.model('Pieces', PieceSchema);