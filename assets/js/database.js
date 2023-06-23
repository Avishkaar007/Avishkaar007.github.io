const express = require("express")
const app=express()

app.get("/",(req,res) => {
    res.status(404);
    res.send("He");
    
})

app.listen(2000,(req,res) =>{
console.log("This is console");
})