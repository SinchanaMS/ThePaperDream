import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import ProductsList from "../pages/ProductListing/ProductsList";
import Wishlist from "../pages/Wishlist/Wishlist";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp"
import React from 'react'
import LandingPage from "../pages/LandingPage/LandingPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import MockAPI from "../pages/api-response/ApiResponse";


export default function Router() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/products" element={<ProductsList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/api" element={<MockAPI />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
