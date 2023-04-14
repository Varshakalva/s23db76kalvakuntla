var pearl = require('../models/pearl');
// List of all pearl
exports.pearl_list = async function (req, res) {
    //  res.send('NOT IMPLEMENTED: pearl list');
    try {
        thepearl = await pearl.find();
        res.send(thepearl);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific pearl.
exports.pearl_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: pearl detail: ' + req.params.id);
};


// Handle pearl create on POST.
exports.pearl_create_post = async function (req, res) {
    
    console.log(req.body)
    let document = new pearl();
    document.Pearl_Color = req.body.Pearl_Color;
    document.Pearl_Weight = req.body.Pearl_Weight;
    document.Pearl_Cost = req.body.Pearl_Cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle pearl delete form on DELETE.
exports.pearl_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: pearl delete DELETE ' + req.params.id);
};


// Handle pearl update form on PUT.
exports.pearl_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: pearl update PUT' + req.params.id);
};

// // List of all pearl
// exports.pearl_list = async function(req, res) {
//     try{
//     thepearl = await pearl.find();
//     res.send(thepearl);
//     }
//     catch(err){
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//     }
//    };


// VIEWS
// Handle a show all view
exports.pearl_view_all_Page = async function (req, res) {
    try {
        thepearl = await pearl.find();
        res.render('pearl', { title: 'pearl Search Results', results: thepearl });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


   // Handle pearl create on POST.
// exports.pearl_create_post = async function(req, res) {
//     console.log(req.body)
//     let document = new pearl();
//     // We are looking for a body, since POST does not have query parameters.
//     // Even though bodies can be in many different formats, we will be picky
//     // and require that it be a json object
//     // {Pearl_Color :"Green",Pearl_Weight:"10gms",Pearl_Cost:"$50"}
//     document.pearl_type = req.body.pearl_type;
//     document.cost = req.body.cost;
//     document.size = req.body.size;
//     try{
//     let result = await document.save();
//     res.send(result);
//     }
//     catch(err){
//     res.status(500);
//     res.send(`{"error": ${err}}`);
//     }
//    };