<<<<<<< HEAD
const Register = require('../model/user')


const newUserDetails=  async (req,res)=>{
    const data = await Register.create(req.body)
    if(data) {
      res.json({
        msg: "registration success"
=======
const User = require('../model/user')

 const registerNewUser=  async (req,res)=>{
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "registration succes"
>>>>>>> ca387dfb35e96e282d4e10ef5f313461ee32a826
      })
    }
  }

<<<<<<< HEAD
module.exports = newUserDetails
=======
 const loginUser=  async (req,res)=>{
 console.log(req.body)
  const data = await User.findOne({phoneNumber: req.body.phoneNumber})
  if(data){
    res.json({
    isLoggedIn: true,
    msg:  "success"
    })
  }else{
    res.json({
      isLoggedIn: false,
      msg: "user doesnnot exist"
    })
  }

}
  module.exports = {registerNewUser,loginUser}
>>>>>>> ca387dfb35e96e282d4e10ef5f313461ee32a826
