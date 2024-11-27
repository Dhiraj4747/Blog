const {Router} = require("express")
const User = require("../models/user.model");
const { render } = require("ejs");

const router = Router();

router.get("/signin",(req,res)=>{
   return res.render("signin")
})

router.get("/signup",(req,res)=>{
   return  res.render("signup")
})

router.post("/signup",async (req,res)=>{
   const {fullName,email,password} = req.body
   await User.create({
      fullName,
      email,
      password
   })
   return res.redirect("/")
})

// router.post("/signin",async (req,res)=>{
//    const {email,password} = req.body
//    const user = await User.matchPassword(email, password)

//    console.log("user",user)
//    return res.redirect("/")
// })

router.post('/signin', async (req, res) => {
   const { email, password } = req.body;
 
   try {
     // Attempt to match password
     const token = await User.matchPasswordAndGenerateToken(email, password);

     return res.cookie("token",token).redirect("/")
     // Handle successful match
     
   } catch (error) {
     // Catch the error, log it, and respond with an error message
     return res.render("signin",{
      error : "Incorrect email or Password"
     })
   }
 });

module.exports= router;