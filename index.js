
require("dotenv").config()
const {connection}=require("./config/db")
const express=require("express");
const app=express();
const passport=require("./config/google-oauth")

const userRouter=require("./routes/users.route")
 
const productsRouter=require("./routes/products.route")

const todosRouter=require("./routes/todos.route")

const postsRouter=require("./routes/posts.route");


app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})



app.use("/user",userRouter)
app.use("/posts",postsRouter)
app.use("/products",productsRouter)
app.use("/todos",todosRouter)



app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/',
        failureRedirect: '/auth/google/failure',session:false
}),
 function (req,res){
    console.log(req.user)
 }
);



app.listen(8080,async(req,res)=>{
    try{
        await connection;
        console.log("Connected to database")
    }
    catch(error){
        console.log("couldn't connect to database")
        console.log(error)
    }
    console.log("Server is running")
})