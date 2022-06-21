import React from "react";

import { MdClose } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import "./AddressModal.css";

export default function AddressModal({ setShowAddressModal }) {
  const {
    address,
    setAddress,
    setUserDetails,
    userDetails: { addressList },
    setDefaultAddress,
  } = useAuth();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAddress((address) => ({ ...address, [name]: value }));
  };

  const saveAddress = (e) => {
    e.preventDefault();
    const addressExists = addressList.some(
      (eachAddress) => eachAddress.id === address.id
    );
    addressExists
      ? setUserDetails((userDetails) => ({
          ...userDetails,
          addressList: userDetails.addressList.map((eachAddress) =>
            eachAddress.id === address.id ? address : eachAddress
          ),
        }))
      : setUserDetails((details) => ({
          ...details,
          addressList: [...details.addressList, address],
        }));
    setDefaultAddress(address);
    setShowAddressModal(false);
    setAddress((prev) => ({
      ...prev,
      fullName: "",
      address: "",
      pinCode: null,
      contactNumber: null,
    }));
  };

  return (
    <div className="modal-container">
      <div className="modal-bg"></div>
      <form className="modal-form flex-column" onSubmit={saveAddress}>
        <button
          type="button"
          className="close-btn flex-centered"
          onClick={() => setShowAddressModal((prev) => !prev)}
        >
          <MdClose />
        </button>
        <h2>My Addresses</h2>
        <div className="labelled-input label-top">
          <label className="label"> Full Name</label>
          <input
            type="text"
            name="fullName"
            value={address?.fullName}
            onChange={inputHandler}
          />
        </div>
        <div className="labelled-input label-top">
          <label className="label"> Address</label>
          <input
            type="text"
            name="address"
            value={address?.address}
            onChange={inputHandler}
          />
        </div>
        <div className="labelled-input label-top">
          <label className="label"> Pin Code</label>
          <input
            type="number"
            name="pinCode"
            value={address?.pinCode}
            onChange={inputHandler}
          />
        </div>
        <div className="labelled-input label-top">
          <label className="label"> Contact Number</label>
          <input
            type="number"
            name="contactNumber"
            value={address?.contactNumber}
            onChange={inputHandler}
          />
        </div>
        <button type="submit" className="btn pri-btn">
          {addressList.some((add) => add.id === address.id)
            ? "Update Address"
            : "Save Address"}
        </button>
      </form>
    </div>
  );
}
