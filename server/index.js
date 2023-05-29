const express = require('express')
const app = express()
const cors =require('cors')
require('dotenv').config()
///parse body
app.use(express.json())
app.use(cors())

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/guitarshopdb');

//define shape of the document
const productSchema =  new mongoose.Schema({
  productName: String, // String is shorthand for {type: String}
  productPrice: String,
  productDescription: String,
  productImage: {type: String, default: 'https://thumbs.dreamstime.com/b/guitar-16517374.jpg' }
});
const Product = mongoose.model('Product', productSchema);


app.post('/products',async (req,res)=>{
  const data = await Product.create(req.body)
  if(data) {
    res.json({
      msg: "product add success"
    })
  }
})


app.get('/products',async (req,res)=>{
  const data = await Product.find()
  res.json({productList:data})
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

