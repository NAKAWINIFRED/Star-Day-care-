const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")

//import Model
const Application = require("../models/Application");

router.get("/sitterregistration", connectEnsureLogin.ensureLoggedIn(),  (req, res) => {
  res.render("sitterregistration");
});

router.post("/sitterregistration",connectEnsureLogin.ensureLoggedIn(), async(req, res) => {
  try {
  const sitter = new Application(req.body);
  console.log(sitter);
  await sitter.save();
  res.redirect("/sitterslist");
  } catch (error) {
    res.status(400)
    console.log("error registering sitter", error)
  }
  
});

//fetching sitter
router.get("/sitterslist",connectEnsureLogin.ensureLoggedIn(), async (req , res) => {
  try {
    let sitters = await Application.find()
    res.render("sittermanagement" , {sitters:sitters})
  
  } catch (error) {
    res.status(400).send("unable to fetch sitters from db")
  }
 
})

// Delete sister
router.post("/deletesitter",connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    await Application.deleteOne({ _id: req.body.id });

    res.redirect("back");
  } catch (error) {
    res.status(400).send("unable to delete baby from the db");

    console.log("Error deleting baby", error);
  }
});

router.get("/sitterUpdate/:id",connectEnsureLogin.ensureLoggedIn(),async(req, res)=>{
  try {
    const sitterUpdate = await Application.findOne({_id: req. params.id})
    res.render("updatesitter", {sitter:sitterUpdate});
  } catch (error) {
    console.log("error finding sitter", error);
    res.status(400).send("Unable to find sitter")
  }
})

router.post("/sitterUpdate",connectEnsureLogin.ensureLoggedIn(), async(req, res)=>{
  try {
    await Application.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/sitterslist")
  } catch (error) {
    res.status(400).send("Unable to find sitter")
  }
})

//babies
const Registration = require("../models/Registration");

router.get("/childregistration", (req, res) => {
  res.render("registerchild");
});

router.post("/childregistration", async(req, res) => {
  try {
  const baby = new Registration(req.body);
  console.log(baby);
  await baby.save();
  res.redirect('/babieslist');
  } catch (error) {
    res.status(400)
    console.log("error registering baby", error)
  }
  
});

//fetching baby
router. get("/babieslist",async (req , res) => {
  try {
    let babies = await Registration.find()
    res.render("babymanagement" , {babies:babies})
  
  } catch (error) {
    res.status(400).send("unable to fetch sitters from db")
  }
 
})

// Delete baby
router.post("/deleteBaby",connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    await Registration.deleteOne({ _id: req.body.id });

    res.redirect("back");
  } catch (error) {
    res.status(400).send("unable to delete baby from the db");

    console.log("Error deleting baby", error);
  }
});

//updating baby
router.get("/babyUpdate/:id",connectEnsureLogin.ensureLoggedIn(),async(req, res)=>{
  try {
    const babyUpdate = await Registration.findOne({_id: req. params.id})
    res.render("updatebabies", {baby:babyUpdate});
  } catch (error) {
    console.log("error finding a baby", error);
    res.status(400).send("Unable to find baby")
  }
})

router.post("/babyUpdate", async(req, res)=>{
  try {
    await Registration.findOneAndUpdate({_id: req.query.id}, req.body);
    res.redirect("/babieslist")
  } catch (error) {
    res.status(400).send("Unable to find baby")
  }
})

router.get("/babyCheckin/:id", async (req, res) => {
  try {
    const sitters = await Application.find({attendance:'clockedin'});
    const checkinBaby = await Registration.findOne({ _id: req.params.id });
    res.render("babyCheckin", { baby: checkinBaby, sitters: sitters });
  } catch (error) {
    console.log("Error checking-in baby", error);
    res.status(400).sendStatus("unable to check-in baby");
  }
});
router.post("/babyCheckin", async (req, res) => {
  try {
    await Registration.findByIdAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/babiesPresent");
  } catch (error) {
    res.status(400).sendStatus("unable to check-in baby");
  }
});
router. get("/babiesPresent",async (req , res) => {
  try {
    let babies = await Registration.find()
    res.render("babiespresent" , {babies:babies})
  
  } catch (error) {
    res.status(400).send("unable to fetch sitters from db")
  }
 
})
router.get("/babyCheckout/:id", async (req, res) => {
  try {
    const sitters = await Application.find({attendance:'clockedout'});
    const checkinBaby = await Registration.findOne({ _id: req.params.id });
    res.render("babyCheckout", { baby: checkinBaby, sitters: sitters });
  } catch (error) {
    console.log("Error checking-in baby", error);
    res.status(400).sendStatus("unable to check-in baby");
  }
});
router.post("/babyCheckout", async (req, res) => {
  try {
    await Registration.findByIdAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/babiesPresent");
  } catch (error) {
    res.status(400).sendStatus("unable to check-in baby");
  }
});

module.exports = router;
