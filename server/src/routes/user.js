const express=require('express')
<<<<<<< HEAD
const app = express.Router()
const RegisterController = require('../controller/user')
app.post('/register', RegisterController.newUserDetails)



module.exports = app;
=======
const app=express.Router()
const UserController = require('../controller/user')
app.post('/register', UserController.registerNewUser)
app.post('/login', UserController.loginUser)


module.exports=app;
>>>>>>> ca387dfb35e96e282d4e10ef5f313461ee32a826
