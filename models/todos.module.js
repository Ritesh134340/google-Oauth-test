const mongoose=require("mongoose");

const todosSchema=mongoose.Schema({
    "id":Number,
    "title":String,
    "Status":Boolean
})

const Todo=new mongoose.model("todo",todosSchema)

module.exports={Todo}