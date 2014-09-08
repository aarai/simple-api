var mongoose = require('mongoose');
var Name = require('../models/name');
var data = data || {};

data.config = require('../config/config');

data.connect = function() {
  mongoose.connect(data.config.database);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function() {
    console.log('connected to db');
  });
};

data.save = function(name) {
  var n = new Name({
      firstName: name.fname,
      lastName: name.lname
  });
  n.save(function(err, n){
    if(err) return console.error(err);
  });
};

data.all = function(cb) {
  Name.find(function(err,names){
    if(err){
      cb(err,null);
    } else {
      cb(null,names);
    }
  });
};

module.exports = data;
