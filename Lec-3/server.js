const express = require("express");
const app= express();

// app.get("/getProfile",(req,res)=>{
//     const {username,age} = req.query;
//     res.send("Profile"+ " "+username + " "+age);
// })
// app.get("/profile/:username",(req,res)=>{
//     const {username} = req.params;
//     res.send("Hi"+ " "+username);
// })
// app.get("/profile/:username/:age",(req,res)=>{
//         const {username,age} = req.params;
//         res.send("Hi"+ " "+username + " "+ age);
//     })


//continue
let usersdata= [
    {
        id:1,
        name:"Nitesh",
        address:"Delhi"
    },
    {
        id:2,
        name:"Ritil",
        address:"faridabad"
    },
    {
        id:3,
        name:"vinit",
        address:"alwar"
    },

]
app.get("/allusers",(req,res)=>{
   res.send(usersdata);
})

app.get("/getuserbyId",(req,res)=>{
    // let id = req.query.id
    let {id} = req.query
    for(let i =0;i<usersdata.length;i++){
        if(usersdata[i].id ==id){
           return res.send(usersdata[i]);
        }
    }
    res.send("User not found")
    
})











app.listen(2345,()=>{
    console.log("server started")
})