import { Card, FilterPane } from "../../components/components"
import {useState, useEffect} from 'react'
import axios from "axios"
import "./productList.css"

export default function ProductsList() {
  const [prodList, setProdList] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () =>{
      const response = await axios.get('/api/products') 
      setProdList(response.data.products)
    };
    fetchProducts()
  },[])

  return (
    <div className=" ">
      <section className="prod-listing prod-child products-container">
        <FilterPane/>
        <div className="products-list">
          {prodList.map(product => (
            <Card products={product} key={product._id}/>
          ))}
        </div>
      </section>
    </div>
  )
}
