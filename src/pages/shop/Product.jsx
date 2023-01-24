import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export default function Product({data}) {
  const{addCart, removeFromCart, cartItems}=useContext(ShopContext)
  const cartItemsAmount =cartItems[data.id]
  return (
    <div className='product' >
      <img className="animate__animated animate__pulse" src={data.productImage} alt="pdi"/>
      <div className='product__description'>
        <p>
            <b>{data.productName}</b>
            </p>
            <p>#{data.price}</p>
      </div>
      <button 
      className='product__btn animate__animated animate__pulse' 
      onClick={()=>addCart(data.id)}
       >Add to cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
       </button>
    </div>
  )
}
