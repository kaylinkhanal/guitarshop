<<<<<<< HEAD
const mongoose = require('mongoose');
//define shape of the document
const productSchema =  new mongoose.Schema({
    userName: String,
    password: String,
    confirmPassword: String
    });
  const Register = mongoose.model('Register', productSchema);

  
  module.exports = Register
=======
const mongoose= require('mongoose')

const userSchema =  new mongoose.Schema({
  email: {type: String}, 
  password:  {type: String}, 
  phoneNumber: {type: String}, 
  cartCount: {type: Number, default:0},
  favList: [{type: String}]
  });
  const User = mongoose.model('User', userSchema);

  
module.exports = User
>>>>>>> ca387dfb35e96e282d4e10ef5f313461ee32a826
