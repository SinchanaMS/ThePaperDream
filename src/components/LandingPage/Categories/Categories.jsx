import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useFilter } from "../../../contexts/FilterContext"
import "./Categories.css"

export default function Categories(){
    const {filterDispatch} = useFilter()
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchCategories = async () => {
            try{
                const response = await axios.get('/api/categories')
                setCategories(response.data.categories)
            } catch(error) {
                console.log(error)
            }
        };
        fetchCategories()
    }, [])

    const categorizedList = (categoryName) => {
        filterDispatch({type:"CATEGORY", payload: categoryName})
        navigate("/products")
    }  

    return (
        <div className="categories-base">
            {categories?.map(( { categoryName, categoryImage } ) => (
                <div key={categoryName} onClick={() => categorizedList(categoryName)}>
                    <div className="category">
                        <img src={categoryImage} alt={categoryName}/>
                        <div className="overlay-text">
                            <Link className="link-text" to={`/products`}>{categoryName}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}