const express = require("express")
const app = express()

app.use(express.json())

app.get(`/`,(req,res)=>{
    res.send(`hello world`)
})

app.post(`/sendData`,(req,res)=>{
    res.send(`data recieved sucessfully`)
})

app.listen(3000,()=>{
    console.log(`data recieved`)
})