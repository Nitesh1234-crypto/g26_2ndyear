const express = require("express");
const app= express();
const mongoose = require('mongoose');
const User = require("./model/user");
const Blog = require("./model/blog");
const userRouter=require("./routes/users");
app.use(express.json());
app.set('view engine', 'hbs');
app.use("/users",userRouter)
app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/blogpage",(req,res)=>{
    res.render("blog")
})
app.get("/userpage",(req,res)=>{
    res.render("users",{
        name:"Nitesh",
        age:23
    })
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