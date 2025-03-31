const mongoose =require("mongoose");

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:{
        type: String,
        require:true
    }
})

module.exports=mongoose.model("User",userSchema);
