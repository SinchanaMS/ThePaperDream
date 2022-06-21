import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import "./HorizontalCard.css";

export default function HorizontalCard({ cartItem }) {
  const {
    prodimage,
    title,
    price: { discounted, discount },
    qty,
  } = cartItem;
  const { deleteFromCart, incrementCart, decrementCart } = useCart();
  const { addToWishlist } = useWishlist();

  const moveToWishlist = (cartItem) => {
    addToWishlist(cartItem);
    deleteFromCart(cartItem);
  };

  return (
    <div className="card-block shadow">
      <div className="item-img-container">
        <img src={prodimage} alt={title} className="item-img" />
      </div>
      <div className="item-details flex-column">
        <h3 className="item-name">{title}</h3>
        <h4 className="item-price">Rs.{discounted}</h4>
        <p className="discount">{discount}% OFF</p>
        <div className="quantity">
          <p>Quantity</p>
          <div className="quantity-options">
            <button
              className="remove-item flex-centered"
              onClick={() => decrementCart(cartItem)}
            >
              -
            </button>
            <div className="total-quantity"> {qty} </div>
            <button
              className="add-item flex-centered"
              onClick={() => incrementCart(cartItem)}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="remove-from-cart btn pri-btn"
          onClick={() => deleteFromCart(cartItem)}
        >
          Remove from Cart
        </button>
        <button
          className="add-to-wishlist btn sec-btn"
          onClick={() => moveToWishlist(cartItem)}
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  );
}
