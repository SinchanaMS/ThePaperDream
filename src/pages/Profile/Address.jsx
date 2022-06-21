import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  MdAddCircle,
  MdDeleteOutline,
  MdOutlineEdit,
  MdCheckCircleOutline,
} from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import AddressModal from "../../components/AddressModal/AddressModal";
import { useCart } from "../../contexts/CartContext";

export default function Address() {
  const { cart, cartFinalAmout, clearCart } = useCart();
  const navigate = useNavigate();
  const {
    setAddress,
    userDetails: { addressList, orders },
    setUserDetails,
    defaultAddress,
    setDefaultAddress,
  } = useAuth();

  const [showAddressModal, setShowAddressModal] = useState(false);
  const editAddress = (address) => {
    const updateAddress = addressList.find((item) => item.id === address.id);
    setAddress(updateAddress);
    setShowAddressModal(true);
  };

  const deleteAddress = (address) => {
    setUserDetails((userDetails) => ({
      ...userDetails,
      addressList: userDetails.addressList.filter(
        (eachAddress) => eachAddress.id !== address.id
      ),
    }));
  };

  return (
    <div className="orders-page">
      <nav className="profile-nav-bar flex-centered flex-column">
        <NavLink className="navLink flex-centered" to="/profile">
          My Details
        </NavLink>
        <NavLink className="navLink flex-centered" to="/address">
          Address
        </NavLink>
        {cart.length > 0 ? (
          <NavLink className="navLink flex-centered" to="/cart-items">
            Item Overview
          </NavLink>
        ) : (
          <NavLink className="navLink flex-centered" to="/orders">
            Orders
          </NavLink>
        )}
      </nav>
      <ul className="address-list flex-column">
        <li
          className="address new shadow"
          onClick={() => setShowAddressModal((prev) => !prev)}
        >
          <MdAddCircle className="icon" /> Add New Address
        </li>

        {addressList.map((address) => (
          <li
            className="address shadow"
            key={address.id}
            onClick={() => setDefaultAddress(address)}
          >
            <h3>{address.fullName}</h3>
            <p>Address: {address.address}</p>
            <p>Pin Code: {address.pinCode}</p>
            <p>Contact Number: {address.contactNumber}</p>
            <div className="address-options">
              <button
                className="address-option flex-centered"
                onClick={() => editAddress(address)}
              >
                <MdOutlineEdit />
              </button>
              <button
                className="address-option flex-centered"
                onClick={() => deleteAddress(address)}
              >
                <MdDeleteOutline />
              </button>
              {defaultAddress.id === address.id ? (
                <button className="def-address">
                  <MdCheckCircleOutline />
                </button>
              ) : (
                ""
              )}
            </div>
          </li>
        ))}
        {showAddressModal && (
          <AddressModal setShowAddressModal={setShowAddressModal} />
        )}
        {cart.length > 0 && (
          <button className="btn pri-btn">Proceed with Payment</button>
        )}
      </ul>
    </div>
  );
}
