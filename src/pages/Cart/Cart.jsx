import React from 'react'
import HorizontalCard from '../../components/Card/HorizontalCard'
import TotalBill from '../../components/Card/TotalBill'
import EmptyPage from '../../components/EmptyPage'
import { useCart } from '../../contexts/CartContext'

export default function Cart() {

  const {cart} = useCart()

  return (
    <div className = 'cart-page cart-summary'>
      <div className='cart-items'>
        {cart?.length === 0? <EmptyPage text = {"Oh no! Your cart is empty.."} icon={"shopping_cart"}/> : cart.map(item => (
        <HorizontalCard cartItem = {item} key={item._id}/>
        ))}
      </div>
      {cart?.length === 0? "" : <TotalBill/>}
    </div>
  )
}
