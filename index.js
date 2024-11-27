const express = require("express")
const path = require("path")
const User = require("./models/user.model")
const {mongodbConnection} = require("./connection")
const userRoute = require("./routers/user.router")
const blogRoute = require("./routers/blog.route")
const { error } = require("console")
const { checkforAuthenticationCookie } = require("./middlewares/authentication.middleware")
const cookieParser = require('cookie-parser');


mongodbConnection(process.env.MONGO_URL)
.then(()=>{
   console.log("monodb connection sucesfully")
})
.catch((err)=>{
   console.log("mongodb fail connect",err)
})

const app = express();
const PORT = process.env.PORT || 8000

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))



app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/user",userRoute)
app.use(cookieParser())
app.use(checkforAuthenticationCookie("token"))

app.get("/",(req,res)=>{
   console.log("user-object",req.user)
   return res.render("home",{
      user:req.user,
   })
})

app.get("/blog",blogRoute)

app.listen(PORT,()=>{
   console.log(`http://localhost:${PORT}`)
})