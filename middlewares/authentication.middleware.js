const { TokenExpiredError } = require("jsonwebtoken")
const { validateToken } = require("../services/authntication")

function checkforAuthenticationCookie(cookieName){
   return (req,res,next)=>{
      const tokencookievalue = req.cookies[cookieName]
      if(!TokenExpiredError){
         next()
      }
      try {
         const userpayload = validateToken(tokencookievalue);
         req.user= userpayload
      
      } catch (error) {
         
      }
      next();
   }
   
}

module.exports={
   checkforAuthenticationCookie,
}