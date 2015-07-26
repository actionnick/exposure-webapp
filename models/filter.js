var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Filter = new Schema({
  brightness: Number,
  contrast: Number,
  mid: Number,
  rgb_in_min: Number,
  rgb_in_max: Number,
  rgb_out_min: Number,
  rgb_out_max: Number,
  rgb_gamma: Number,
  r_in_min: Number,
  r_in_max: Number,
  r_out_min: Number,
  r_out_max: Number,
  r_gamma: Number,
  g_in_min: Number,
  g_in_max: Number,
  g_out_min: Number,
  g_out_max: Number,
  g_gamma: Number,
  b_in_min: Number,
  b_in_max: Number,
  b_out_min: Number,
  b_out_max: Number,
  b_gamma: Number
});

module.exports = mongoose.model('Filter', Filter);
