const mongoose = require("mongoose")

async function mongodbConnection(url){
   await mongoose.connect(url);
}

module.exports={
   mongodbConnection,
}