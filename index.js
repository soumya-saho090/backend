require('dotenv').config()
const express=require('express');
const app=express()
const  port=5000

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/twitter',(req,res)=>{
    res.send("DO YOUR WORK")
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})