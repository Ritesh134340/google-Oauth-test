const {Router} =require("express");
const {Product}=require("../models/products.module")
const products=Router();

 products.get("/",(req,res)=>{

 })

 products.post("/create",(req,res)=>{
    
})

products.put("/:id",(req,res)=>{

})

products.patch("/:id",(req,res)=>{

})

products.delete("/:id",(req,res)=>{

})

module.exports=products