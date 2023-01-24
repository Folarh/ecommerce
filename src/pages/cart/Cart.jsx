import React from 'react'
import "./Cart.css"
import {Products} from "../../Products"
import CartItem from './CartItem'
import {ShopContext} from "../../context/ShopContext"
import { useContext } from 'react'
import {useNavigate} from "react-router-dom"

export default function Cart() {
  const {cartItems,getTotalCartAmount}= useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {Products.map(product=>{
          
         if (cartItems[product.id]!==0){
            return <CartItem  data={product} />
         }
         return ""
          
})}
      </div>
      {totalAmount > 0 ?
      <div className='checkout'>
       
        <p> Subtotal: #{totalAmount}</p>
        <button onClick={()=> navigate("/")}>Continue shopping</button>
        <button>Checkout</button>
      </div>
      :<h1>Your cart is empty</h1>}
    </div>
  )
}
