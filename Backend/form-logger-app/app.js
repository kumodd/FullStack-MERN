const express =require("express")
const app=express()
const morgan=require("morgan")
app.use(morgan('dev'))

//to read req.body data we need below two middleware(built-in by express)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//to use html code that we need view engine and we are using ejs view engine as below. views folder should have ejs files that act as html
app.set("view engine","ejs")
//to use css files that are static we need to use file from public folder and to load public folder below middleware needed
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.render('about')
})
app.get('/profile',(req,res)=>{
    res.render('profile')
})
app.get('/form',(req,res)=>{
    res.render('form-input')

})
app.post('/submit-data',(req,res)=>{
    // console.log(req.query); // data comes in query when method is get
    console.log(req.body)//data comes in body when method is post but it cannot be read by console so we need middleware to do that(line)
    res.send('data received')
})
app.listen(3000,()=>{
    console.log("Server is running")
})