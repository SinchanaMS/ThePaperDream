import { Route, Routes } from "react-router-dom";
import MockAPI from "../pages/api-response/ApiResponse";
import {
  Login,
  SignUp,
  Cart,
  LandingPage,
  PageNotFound,
  ProductsList,
  Wishlist,
} from "../pages/pages";
import Address from "../pages/Profile/Address";
import CartItems from "../pages/Profile/CartItems";
import Orders from "../pages/Profile/Orders";
import Profile from "../pages/Profile/Profile";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart-items" element={<CartItems />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/address" element={<Address />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/api" element={<MockAPI />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
