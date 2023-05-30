const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())
const connectDb = require('./dbConnect/connection')
const productRoute=require('./routes/product')


connectDb()
app.use("/",productRoute)




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

