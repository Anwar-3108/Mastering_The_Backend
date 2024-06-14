const mongoose = require('mongoose') ;
mongoose.connect("mongodb://127.0.0.1:27017/miniProject") ;

const userSchema = mongoose.Schema({
    name:String,
    username:String ,
    password:String,
    email:String,
    age:Number
});

module.exports = mongoose.model("user" , userSchema) ;
