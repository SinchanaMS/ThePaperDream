import React from "react";
import { NavLink } from "react-router-dom";
import EmptyPage from "../../components/EmptyPage";
import { useAuth } from "../../contexts/AuthContext";

export default function Orders() {
  const {
    userDetails: { orders },
  } = useAuth();

  return (
    <div className="orders-page">
      <nav className="profile-nav-bar flex-centered flex-column">
        <NavLink className="navLink flex-centered" to="/profile">
          My Details
        </NavLink>
        <NavLink className="navLink flex-centered" to="/address">
          Address
        </NavLink>
        <NavLink className="navLink flex-centered" to="/orders">
          Orders
        </NavLink>
      </nav>
      <ul className="orders-list">
        <li className="orders">
          {orders?.length > 0 ? (
            orders?.map((item) => (
              <div className="mini-card" key={item?.id}>
                <div className="mini-image">
                  <img src={item?.prodimage} />
                </div>
                <div className="item-details flex-column">
                  <div>
                    <p className="item-title">{item?.title}</p>
                    <p className="p-grey">{item?.description}</p>
                    <p>Rs. {item?.price?.discounted}</p>
                    <p>Qty: {item?.qty}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <EmptyPage text={"No orders found.. :("} icon={"shopping_bag"} />
          )}
        </li>
      </ul>
    </div>
  );
}
