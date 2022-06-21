import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { loggedIn, logoutHandler } = useAuth();
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();

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
        {loggedIn ? (
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
            <li>
              <Link to="/profile" className="header-ctas">
                Profile
              </Link>
            </li>
          </div>
        ) : (
          ""
        )}

        {loggedIn ? (
          <li>
            <Link to="/" onClick={handleLogin}>
              <h4>Logout</h4>
            </Link>
          </li>
        ) : (
          <div className="header-actions">
            <li>
              <Link to="/login" className="header-ctas" onClick={handleLogin}>
                <h4>Login</h4>
              </Link>
            </li>
            <li>
              <Link to="/signup" className="header-ctas">
                <h4>Sign Up</h4>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </header>
  );
}
