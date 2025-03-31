const mongoose =require("mongoose");

const blogSchema= new mongoose.Schema({
    title:String,
    content:String,
    author:{
        type: String,
        require:true
    },
    data:{
        type:Date,
        default: Date.now()
    }
})

module.exports=mongoose.model("Blog",blogSchema);
