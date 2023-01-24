import React from 'react'
import { Hot } from '../Hot'
import "./HotDeals.css"

export default function HotDeals() {
  return (
    <div className='hotdeals'>
        <div className='hotdeals__title'>
        <h1>Coming Soon...</h1>
        </div>
        <div className='hotdeals__products'>
         {Hot.map((product)=>(
        <div className='hottie' key={product.id}>
            <img className="animate__animated animate__zoomIn" src={product.prdouctImage} alt="pdi"/>
      <div className='product__description'>
        <p>
            <b>{product.productName}</b>
            </p>
      </div>
     
        </div>
       ))}
       </div>
    </div>
  )
}
