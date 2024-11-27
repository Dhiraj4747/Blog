const JWT = require("jsonwebtoken")
const secrete = "dhiraj@123"

function creteTokenforUser(user){
   // Define the payload (data) that will be embedded in the token
   const payload = {
      _id : user._id,
      email : user.email,
      profileImageURL : user.profileImageURL,
      role: user.role
   }
   const token = JWT.sign(payload,secrete,{expiresIn:"1d"})

   return token;
}

function validateToken(token){
   const payload = JWT.verify(token,secrete)
   return payload;
}


module.exports = {
   creteTokenforUser,
   validateToken
}