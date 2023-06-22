const express=require("express");
const app=express()
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
    console.log(101);
    res.render('index', function(err, html) {
        if(err) {console.log("Error")}
        res.send(html);
      });
      
}
    )
   

const port=2000
app.listen(port,()=>{
    console.log(`Listening on Port ${ port }`);
})