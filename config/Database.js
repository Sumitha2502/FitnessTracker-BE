const mongoose = require('mongoose')
require("dotenv").config() ; //Load Env variable

//Connect to Database
const ConnectDB = async () => {
   try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("CONNECTED");
    
   } catch (error) {
    console.log("There was an error in DB Connection :",error)
   }
}

module.exports = ConnectDB

