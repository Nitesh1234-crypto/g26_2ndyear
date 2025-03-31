const express = require("express");
const app= express();
const mongoose = require('mongoose');
const User = require("./model/user");
const Blog = require("./model/blog");

app.use(express.json());


app.post("/users",async (req,res)=>{
    const {name,email,password} = req.body;
    let newUser=new User({name:name,email:email,password:password});
    await newUser.save();
    // console.log("hello");
    res.send("user added successfully")

})

app.get("/users",async(req,res)=>{
    let allusers=await User.find()
    res.send(allusers)
})
app.get("/users/:id",async(req,res)=>{
    let {id} = req.params;
    let user=await User.findById(id);
    res.send(user);
})
app.delete("/users/:id",async(req,res)=>{
    let {id}= req.params;
    await User.deleteOne({_id:id});
    res.send("user deleted")

})
app.put("/users/:id",async(req,res)=>{
    let {id} = req.params;
    let updateUser=await User.findById(id);
    let {name,email,password} = req.body;
    updateUser.name=name;
    updateUser.email=email;
    updateUser.password=password;
    await updateUser.save();
    res.send("user updated")
})


app.post("/blogs",async(req,res)=>{
    let {title,content,author} = req.body;
    let newBlog= new Blog({
        title:title,
        content:content,
        author:author
    })
    await newBlog.save()
    res.send("blog added!!")
})




mongoose.connect('mongodb://127.0.0.1:27017/g26mondb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
app.listen(4444,(req,res)=>{
    console.log("server started")
})