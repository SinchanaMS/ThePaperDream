import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast/Toast";
import { wishlistReducer } from "../reducer/wishlistReducer";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const navigate = useNavigate()
    const {loggedIn} = useAuth()

    const initialWishlistState = { wishlist: [], wishlistCount: 0}
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialWishlistState)

    const userToken = localStorage.getItem("userToken")

    const getWishlist = async() => {
        try {
            const response = await axios.get('/api/user/wishlist', {
                headers: {
                authorization: userToken
                }
            }) 
            if (response.status === 200) {
                wishlistDispatch({type: "GET_WISHLIST", payload: response.data.wishlist})
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getWishlist()
    }, [loggedIn])

    const addToWishlist = async (product) => {
        if (loggedIn){
            if (wishlistState.wishlist.some((item) => item._id === product._id)){
                Toast({type: "info", message: "Product already in the wishlist"})
            } else {
                try {
                    const response = await axios.post('/api/user/wishlist', {product},
                        {headers:{
                        authorization: userToken
                    }})
                    if (response.status === 201) {
                        wishlistDispatch({type: "ADD_TO_WISHLIST", payload: response.data.wishlist})
                        Toast({type: "success", message: "Product added to wishlist"})
                    }
                } catch (error) {
                    console.log(error)
                    Toast({type: "error", message: "Some error occurred. Please try again."})
                }
            }
        } else {
            Toast({type: "error", message: "Please login to continue"})
            navigate("/login")
        }
    }

    const removeFromWishlist = async (product) => {
        if (loggedIn){
            try {
                const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
                    headers: {
                    authorization: userToken
                    }
                })
                if (response.status === 200) {
                    wishlistDispatch({type: "DELETE_FROM_WISHLIST", payload: response.data.wishlist})
                    Toast({type: "success", message: "Product removed from wishlist"})
                }
            } catch (error) {
                console.log(error) 
            }
        } else {
            Toast({type: "error", message: "Please login to continue"})  
        }
    }


    return (
        <WishlistContext.Provider value={{ wishlist: wishlistState.wishlist, wishlistCount: wishlistState.wishlistCount, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext)

export {WishlistProvider, useWishlist}