const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))
let usersData=[]
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})
app.post("/adduser",(req,res)=>{
    let {name,email,password} = req.body;
    let newUser={
        name:name,
        email:email,
        password:password
    }
    usersData.push(newUser);
    res.send(usersData);
    // console.log(name,email,password)
})
app.get("/alluser",(req,res)=>{
    res.send(usersData);
})


app.listen(5643,()=>{
    console.log("server started");
})