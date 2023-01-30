const express = require('express')
const connect = require('./config/connect')
const { route } = require('./routes/routes')



const app = express()

app.use(express.json())


app.use('/',route)
app.listen(8081,()=>{

    console.log("server working port 8081")
})



connect()

