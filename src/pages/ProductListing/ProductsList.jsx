import { useState, useEffect } from "react";
import axios from "axios";
import { Card, FilterPane } from "../../components/components";
import { useFilter } from "../../contexts/FilterContext";
import { getProductList } from "../../components/FilterPane/FilterCompose";
import EmptyPage from "../../components/EmptyPage";
import "./productList.css";

export default function ProductsList() {
  const { filterState } = useFilter();
  const [productList, setProductList] = useState([]);
  const finalProductList = getProductList(filterState, productList);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProductList(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className=" ">
      <section className="prod-listing prod-child products-container">
        {finalProductList?.length === 0 ? (
          ""
        ) : (
          <h4 className="products-heading">
            Showing {finalProductList?.length} of {productList.length} products
          </h4>
        )}
        <FilterPane />
        <div className="products-list">
          {finalProductList?.length === 0 ? (
            <EmptyPage
              text={"Oops! No products found.."}
              icon={"shopping_bag"}
            />
          ) : (
            finalProductList?.map((product) => (
              <Card product={product} key={product._id} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
