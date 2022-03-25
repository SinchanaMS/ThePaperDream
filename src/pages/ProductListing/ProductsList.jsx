import {products} from "../../backend/db/products"
import { Card, FilterPane } from "../../components/components"
import "./productList.css"

export default function ProductsList() {
  return (
    <div className=" ">
      <section className="prod-listing prod-child products-container">
        <FilterPane/>
        <div className="products-list">
          {products.map(product => (
            <Card products={product} key={product._id}/>
          ))}
        </div>
      </section>
    </div>
  )
}
