import { useCart } from "../../contexts/CartContext"
import { useWishlist } from "../../contexts/WishlistContext"
import "./HorizontalCard.css"

export default function HorizontalCard({cartItem}) {
    const {prodimage, title, price: {discounted, discount}, qty} = cartItem
    const {deleteFromCart, incrementCart, decrementCart} = useCart()
    const {addToWishlist} = useWishlist()

    function moveToWishlist(cartItem){
        addToWishlist(cartItem)
        deleteFromCart(cartItem)
    }

    return (
        <div>
            <section className="cart-item">
                <div className="card-block">
                    <div className="item-img-container">
                        <img src= {prodimage} alt={title} className="item-img"/>
                    </div>
                    <div className="item-details">
                        <h3 className="item-name">{title}</h3>
                        <h4 className="item-price">Rs.{discounted}</h4>
                        <p className="discount">{discount}% OFF</p>
                        <div className="quantity">
                            <p>Quantity</p>
                            <div className="quantity-options">
                                <button className="remove-item" onClick={() => decrementCart(cartItem)}>-</button>
                                <div className="total-quantity"> {qty} </div>
                                <button className="add-item" onClick={() => incrementCart(cartItem)}>+</button>
                            </div>
                        </div>
                    <button className="remove-from-cart icon-dark" onClick={()=> deleteFromCart(cartItem)}>Remove from Cart</button>
                    <button className="add-to-wishlist icon-light" onClick={() => moveToWishlist(cartItem)}>Move to Wishlist</button>
                    </div>
                </div>
            </section>
        </div>
    )
}