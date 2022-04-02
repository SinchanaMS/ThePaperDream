import { Link, useNavigate } from 'react-router-dom'
import "./Header.css"
import { useAuth } from '../../contexts/AuthContext'

export default function Header() {
    const {loggedIn, logoutHandler} = useAuth()
    const navigate=useNavigate()
    console.log(loggedIn)

    function handleLogin(e){
        loggedIn  ?  logoutHandler() : navigate("/")
    }

  return (
    <header className="header shadow">
        <Link to="/">
            <img className="main-logo" src={process.env.PUBLIC_URL + 'assets/mainLogo.png'}/>
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
                <Link to={loggedIn ? "/" : "/login"} className="header-ctas" onClick = {handleLogin}>
                    <h4>{ loggedIn ? "Logout" : "Login"}</h4>
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
