const express = require('express')
const app = express()
const port=3000;

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)});

// app.use((req,res)=>{
//     console.log("request received");
    // let code="<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>"
    // res.send(code);
// });
app.get("/",  (req, res)=> {
    res.send('Hello World')
})
// app.get("/apple",(req,res)=>{
//     res.send({
//         name:"Apple",
//         color:"red"
//     });
// })
// app.get("*",(req,res)=>{
//     res.send("You are on wrong path");
// })
app.get("/ig/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`This account belongs to @${username} of id ${id}`);
})
// app.post("/",(req,res)=>{
//     res.send("you sent a post request");
// })
