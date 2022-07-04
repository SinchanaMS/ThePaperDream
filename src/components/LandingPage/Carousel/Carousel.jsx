import { Link, useNavigate } from "react-router-dom";
import { carousel } from "../../../backend/db/carousel";
import { useFilter } from "../../../contexts/FilterContext";
import "./Carousel.css";

export default function Carousel() {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();
  const categorizedList = (categoryName) => {
    filterDispatch({ type: "CATEGORY", payload: categoryName });
    navigate("/products");
  };

  return (
    <section className="carousel-base grid-carousel carousel-slides">
      {carousel.map(
        ({ carouselName, carouselSubtitle, carouselImg, categoryName }) => (
          <div className="slide" key={carouselName}>
            <div className="carousel-child carousel-img">
              <img src={carouselImg} alt={carouselName} className="img" />
            </div>
            <div className="carousel-child grid-child grid-text flex-centered flex-column">
              <h1>{carouselName}</h1>
              <h2>{carouselSubtitle}</h2>
              <button className="pri-btn">
                <Link
                  to="/products"
                  onClick={() => categorizedList(categoryName)}
                >
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
        )
      )}
    </section>
  );
}
