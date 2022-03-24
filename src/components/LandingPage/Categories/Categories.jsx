import { Link } from "react-router-dom"
import "./Categories.css"
import { categories } from "../../../backend/db/categories"

export default function Categories(){
    return (
        <div className="categories-base">
            {categories.map(({categoryName, categoryImage}) => (
                <div key={categoryName}>
                    <div className="category">
                        <img src={categoryImage} alt={categoryName}/>
                        <div className="overlay-text">
                            <Link className="link-text" to="/products">{categoryName}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}