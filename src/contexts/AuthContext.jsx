import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addresses } from "../backend/db/addresses";
import { v4 as uuid } from "uuid";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const userToken = localStorage.getItem("userToken");
  const [address, setAddress] = useState({
    id: uuid(),
    fullName: "",
    address: "",
    pinCode: "",
    contactNumber: "",
  });
  const [defaultAddress, setDefaultAddress] = useState(addresses[0]);
  const [userDetails, setUserDetails] = useState({
    orders: [],
    addressList: addresses,
    defAddress: address,
  });

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
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        logoutHandler,
        userDetails,
        setUserDetails,
        address,
        setAddress,
        defaultAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
