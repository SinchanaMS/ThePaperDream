import { Link } from 'react-router-dom'
import mainLogo from "../../assets/mainLogo.png"
import "./Header.css"

export default function Header() {
  return (
    <header className="header shadow">
        <Link to="/">
            <img className="main-logo" src={mainLogo} />
        </Link>
        <div className="search-bar">
            <Link to="/products" className="search-submit">
                <span className="material-icons material-icons-outlined">
                    search
                </span>
            </Link>
            <input type="text" className="search-input" placeholder="Search"/>
        </div>
        <ul className="header-actions">
            <li>
                <Link to="/login" className="header-ctas">
                    <h4>Login</h4>
                </Link>
            </li>
            <li>
                <Link to="/signup" className="header-ctas">
                    <h4>Sign Up</h4>
                </Link>
            </li>
        </ul>
    </header>
  )
}
