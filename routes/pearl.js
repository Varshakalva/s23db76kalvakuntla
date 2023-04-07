var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Pearl', { title: 'Search Results Pearl' });
});

module.exports = router;