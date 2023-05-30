import React, {useState, useEffect} from 'react';
import Card from '../components/Card';

 
const Home = () => {
  const [productsList, setProductsList] = useState([])
  const initialValues={
    productName: '',
    productPrice: '',
    productDiscription: '',
  }

  useEffect(() => {
    //Runs only on the first render
    fetchProducts()
  }, []);
  const fetchProducts = async() => {
    try{
      const res= await fetch('http://localhost:3001/products')
    const data = await res.json()
    setProductsList(data.productList)
  
    }catch(err){
      alert("something went wrong while fetching")
    }
  }

  return(
    <div>
   
      <div >
        <h1>Products</h1>
              <div className="Products">
              { productsList.length> 0 ? productsList.map((item)=>{
                return <Card item={item}/>
              }) : "loading"}
              </div>
             
      </div>
    </div>
  )
}

 export default Home