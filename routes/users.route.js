const {Router} =require("express");
const {User}=require("../models/users.model")
const user=Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


user.post("/signup",async (req,res)=>{
  
    const {email, password} = req.body;
    // console.log(email,password)
  
    bcrypt.hash(password, 5, async function(err, hashed_password) {
       
        if(err){
            console.log(err)
            res.send("Something went wrong, please signup later")
        }
        else{
            
            const new_user = new User({
                email : email,
                password : hashed_password
            })
            await new_user.save()
            res.send("Sign up successfull")
        }
       
    });
})






user.get("/dashboard",(req,res)=>{
    const token = req.headers.authorization.split(" ")[1]
    console.log(token)
    try{
        var decoded = jwt.verify(token, 'abcd12345');
        const {email} = decoded
        res.send(`Welcome ${email}! Here is your Dashboard data......`)
    }
    catch(err){
        console.log(err)
        res.send("Please login again")
    }
})




user.post("/login",async(req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email})
    const hashed_password = user.password
    bcrypt.compare(password, hashed_password, function(err, result) {
        if(result){
            const token = jwt.sign({email : email}, 'abcd12345')
            res.send({"msg" : "Login successfull", "token" : token})
        }
        else{
            res.send("Login failed")
        }
    });
})

module.exports=user