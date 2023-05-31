const mongoose = require('mongoose');
//define shape of the document
const productSchema =  new mongoose.Schema({
    userName: String,
    password: String,
    confirmPassword: String
    });
  const Register = mongoose.model('Register', productSchema);

  
  module.exports = Register