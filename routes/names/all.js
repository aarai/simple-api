var express = require('express');
var router = express.Router();
var data = require('../../data/mongo');

/* get names from database. */
router.get('/', function(req, res) {
    data.all(function(err, names) {
    res.render('show', { names: names });
  });
});

module.exports = router;

