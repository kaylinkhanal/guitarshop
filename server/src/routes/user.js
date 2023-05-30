const express=require('express')
const app=express.Router()
const RegisterController = require('../controller/user')

app.post('/register',RegisterController.registerNewUser)


module.exports=app;