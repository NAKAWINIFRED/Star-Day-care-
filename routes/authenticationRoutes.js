// Introducing express
const express = require("express");

// Accessing the router function in express
const router = express.Router();
const passport = require("passport");

// Registering login route
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login",passport.authenticate("local", { failureRedirect: "/login" }),(req, res) => {
    req.session.user = req.user;
    if (req.user) {
      res.redirect("/dashboard");
    } else {
        ("You're not a registered user");
    }
  }
);

// Logout route
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        console.log("............", error);
        return res.status(500).send("error logging out");
      }

      res.redirect("/login");
    });
  }
});
module.exports = router;