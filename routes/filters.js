var express = require('express');
var router = express.Router();
var Filter = require('../models/filter');

/* GET list of filters. */
router.get('/', function(req, res, next) {
  Filter.find({}, function(err, filters) {
    res.send(JSON.stringify(filters), 200);
  });
});

module.exports = router;
