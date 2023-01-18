const mongoose=require("mongoose");

const productsSchema=mongoose.Schema({
   "id":Number,
   "title":String,
   "description":String
})

const Product=new mongoose.model("product",productsSchema)

module.exports={Product}