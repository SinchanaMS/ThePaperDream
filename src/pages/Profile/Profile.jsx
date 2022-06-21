import React from "react";
import { NavLink } from "react-router-dom";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-body">
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
      <ul className="user-details flex-column">
        <li>
          <h3>Name:</h3>
          <p>Daniel Felton</p>
        </li>
        <li>
          <h3>Email:</h3>
          <p>theMarauders@gmail.com</p>
        </li>
        <li>
          <h3>Contact Number:</h3>
          <p>9955995599</p>
        </li>
      </ul>
    </div>
  );
}
