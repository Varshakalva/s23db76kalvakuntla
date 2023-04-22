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
// exports.pearl_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: pearl detail: ' + req.params.id);
// };


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
// exports.pearl_delete = function (req, res) {
//     res.send('NOT IMPLEMENTED: pearl delete DELETE ' + req.params.id);
// };




// Handle pearl update form on PUT.
exports.pearl_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await pearl.findById(req.params.id)
        // Do updates of properties
        if (req.body.Pearl_Color)
            toUpdate.Pearl_Color = req.body.Pearl_Color;
        if (req.body.Pearl_Weight) toUpdate.Pearl_Weight = req.body.Pearl_Weight;
        if (req.body.Pearl_Cost) toUpdate.Pearl_Cost = req.body.Pearl_Cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// for a specific pearl.
exports.pearl_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await pearl.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
        res.render('pearl', { title: 'pearl Search Results', theresults: thepearl });
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


// Handle pearl delete on DELETE.
exports.pearl_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await pearl.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };



// Handle a show one view with id specified by query
exports.Pearl_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await pearl.findById( req.query.id)
    res.render('Pearldetail',
    { title: 'Pearl Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


    
// Handle building the view for updating a Pearl.
// query provides the id
exports.Pearl_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await pearl.findById(req.query.id)
    res.render('pearlupdate', { title: 'Pearl Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };



// Handle a delete one view with id from query
    // Handle a delete one view with id from query
exports.pearl_delete_Page = async function(req, res) {
        console.log("Delete view for id " + req.query.id)
        try{
        result = await pearl.findById(req.query.id)
        res.render('pearldelete', { title: 'Pearl Delete', toShow:
       result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
       };
    

    