const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true
    },
    dateOfBirth:{
        type:Date,
        trim:true,
    },
    age:{
        type:String,
        unique:true,
    },
   gender:{
        type:String,
        trim:true,
    },
    mothersname:{
        type:String,
        trim:true,
    },
    fathersname:{
        type:String,
        trim:true,
    },
    motherscontact:{
        type:String,
        trim:true,
    },
    fatherscontact:{
        type:String,
        trim:true,
    },
    identification:{
        type:String,
        trim:true,
    },
    location:{
        type:String,
        trim:true,
    },
    whobroughtchild:{
        type:String,
        trim:true,
    },
    feespaid:{
        type:String,
        trim:true,
    },
    periodOfStay:{
        type:String,
        trim:true,
    }, 
    emergencycontact:{
        type:String,
        trim:true,
    },

});

module.exports = mongoose.model("Registration" , registrationSchema)