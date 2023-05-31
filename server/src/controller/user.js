const Register = require('../model/user')


const newUserDetails=  async (req,res)=>{
    const data = await Register.create(req.body)
    if(data) {
      res.json({
        msg: "registration success"
      })
    }
  }

module.exports = newUserDetails