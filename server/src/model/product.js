const mongoose = require('mongoose');
const productSchema =  new mongoose.Schema({
    productName: String, // String is shorthand for {type: String}
    productPrice: String,
    productDescription: String,
    productImage: {type: String, default: 'https://static-01.daraz.com.np/p/629f0a3e5e8d025edc31be65634bfdca.jpg' }
  });
  const Product = mongoose.model('Product', productSchema);

  module.exports =Product
