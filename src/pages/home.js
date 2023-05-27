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
    const res= await fetch('http://localhost:3001/products')
    const data = await res.json()
    setProductsList(data.productList)
    console.log(data)
  }

  return(
    <div>
   
      <div >

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