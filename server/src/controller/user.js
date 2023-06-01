const User = require ('../model/user')



  const registerNewUser =async (req,res)=>{
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "Registration Success"
      })
    }
  }

  const loginUser =async (req,res)=>{
    // console.log(req.body)
    const data = await User.findOne({phoneNumber:req.body.phoneNumber})
    if(data) {
      res.json({
        isLoggedIn:true,
        msg: "Login Successfully",
        id: data._id
      })
    }else{
      res.json({
        isLoggedIn:false,
        msg: "User does not exist"
      })
    }
  }

  module.exports ={registerNewUser,loginUser} 