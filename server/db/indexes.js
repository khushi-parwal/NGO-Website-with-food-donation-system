const express=require("express")
const app=express()
const path=require("path")
const collection=require("./mongodb")

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)

app.get("/contact1",(req,res)=>{
    res.render("contact1")
})

app.post("/contact1",async(req,res)=>{
    const data={
        name:req.body.name,
        phone:req.body.phone,
        message:req.body.message
    }
    await collection.insertMany([data])
    res.send("home");
})


app.listen(3000),()=>{
    console.log("port connected");
}
