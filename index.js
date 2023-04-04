const express = require('express')

let connect =require('./conect')
let bookCollection = require('./schema')
const conect = require('./conect')

let app = express()

app.use(express.json())
app.get("/home",(req,res)=>{
    res.send("send")
})
app.post("/",async(req,res)=>{
   bookCollection.create(req.body) 
    let pricelow=await bookCollection.find().sort({"price":-1})
    res.send(pricelow)
})
app.post("/",async(req,res)=>{
    bookCollection.create(req.body) 
     let pricelow=await bookCollection.find().sort({"price":-1})
     res.send(pricelow)
 })
app.listen(8080,()=>{
    console.log("8080 is running");
    conect()
})
 