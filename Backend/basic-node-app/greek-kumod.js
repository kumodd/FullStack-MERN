const express=require('express')//like import
const app=express() //instance 
app.get('/',(req, res)=>{
    res.send("Hello Kumod")

})
app.get('/about',(req,res)=>{
    res.send("This is about page")
})
app.get("/contact-us",(req,res)=>{
    res.send("this is contact us page , contact at kumod353@gmail.com")

})
app.use((req,res,next)=>{
    res.status(404).send("Error 404: page not found")

})
app.listen(3000,()=>{
    console.log("Server is running at port http://localhost:3000")
})