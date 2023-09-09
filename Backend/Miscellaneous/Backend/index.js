const express=require("express");
const app=express();
const port =8080;

app.use(express.urlencoded({extended:true}))
app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`standard GET response. Welcome @${user}!`);
})
app.post("/register",(req,res)=>{
    let {user1,password1}=req.body;
    res.send(`Standard POST response. Welcome @${user1}!`);
})
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
})