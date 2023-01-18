const {Router} =require("express");
const {Todo}=require("../models/todos.module")
const todos=Router();

 todos.get("/",(req,res)=>{

 })

 todos.post("/create",(req,res)=>{
    
})

todos.put("/:id",(req,res)=>{

})

todos.patch("/:id",(req,res)=>{

})

todos.delete("/:id",(req,res)=>{

})

module.exports=todos