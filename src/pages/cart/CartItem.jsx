import React,{useContext} from 'react'
import {ShopContext} from "../../context/ShopContext"

export default function CartItem({data}) {
  const {cartItems, addCart, removeFromCart, updateCartItemCount}= useContext(ShopContext)
  return (
    <div className="cartItem">
      <img src={data.productImage} alt="prdouct-img"/>
      <div className='description'>
        <p>
            <b>{data.productName}</b>
        </p>
        <p>#{data.price}</p>
        <div className='countHandler'>
        <button onClick={()=>removeFromCart(data.id)}>-</button>
         <input value={cartItems[data.id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),data.id)}/>
          <button onClick={()=>addCart(data.id)}>+</button>
          
        </div>
      </div>
    </div>
  )
}
