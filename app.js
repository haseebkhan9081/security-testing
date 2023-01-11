//jshint esversion:6
require('dotenv').config(); 
const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const session = require('express-session');
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose"); 
const app= express();

app.use(express.static("public"));

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));



//creating a DataBase
mongoose.connect("mongodb://127.0.0.1:27017/userDB",{useNewUrlParser:true});

const userSchema=new mongoose.Schema({
    email:String,
    password:String
});

const User=mongoose.model("User",userSchema);
app.post("/register",function(req,res){
     

});
app.post("/login",function(req,res){
  
    
});
//==============================end DB================================
app.get("/",function(req,res){
    res.render("home");
})


app.get("/login",function(req,res){
    res.render("login");
})

app.get("/register",function(req,res){
    res.render("register");
})


app.listen(3000,function(){
console.log("server started on port 3000");
});
