const express = require("express")

const router = express.Router()

router.get("/addblog",(req,res)=>{
   return res.render("addblog",{
      user:res.user
   })
})

module.exports = router