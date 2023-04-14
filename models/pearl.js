const mongoose = require("mongoose")
const pearlSchema = mongoose.Schema({
    Pearl_Color: String,
    Pearl_Weight: String,
    Pearl_Cost: Number
})
module.exports = mongoose.model("pearl", pearlSchema)