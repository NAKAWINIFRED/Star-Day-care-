const express = require("express");
const router = express.Router();

//import Model
const Application = require("../models/Application");

router.get("/sitterregistration",  (req, res) => {
  res.render("sitterregistration");
});

router.post("/sitterregistration", async(req, res) => {
  try {
  const sitter = new Application(req.body);
  console.log(sitter);
  await sitter.save();
  res.send("sitter registered")
  } catch (error) {
    res.status(400)
    console.log("error registering sitter", error)
  }
  
});

//fetching sitter
router. get("/sitterslist" ,async (req , res) => {
  try {
    let sitters = await Application.find()
    res.render("sittermanagement" , {sitters:sitters})
  
  } catch (error) {
    res.status(400).send("unable to fetch sitters from db")
  }
 
})

router. get("/delete" ,async (req , res) => {
  try {
     await Application.deleteOne({id:req.body.id});
   res.redirect("back")
  
  } catch (error) {
    res.status(400).send("Sorry! something wrong happened")
    console.log("Error deleting sitter" , error)
  }
 
})

const Registration = require("../models/Registration");

router.get("/childregistration", (req, res) => {
  res.render("registerchild");
});

router.post("/childregistration", async(req, res) => {
  try {
  const baby = new Registration(req.body);
  console.log(baby);
  await baby.save();
  res.send("baby registered")
  } catch (error) {
    res.status(400)
    console.log("error registering baby", error)
  }
  
});

//fetching sitter
router. get("/babieslist" ,async (req , res) => {
  try {
    let babies = await Registration.find()
    res.render("babymanagement" , {babies:babies})
  
  } catch (error) {
    res.status(400).send("unable to fetch sitters from db")
  }
 
})

router. get("/delete" ,async (req , res) => {
  try {
     await Registration.deleteOne({id:req.body.id});
   res.redirect("back")
  
  } catch (error) {
    res.status(400).send("Sorry! something wrong happened")
    console.log("Error deleting baby" , error)
  }
 
})

module.exports = router;
