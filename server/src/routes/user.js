const express=require('express')
<<<<<<< HEAD
const app = express.Router()



module.exports = app;
=======
const app=express.Router()
const UserController = require('../controller/user')
app.post('/register', UserController.registerNewUser)
app.post('/login', UserController.loginUser)
app.get('/users', UserController.getAllUser)


module.exports=app;
>>>>>>> ca387dfb35e96e282d4e10ef5f313461ee32a826
