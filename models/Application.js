const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true
    },
    dateOfBirth:{
        type:Date,
        trim:true,
    },
    
   moblienumber:{
        type:String,
        trim:true,
    },
    gender:{
        type:String,
        trim:true,
    },
    education:{
        type:String,
        trim:true,
    },
    location:{
        type:String,
        trim:true,
    },
    religion:{
        type:String,
        trim:true,
    },
    identification:{
        type:String,
        trim:true,
    },
    nextOfKin:{
        type:String,
        trim:true,
    },
    nextOfKinContact:{
        type:String,
        trim:true,
    },
    recommendername:{
        type:String,
        trim:true,
    },
    recommendercontact:{
        type:String,
        trim:true,
    }, 
    emergencycontact:{
        type:String,
        trim:true,
    },

});

module.exports = mongoose.model("Application" , applicationSchema)