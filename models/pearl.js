const mongoose = require("mongoose")
const pearlSchema = mongoose.Schema({
    Pearl_Color:{ 
        type: String,
        minLength: 3,
        maxLength: 100
    },
    
    Pearl_Weight: String,
    Pearl_Cost:{ 
        type: Number,
        min: 0,
        max: 1000
    },
});
module.exports = mongoose.model("pearl", pearlSchema)