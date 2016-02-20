var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var Category = new Schema({
  title: String,
  regdate: { type: Date, default: Date.now },
  moddate: { type: Date, default: Date.now },
})



var CategoryModel = mongoose.model('Category', Category);

module.exports = CategoryModel;

