const express = require('express')
const connect = require('./config/connect')
const routes  = require('./routes/routes')

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.use('/',routes)
app.listen(8081,()=>{

    console.log("server working port 8081")
})



connect()

