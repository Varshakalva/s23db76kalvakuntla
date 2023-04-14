var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var pearl_controller = require('../controllers/pearl');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// PEARL ROUTES ///
// POST request for creating a Pearl.
router.post('/pearl', pearl_controller.pearl_create_post);
// DELETE request to delete Pearl.
router.delete('/pearl/:id', pearl_controller.pearl_delete);
// PUT request to update Pearl.
router.put('/pearl/:id', pearl_controller.pearl_update_put);
// GET request for one Pearl.
router.get('/pearl/:id', pearl_controller.pearl_detail);
// GET request for list of all Pearl items.
router.get('/pearl', pearl_controller.pearl_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"Pearl", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
