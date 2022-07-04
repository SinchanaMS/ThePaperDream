import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const testUser = {
    email: "theMarauders@gmail.com",
    password: "FortunaMajor",
  };

  function setUserData(e) {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }

  const handleLogin = (e) => {
    e.preventDefault();
    submitLoginData(loginData);
  };

  const submitLoginData = async (loginData) => {
    try {
      const response = await axios.post("/api/auth/login", loginData);
      if (response.status === 200) {
        const userToken = response.data.encodedToken;
        localStorage.setItem("userToken", userToken);
        navigate("/products");
      }
    } catch (error) {
      setLoginError("An error occurred.");
      console.log("error:", error);
    }
  };

  const guestLogin = () => {
    submitLoginData(testUser);
  };

  return (
    <div className="page-body">
      <section className="login-container shadow">
        <h2 className="container-title">Login</h2>
        <form className="login-details flex-column" onSubmit={handleLogin}>
          <div className="labelled-input label-top username">
            <label className="label"> Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="jane.doe@email.com"
              onChange={setUserData}
            />
          </div>
          <div className="labelled-input label-top password">
            <label className="label"> Password </label>
            <span
              className="toggle-login-pwd material-icons material-icons-outlined"
              onClick={() => setShowPwd(!showPwd)}
            >
              {showPwd ? "visibility_off" : "visibility"}
            </span>
            <input
              type={showPwd ? "text" : "password"}
              name="password"
              placeholder="************"
              onChange={setUserData}
            />
          </div>
          <div className="auth-btns">
            <button className="btn login-btn pri-btn">Login</button>
            <button
              className="btn login-btn sec-btn"
              onClick={() => guestLogin()}
            >
              Test User
            </button>
          </div>
        </form>
        {loginError && <p className="val-error"> {loginError} </p>}
        <hr />
        <div className="new-user">
          <Link to="/signup" className="link-in-btn p-lg">
            Create New Account
          </Link>
        </div>
      </section>
    </div>
  );
}
