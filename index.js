const express = require('express')
const connect = require('./config/connect')
const routes  = require('./routes/routes')

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8081;


app.use('/',routes)

app.post('/register' , async (req,res)=>{


    res.send("done");
})
app.get('/' , (req,res)=>{
    res.send("test");
})

app.listen(port,()=>{

    console.log("server working port 8081")
})



connect()

