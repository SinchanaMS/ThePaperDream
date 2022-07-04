import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { loggedIn, logoutHandler } = useAuth();
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();
  const [showUserDialog, setShowUserDialog] = useState(false);

  const handleLogin = (e) => (loggedIn ? logoutHandler() : navigate("/"));

  return (
    <header className="header shadow">
      <Link to="/">
        <img
          className="main-logo"
          alt="the-paper-dream-logo"
          src={process.env.PUBLIC_URL + "assets/mainLogo.png"}
        />
      </Link>
      <div className="search-bar">
        <Link to="/products" className="search-submit">
          <span className="material-icons material-icons-outlined">search</span>
        </Link>
        <input type="text" className="search-input" placeholder="Search" />
      </div>
      <ul className="header-actions">
        {loggedIn && (
          <div className="header-actions">
            <li>
              <Link to="/wishlist" className="header-ctas">
                <div className="badge-icon-container">
                  <span className="material-icons md-28 md-fill material-icons">
                    favorite_border
                  </span>
                  <div className="badge flex-centered badge-text badge-pri">
                    {wishlistCount}
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="header-ctas">
                <div className="badge-icon-container">
                  <span className="material-icons md-28 material-icons-outlined">
                    shopping_cart
                  </span>
                  <div className="badge flex-centered badge-text badge-pri">
                    {cartCount}
                  </div>
                </div>
              </Link>
            </li>
          </div>
        )}

        {loggedIn ? (
          <li>
            <div
              className="badge-icon-container relative hover-pointer"
              onClick={() => setShowUserDialog((prev) => !prev)}
            >
              <span class="material-icons md-28 material-symbols-outlined">
                person
              </span>
            </div>
            {showUserDialog && (
              <div className="user-dialog shadow flex-column">
                <Link to="/profile" className="user-options">
                  Profile
                </Link>
                <Link to="/" className="user-options" onClick={handleLogin}>
                  Logout
                </Link>
              </div>
            )}
          </li>
        ) : (
          <div className="header-actions">
            <li>
              <div className="badge-icon-container relative">
                <span class="material-icons md-28 material-symbols-outlined">
                  person
                </span>
              </div>
              <div className="user-dialog shadow flex-column">
                <Link
                  to="/login"
                  className="user-options"
                  onClick={handleLogin}
                >
                  Login
                </Link>

                <Link to="/signup" className="user-options">
                  Sign Up
                </Link>
              </div>
            </li>
          </div>
        )}
      </ul>
    </header>
  );
}
