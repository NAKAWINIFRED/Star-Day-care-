const mongoose = require("mongoose");

//Access the schema function in mongoose
const Schema = mongoose.Schema;
//using function to build the schema
const contactSchema = new Schema(
    {
        name:{type:String , trim: true},
        email:{type:String },
        phone:{type:String, trim:true},
        message:{type:String },

    }
);

module.exports = mongoose.model("Contact" , contactSchema);