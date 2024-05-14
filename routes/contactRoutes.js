//introduce express
const express = require("express");

//Accesing the router function in express
const router = express.Router();

//introduce the model
const Contact = require("../models/Contact");


//creating the route
router.get("/contact", (req, res)=> {
    res.render("Contact");//
});

router.post("/contact", async (req, res)=>{
    try {
       const contact = new Contact(req.body); 
       await contact.save();
       console.log(req.body);
       res.redirect("/contact")
    } catch (error) {
        console.error(error);
    }
});

router.get("/", (req, res)=> {
    res.render("index");//
  });
  
  router.get("/dashboard", (req, res)=> {
    res.render("admindash");//
  });
  
module.exports = router;
