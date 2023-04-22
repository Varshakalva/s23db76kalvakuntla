var express = require('express');
var router = express.Router();
const Pearl_controlers = require('../controllers/pearl');


router.get('/',Pearl_controlers.pearl_view_all_Page);

/* GET create update page */
router.get('/update', Pearl_controlers.Pearl_update_Page);

/* GET detail Pearl page */
router.get('/detail', Pearl_controlers.Pearl_view_one_Page);

/* GET delete Pearl page */
router.get('/delete', Pearl_controlers.pearl_delete_Page);


module.exports = router;