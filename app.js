const express=require("express")
const app=express();
app.use('/',(req,res) =>{
    res.send("i got it");
})
app.get('/',(req,res)=>{
    res.status(200).send('home page');
})
app.get('/about',(req,res)=>{
    res.send('<h1> about page </h1>');
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000');
})