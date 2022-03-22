import { Route, Routes } from "react-router-dom";
import MockAPI from "../pages/api-response/ApiResponse";
import { Login, SignUp, Cart, LandingPage, PageNotFound, ProductsList, Wishlist} from "../pages/pages";

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
