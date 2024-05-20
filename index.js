//Dependencies
const express = require("express");//for posting 
const mongoose = require("mongoose")//for mongodb
const path = require("path");
const passport = require("passport");
const expressSession = require("express-session")({
  secret:"secret",
  resave:false,
  saveUninitialized:false
})


require("dotenv").config();

// import register model with user details
const Register = require("./models/register");

//importing routes
const registrationRoutes = require("./routes/registrationRoutes")
const contactRoutes = require("./routes/contactRoutes")
const adminRegister = require("./routes/adminRegistrationRoutes")
const authenticationRoutes = require("./routes/authenticationRoutes")


//Instantiations
const app = express();

//Configurations
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology:true,
});

mongoose.connection
  .once("open" , ()=>{
    console.log("mongoose connection open");
  })
  .on("error", err => {
    console.error("connection error: ${err. message}");
  });

  app.set("view engine" , "pug");//setting the view engine to pug
  app.set("views" , path.join(__dirname, "views"));  //specify the directory where views are found


//Middleware
app.use(express.static(path.join(__dirname, "public")))//set directory for static files
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// //express session configs
 app.use(expressSession);
 app.use(passport.initialize());
 app.use(passport.session());

//  //passport configs
 passport.use(Register.createStrategy());
 passport.serializeUser(Register.serializeUser());
 passport.deserializeUser(Register.deserializeUser());


// routes



//using imported routes
app.use("/" , registrationRoutes );
app.use ("/" , contactRoutes);
app.use ("/", adminRegister )
app.use("/", authenticationRoutes)






// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});
//Bootstrapping Server
//Always the last line in your code
app.listen(5000, () => console.log('listening on port 5000')); 