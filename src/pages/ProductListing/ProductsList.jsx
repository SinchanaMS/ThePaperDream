import {useState, useEffect} from "react"
import axios from "axios"
import "./productList.css"
import { Card, FilterPane } from "../../components/components"
import { useFilter } from "../../contexts/FilterContext"
import { getProductList } from "../../components/FilterPane/FilterCompose"


export default function ProductsList() {
  const {filterState} = useFilter()
  const [productList, setProductList] = useState([])
  
    useEffect(() => {
      const fetchProducts = async () =>{
          try{
        const response = await axios.get('/api/products') 
        setProductList(response.data.products)
      }catch(error){
          console.log(error)
      }};
      fetchProducts()
    },[])

  const finalProductList = getProductList(filterState, productList)

  return (
    <div className=" ">
      <section className="prod-listing prod-child products-container">
        <p className="products-heading">Showing {finalProductList.length} of {productList.length} products</p>
        <FilterPane/>
        <div className="products-list">
          {finalProductList.map(product => (
            <Card products={product} key={product._id}/>
          ))}
        </div>
      </section>
    </div>
  )
}
