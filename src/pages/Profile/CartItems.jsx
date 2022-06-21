import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function CartItems() {
  const location = useLocation();
  const { cart, cartFinalAmout } = useCart();
  const ETA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="orders-page">
      <nav className="profile-nav-bar flex-centered flex-column">
        <NavLink className="navLink flex-centered" to="/profile">
          My Details
        </NavLink>
        <NavLink
          className="navLink flex-centered"
          to="/address"
          state={{ from: location }}
        >
          Address
        </NavLink>
        <NavLink className="navLink flex-centered" to="/cart-items">
          Item Overview
        </NavLink>
      </nav>
      <ul className="items-list flex-column">
        <li className="items">
          {cart.map((item) => (
            <div className="mini-card " key={item.id}>
              <div className="mini-image">
                <img src={item.prodimage} />
              </div>
              <div>
                <p className="item-title">{item.title}</p>
                <p className="p-grey">{item.description}</p>
                <p>Rs. {item.price.discounted}</p>
                <p>Qty: {item.qty}</p>
                <p>
                  Delivery in: {ETA[Math.floor(Math.random() * ETA.length)]}{" "}
                  Days
                </p>
              </div>
            </div>
          ))}
        </li>
        <div className="cart-items">
          <button className=" btn pri-btn">
            <Link to="/address">Choose Delivery Address</Link>
          </button>
          <p className=" btn sec-btn">Total Price: Rs. {cartFinalAmout}</p>
        </div>
      </ul>
    </div>
  );
}
