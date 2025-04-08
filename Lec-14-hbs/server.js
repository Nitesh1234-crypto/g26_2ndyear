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
app.get("/blogpage",async(req,res)=>{
    let allBlogs= await Blog.find()
    // console.log(allBlogs.json())
    res.render("allblogs",{
        allBlogs:allBlogs
    })
})
app.get("/blogpage/blog/:id",async(req,res)=>{
    let {id} = req.params;
    let blog= await Blog.findById(id);
    res.render("oneBlog",{
        title:blog.title,
        content:blog.content
    })

})
app.get("/userpage",(req,res)=>{
    res.render("users",{
        name:"Nitesh",
        age:23,
        followers:["Ritik","fdsjfs","dsfdsf","eweqweeq"],
        posts:[{id:1,caption:"My goa pic", imageURL:"https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="},{id:1,caption:"My second pic", imageURL:"https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="}]
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