import { Link } from "react-router-dom";
import "./Carousel.css"

export default function Carousel(){
   
    return (
        <section className="carousel-base grid-carousel carousel-slides">
        <div className="slide">
            <div className="carousel-child carousel-img"><img
                    src={process.env.PUBLIC_URL + 'assets/Carousel_Images/carousel.png'}
                    alt="" className="img"/></div>
            <div className="carousel-child grid-child grid-text">
                <h1>Planners - Pastel Collection</h1>
                <h3>Starting at Rs. 399</h3>
                <button className="pri-btn">
                   <Link to="/products">Shop Now</Link>
                </button>
                <button className="sec-btn">
                    <a href="/docs/wishlist.html" className="link-in-btn">Wishlist</a>
                </button>
            </div>
        </div>
        <div className="slide">
            <div className="carousel-child carousel-img"><img
                    src={process.env.PUBLIC_URL + 'assets/Carousel_Images/carousel2.png'}
                    alt="" className="img"/></div>
            <div className="carousel-child grid-child grid-text">
                <h1>Washi Tapes - Celestial Collection</h1>
                <h3>Starting at Rs. 699</h3>
                <button className="pri-btn">
                    <Link to="/products">Shop Now</Link>
                </button>
                <button className="sec-btn">
                    <a href="/docs/wishlist.html" className="link-in-btn">Wishlist</a>
                </button>
            </div>
        </div>
        <div className="slide">
            <div className="carousel-child carousel-img"><img
                    src={process.env.PUBLIC_URL + 'assets/Carousel_Images/carousel3.png'}
                    alt="" className="img"/></div>
            <div className="carousel-child grid-child grid-text">
                <h1>ZODIAC SERIES</h1>
                <h3>Planners and Journals with Zodiac Sign Covers</h3>
                <button className="pri-btn">
                    <Link to="/products">Shop Now</Link>
                </button>
                <button className="sec-btn">
                    <a href="/docs/wishlist.html" className="link-in-btn">Wishlist</a>
                </button>
            </div>
        </div>
      
    </section>
    )
}