const express=require('express')
const app = express.Router()
const RegisterController = require('../controller/user')
app.post('/register', RegisterController.newUserDetails)



module.exports = app;
