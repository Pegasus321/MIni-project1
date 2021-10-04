const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const lodash = require('lodash');

const app =express();
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))


mongoose.connect("mongodb://localhost:27017/productDB")

const productSchema ={
  name:String,
  price:Number,
  info:String
};

const Product =mongoose.model("Product",productSchema);

const product1= new Product({
  name:"Front Wheel Bearing",
  price:100,
  info:"its a bearing"
})
const product2= new Product({
  name:"Clutch Disc",
  price:100,
  info:"its a bearing"
})
const product3= new Product({
  name:"Oil Seal",
  price:100,
  info:"its a bearing"
})
const product4= new Product({
  name:"Water Thermostat",
  price:100,
  info:"its a bearing"
})
const product5= new Product({
  name:"Clutch Cover",
  price:100,
  info:"its a bearing"
})
const product6= new Product({
  name:"Front Break Disc",
  price:100,
  info:"its a bearing"
})
const product7= new Product({
  name:"Carborator",
  price:100,
  info:"its a bearing"
})
const product8= new Product({
  name:"Induction Motor",
  price:100,
  info:"its a bearing"
})

// Product.insertMany([product1,product2,product3,product4,product5,product6,product7,product8])












app.get("/",function(req,res){
  res.render("home",{product1:product1.name,price1:product1.price,
    product2:product2.name,price2:product2.price,
    product3:product3.name,price3:product3.price,
    product4:product4.name,price4:product4.price,
    product5:product5.name,price5:product5.price,
    product6:product6.name,price6:product6.price,
    product7:product7.name,price7:product7.price,
    product8:product8.name,price8:product8.price,})
})

app.get("/mycart",function(req,res){
  res.render("mycart")
})

app.get("/about",function(req,res){
  res.render("about")
})

app.get("/login",function(req,res){
  res.render("login")
})
app.get("/product",function(req,res){
  res.render("product")
})
app.get("/product1",function(req,res){
  res.render("product1",{product1:product1.name,price1:product1.price,info1:product1.info})
})
app.get("/product2",function(req,res){
  res.render("product2",{product2:product2.name,price2:product2.price,info2:product2.info})
})
app.get("/product3",function(req,res){
  res.render("product3",{product3:product3.name,price3:product3.price,info3:product3.info})
})
app.get("/product4",function(req,res){
  res.render("product4",{product4:product4.name,price4:product4.price,info4:product4.info})
})
app.get("/product5",function(req,res){
  res.render("product5",{product5:product5.name,price5:product5.price,info5:product5.info})
})
app.get("/product6",function(req,res){
  res.render("product6",{product6:product6.name,price6:product5.price,info6:product6.info})
})
app.get("/product7",function(req,res){
  res.render("product7",{product7:product7.name,price7:product7.price,info7:product7.info})
})
app.get("/product8",function(req,res){
  res.render("product8",{product8:product8.name,price8:product8.price,info8:product8.info})
})
app.get("/checkout",function(req,res){
  res.render("checkout")
})

app.get("/bikes",function(req,res){
  res.render("bikes",{product1:product1.name,price1:product1.price,
    product2:product2.name,price2:product2.price,
    product3:product3.name,price3:product3.price,
    product4:product4.name,price4:product4.price,
    product5:product5.name,price5:product5.price,
    product6:product6.name,price6:product6.price,
    product7:product7.name,price7:product7.price,
    product8:product8.name,price8:product8.price})
})

app.get("/scooter",function(req,res){
  res.render("scooter",{product1:product1.name,price1:product1.price,
    product2:product2.name,price2:product2.price,
    product3:product3.name,price3:product3.price,
    product4:product4.name,price4:product4.price,
    product5:product5.name,price5:product5.price,
    product6:product6.name,price6:product6.price,
    product7:product7.name,price7:product7.price,
    product8:product8.name,price8:product8.price})
})

app.get("/contact",function(req,res){
  res.render("contact")
})






app.post("/product",function(req,res){
  const addtocart =req.body.addtocart;
  res.redirect("/mycart")
})





















app.listen(3000,function(){
  console.log("Server started");
})
