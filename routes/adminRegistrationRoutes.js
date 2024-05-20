//introduce express
const express = require("express");

//Accesing the router function in express
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")


//introduce the model
const UserRegister = require("../models/register");


//creating the route


router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  try {
    const adminSignup = new UserRegister(req.body);
    await UserRegister.register(adminSignup, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect("/signup");
    });
  } catch (error) {
    res.status(400).send("user not registered");
    console.log(error);
  }
});

module.exports = router;