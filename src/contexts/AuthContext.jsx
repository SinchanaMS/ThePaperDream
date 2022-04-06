import {createContext, useState, useContext, useEffect} from "react"
import {useNavigate} from "react-router-dom"

const AuthContext = createContext()
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    if (userToken) {
      setLoggedIn(true);
    }
  }, [userToken]);

  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, logoutHandler}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider, useAuth}