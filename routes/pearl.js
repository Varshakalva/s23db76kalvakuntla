var express = require('express');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

const pearl_controlers= require('../controllers/pearl');
var router = express.Router();
/* GET customer */

router.get('/', pearl_controlers.pearl_view_all_Page );



/* GET detail pearl page */

router.get('/detail', secured, pearl_controlers.Pearl_view_one_Page);

/* GET create pearl page */

router.get('/create', secured, pearl_controlers.Pearl_create_Page);

/* GET delete pearl page */

router.get('/delete', secured, pearl_controlers.pearl_delete_Page);

/* GET update pearl page */

router.get('/update', secured, pearl_controlers.Pearl_update_Page);

module.exports = router;