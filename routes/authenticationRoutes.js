const express = require("express");
 const router = express.Router();

// //importing model
 //const Register = require("../models/Register")

// router.get("/signup", (req, res)=>{
//     res.render("signup");
// });

// router.post("/signup", async (req, res)=>{
//     try {
//     const user = new Register(req.body);
//     await Register.register(user,req.body.password,(err)=>{
//         if(err){
//             throw err
//         }
//         res.redirect("/sitterregistration")
//     })
    
//     } catch (error) {
//       res.status(400).send("Signup failed")
//       console.log(error)
//     }
    
// })
// module.exports = router;
router.post("/register", async(req, res) => {
    try {
        const adminRegister = new Register(req.body);
        console.log(adminRegister)
        await Register.register(adminRegister,req.body.password,(err)=>{
            if(err){
                throw err
            }
            res.redirect("/login")
        })
    } catch (error) {
        res.status(400).send("user not registered")
        console.log(error)
    }
});

router.get("/login", (req, res) => {
    res.render("login")
})
router.post("/login", passport.authenticate("local",{failureRedirect: "/login"}), (req, res)=> {
    req.session.user = req.user
    console.log(req.body)
    if(req.user.role === "admin"){
        res.redirect("/admindash")
    }
    // else if (req.user.role === "sitter"){
    //     res.redirect("/sitterdash")
    // }
    else {res.send("you dont have a role in the system")}
 })