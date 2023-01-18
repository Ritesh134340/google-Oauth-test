const mongoose=require("mongoose");

const postsSchema=mongoose.Schema({
   "id":Number,
   "title":String,
   "description":String
})

const Post=new mongoose.model("post",postsSchema)

module.exports={Post}