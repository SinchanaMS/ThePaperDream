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
import Toast from "../../components/Toast/Toast";

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
  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const showRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      Toast({
        type: "error",
        message: "Razorpay Payment failed to load, check your connection",
      });
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: "INR",
      name: "The Paper Dream",
      description: "Thank you for shopping with us",
      amount: cartFinalAmout * 100,
      image: "assets/tpdLogo.png",

      handler: function (response) {
        if (response.razorpay_payment_id) {
          Toast({
            type: "success",
            message: "Payment successful, order placed",
          });
          setUserDetails((userDetails) => ({
            ...userDetails,
            orders: [...userDetails.orders, ...cart],
          }));
          clearCart();
          navigate("/orders");
        }
      },

      prefill: {
        name: "Daniel Felton",
        email: "theMarauders@gmail.com",
        contact: 9955995599,
      },

      theme: {
        color: "#5c4545",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
          <button className="btn pri-btn" onClick={showRazorpay}>
            Proceed with Payment
          </button>
        )}
      </ul>
    </div>
  );
}
