const express = require('express')
const connect = require('./config/connect')



const app = express()

app.use(express.json())
 app.get('/',(req, res) =>{


    res.send("woeking")
 })

app.listen(8081,()=>{

    console.log("server working port 8081")
})

connect()

