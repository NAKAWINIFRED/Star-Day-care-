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

module.exports = router;
