const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
   tite:{
      type:String,
      required:true,
   },
   body:{
      type:String,
      required:true,
   },
   coverImageUrl:{
      type:String,
   },
   createdBy:{
      type:Schema.Types.ObjectId,
      ref:"user",
   }
},{timestamps:true})


const Blog = mongoose.model("blog",blogSchema)

module.exports = Blog