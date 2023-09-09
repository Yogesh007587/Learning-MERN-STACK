const express=require("express");
const app=express();
const path= require("path");
const port=8080;

app.use(express.static("public"))
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
})
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/apple",(req,res)=>{

    res.send("this is an apple");
})
app.get("/ig/:username",(req,res)=>{
    const instaData=require("./data.json");
    let {username}=req.params;
    const data=instaData[username]
    // console.log(data);
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs")
    }
})
app.get("/rollDice",(req,res)=>{
    let num=Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal:num});
})
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
