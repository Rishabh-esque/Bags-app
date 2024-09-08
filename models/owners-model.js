const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    
    contact : Number,
    picture : String,
    gstin : String
})

module.exports = mongoose.model("user" , userSchema); 