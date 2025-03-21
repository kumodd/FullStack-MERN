const express=require("express")
const app=express()
const PORT=5050
//middleware
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Home")
})

//mounting 
app.use('/api/products', require('./routes/product.routes'));

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})