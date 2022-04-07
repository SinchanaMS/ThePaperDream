import { useCart } from '../../contexts/CartContext'
import "./HorizontalCard.css"

export default function TotalBill() {
    
    const {cartCount, cartTotalPrice, cartTotalDiscount, cartFinalAmout, checkOut} = useCart()

    return (
        <div>
            <section class="price-details">
                <h3 class="price-title">Price Details</h3>
                <hr/>
                <div class="price-child items-count">
                    <p class="no-of-items">Price ({cartCount} Items)</p>
                    <p class="amount">Rs. {cartTotalPrice}</p>
                </div>
                <div class="price-child discount-summary">
                    <p>Discount on MRP</p>
                    <p class="amount">Rs. {cartTotalDiscount}</p>
                </div>
                <div class="price-child misc-charges">
                    <p class="delivery">Delivery Charges</p>
                    <p class="amount">FREE</p>
                </div>
                <hr/>
                <h3 class="price-child total-summary">
                    <p class="total">Total Amount</p>
                    <p class="amount">Rs. {cartFinalAmout}</p>
                </h3>
                <button class="btn link-btn-outline icon-dark place-order" onClick={()=>checkOut()}>
                    Check Out
                </button>
            </section>
        </div>
    )
}
