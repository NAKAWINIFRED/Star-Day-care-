const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
//const LocalStrategy = require('passport-local').Strategy;

const registerSchema = new mongoose.Schema({
    fullName:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        // unique:true,
        trim:true

    },
    password:{
        type:String,
        trim:true
    },
});

 registerSchema.plugin(passportLocalMongoose, {
     usernameField:"email"
 })
module.exports = mongoose.model("Register", registerSchema)
