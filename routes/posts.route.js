const {Router} =require("express");
const {Post}=require("../models/posts.module")
const posts=Router();

 posts.get("/",(req,res)=>{
    res.send("Get request data")
 })

 posts.post("/create",(req,res)=>{
    
})

posts.put("/:id",(req,res)=>{

})

posts.patch("/:id",(req,res)=>{

})

posts.delete("/:id",(req,res)=>{

})

module.exports=posts
