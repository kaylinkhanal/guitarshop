const User = require ('../model/user')



  const registerNewUser =async (req,res)=>{
    const data = await User.create(req.body)
    if(data) {
      res.json({
        msg: "Registration Success"
      })
    }
  }

  module.exports ={registerNewUser}