var express = require('express');
var router = express.Router();
var data = require('../../data/mongo');

/* get names from database. */
router.get('/', function(req, res) {
  if(req.query.fname && req.query.lname) {
  var name = {fname: req.query.fname, lname: req.query.lname};
    data.save(name);
    res.send('All good here');
  } else {
    res.send('Not good here');
  }
});

module.exports = router;
