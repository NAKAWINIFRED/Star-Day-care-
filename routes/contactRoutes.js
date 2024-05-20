//introduce express
const express = require("express");

//Accesing the router function in express
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")



//introduce the model
const Contact = require("../models/Contact");


//creating the route
router.get("/contact", (req, res)=> {
    res.render("Contact");//
});

router.post("/contact",connectEnsureLogin.ensureLoggedIn(),async (req, res)=>{
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
  
  router.get("/dashboard",connectEnsureLogin.ensureLoggedIn(), (req, res)=> {
    res.render("admindash");//
  });
  router.get("/dollstore", (req, res)=> {
    res.render("dollstore");//
  });
  // router.get("/checkin", (req, res)=> {
  //   res.render("checkout");//
  // });
  
  
module.exports = router;
