import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import "./WishlistCard.css";

export default function WishlistCard({ wishlistItem }) {
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const {
    prodimage,
    title,
    description,
    price: { original, discounted, discount },
    rating,
  } = wishlistItem;

  function moveToCart(product) {
    addToCart(product);
    removeFromWishlist(product);
  }

  return (
    <div>
      <div className="card-container shadow">
        <div className="card-child card-header">
          <img className="card-img" src={prodimage} alt={title} />
          <h4 className="card-title">{title}</h4>
          <h5>Rating: {rating}/5</h5>
          <div className="card-subtitle price-details">
            <p className="p-lg"> Rs.{discounted} </p>
            <p className="original">Rs.{original} </p>
            <p className="discount"> {discount}% OFF</p>
          </div>
        </div>

        {wishlist.find((item) => item._id === wishlistItem._id) ? (
          <button
            className="card-badge card-badge-def badge-right wishlist-badge"
            onClick={() => removeFromWishlist(wishlistItem)}
          >
            <span className="material-icons md-24 material-icons-outlined">
              favorite
            </span>
          </button>
        ) : (
          <button
            className="card-badge card-badge-def badge-right wishlist-badge"
            onClick={() => addToWishlist(wishlistItem)}
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
          {cart.find((item) => item._id === wishlistItem._id) ? (
            <button className="btn pri-btn">
              <Link to="/cart">Go to Cart</Link>
            </button>
          ) : (
            <button
              className="btn pri-btn "
              onClick={() => moveToCart(wishlistItem)}
            >
              Move to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
