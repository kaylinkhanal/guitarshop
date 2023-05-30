const mongoose = require('mongoose');
const userSchema =  new mongoose.Schema({
    userName: {type:String}, 
    password: {type:String},
    email: {type:String},
    cartCount: {type:Number},
    favList: [{type:String}]
  });
  const User = mongoose.model('User', userSchema);

  module.exports =User
