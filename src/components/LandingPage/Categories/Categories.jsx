import { Link } from "react-router-dom"
import "./Categories.css"
export default function Categories(){
    return (
        <section className="categories-base">
        <div className="grids-5">
            <div className="grid-child">
                <img src={process.env.PUBLIC_URL + 'assets/Categories_Images/planners.webp'} alt="Category-Planners"/>
                <div className="overlay-text grey-badge"><Link className="link-text" to="/products">Planners</Link> </div>
            </div>
            <div className="grid-child">
                <img src={process.env.PUBLIC_URL + 'assets/Categories_Images/journals.jpg'} alt="Category-Journals"/>
                <div className="overlay-text grey-badge"><Link className="link-text" to="/products">Journals</Link></div>
            </div>
            <div className="grid-child">
                <img src={process.env.PUBLIC_URL + 'assets/Categories_Images/washiTapes.webp'}
                    alt="Category-WashiTapes"/>
                <div className="overlay-text grey-badge"><Link className="link-text" to="/products">Washi Tapes</Link></div>
            </div>
            <div className="grid-child">
                <img src={process.env.PUBLIC_URL + 'assets/Categories_Images/pens.jpg'} alt="Category-Pens"/>
                <div className="overlay-text grey-badge"><Link className="link-text" to="/products">Pens</Link></div>
            </div>
            <div className="grid-child">
                <img src={process.env.PUBLIC_URL + 'assets/Categories_Images/stamps.webp'} alt="Category-Stamps"/>
                <div className="overlay-text grey-badge"><Link className="link-text" to="/products">Stamps</Link></div>
            </div>
        </div>
    </section>
    )
}