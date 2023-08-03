import express from "express";
const app=express();
app.listen(3000,()=>{
    console.log(`Running on Port ${3000}`)
})
app.get("/",(req,res)=>{
    res.send("Get Running Correctly")
})
app.post("/",(req,res)=>{
    res.send("Post Running Correctly")
})
app.put("/",(req,res)=>{
    res.send("Post Running Correctly")
})