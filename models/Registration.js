const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    fullname:{
        type:String,
        trim:true
    },
    dateOfBirth:{
        type:String,
        trim:true,
    },
    age:{
        type:String,
        trim:true,
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
    broughtchild:{
        type:String,
        trim:true,
    },
    feepaid:{
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
    attendance:{
        type:String,
        default: "clockedout",
        enum:["clockedin", "clockedout"],
    },

});

module.exports = mongoose.model("Registration" , registrationSchema)