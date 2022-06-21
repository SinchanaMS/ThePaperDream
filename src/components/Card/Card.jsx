import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

export default function Card({ product }) {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const {
    prodimage,
    title,
    description,
    price: { original, discounted, discount },
    rating,
  } = product;

  return (
    <div>
      <div className="card-container shadow">
        <div className="card-child card-header">
          <img className="card-img" src={prodimage} alt={title} />
          <h4 className="card-title">{title}</h4>
          <h5>Rating: {rating}/5</h5>
          <div className="card-subtitle price-details">
            <p className=""> Rs.{discounted} </p>
            <p className="original">Rs.{original} </p>
            <p className="discount"> {discount}% OFF</p>
          </div>
        </div>

        {wishlist.find((item) => item._id === product._id) ? (
          <button
            className="card-badge card-badge-def badge-right products-badge"
            onClick={() => removeFromWishlist(product)}
          >
            <span className="material-icons md-24 material-icons-outlined">
              favorite
            </span>
          </button>
        ) : (
          <button
            className="card-badge card-badge-def badge-right products-badge"
            onClick={() => addToWishlist(product)}
          >
            <span className="material-icons md-24 material-icons-outlined">
              favorite_border
            </span>
          </button>
        )}

        <div className="card-child card-body">
          <hr />
          <p className="card-desc">{description}</p>
        </div>

        <div className="card-child card-footer">
          {cart.find((item) => item._id === product._id) ? (
            <button className="btn pri-btn">
              <Link to="/cart">Go to Cart</Link>
            </button>
          ) : (
            <button className="btn pri-btn " onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          )}

          {wishlist.find((item) => item._id === product._id) ? (
            <button
              className="btn sec-btn"
              onClick={() => removeFromWishlist(product)}
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              className="btn sec-btn"
              onClick={() => addToWishlist(product)}
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
