import { Link } from "react-router-dom";
import "./Carousel.css"
import { carousel } from "../../../backend/db/carousel";

export default function Carousel(){
   
    return (
        <section className="carousel-base grid-carousel carousel-slides">
            {carousel.map(({carouselName, carouselSubtitle, carouselImg})=>
            (
                <div className="slide" key={carouselName}>
                    <div className="carousel-child carousel-img">
                        <img src={carouselImg} alt={carouselName} className="img"/>
                    </div>
                    <div className="carousel-child grid-child grid-text">
                        <h1>{carouselName}</h1>
                        <h2>{carouselSubtitle}</h2>
                        <button className="pri-btn">
                            <Link to="/products">Shop Now</Link>
                        </button>
                        <button className="sec-btn">
                            <Link to="/wishlist" className="link-in-btn">Wishlist</Link>
                        </button>
                    </div>
            </div>  
            ))}
    </section>
    )
}