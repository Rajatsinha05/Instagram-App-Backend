const {Router} =require('express')
const User = require('../models/User.Schema')


const routes =Router()


routes.get('/',(req,res) => {

    res.send("routes")
})


routes.post('/users/register',async(req,res) => {



   let data = await User.create(req.body)
   res.send(data)
})


module.exports=routes

