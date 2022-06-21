import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./HorizontalCard.css";

export default function TotalBill() {
  const { cartCount, cartTotalPrice, cartTotalDiscount, cartFinalAmout } =
    useCart();

  return (
    <div>
      <section className="price-details shadow">
        <h3 className="price-title">Price Details</h3>
        <hr />
        <div className="price-child items-count">
          <p className="no-of-items">Price ({cartCount} Items)</p>
          <p className="amount">Rs. {cartTotalPrice}</p>
        </div>
        <div className="price-child discount-summary">
          <p>Discount on MRP</p>
          <p className="amount">Rs. {cartTotalDiscount}</p>
        </div>
        <div className="price-child misc-charges">
          <p className="delivery">Delivery Charges</p>
          <p className="amount">FREE</p>
        </div>
        <hr />
        <h3 className="price-child total-summary">
          <p className="total">Total Amount</p>
          <p className="amount">Rs. {cartFinalAmout}</p>
        </h3>
        <button className="btn pri-btn place-order">
          <Link to="/cart-items">Check Out</Link>
        </button>
      </section>
    </div>
  );
}
