var mongoose = require('mongoose');

var NameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

var Name = mongoose.model('Name', NameSchema);

module.exports = Name;
