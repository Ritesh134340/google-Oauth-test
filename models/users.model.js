const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
   "id":Number,
   "email":String,
   "password":String
})

const User=new mongoose.model("user",userSchema)

module.exports={User}