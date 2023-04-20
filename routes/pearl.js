var express = require('express');
var router = express.Router();
const Pearl_controlers = require('../controllers/pearl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Pearl', { title: 'Search Results Pearl' });
});

/* GET create update page */
router.get('/update', Pearl_controlers.Pearl_update_Page);

/* GET detail Pearl page */
router.get('/detail', Pearl_controlers.Pearl_view_one_Page);

/* GET delete Pearl page */
router.get('/delete', Pearl_controlers.pearl_delete_Page);


module.exports = router;