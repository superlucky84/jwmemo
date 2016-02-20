var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var Jmemo = new Schema({
  title: String,
  note: String,
  regdate: { type: Date, default: Date.now },
  moddate: { type: Date, default: Date.now },
  favorite:  Boolean,
  category: [String]
})

module.exports = mongoose.model('Jmemo', Jmemo);

