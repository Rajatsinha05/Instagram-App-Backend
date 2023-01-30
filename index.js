const express = require('express')



const app = express()

app.use(express.json())


app.listen(8081,()=>{

    console.log("server working port 8081")
})


