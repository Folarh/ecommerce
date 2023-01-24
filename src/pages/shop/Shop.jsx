import React from 'react'
import HotDeals from '../../components/HotDeals'
import {Products} from "../../Products"
import Product from './Product'
import "./Shop.css"


export default function Shop() {
  return (
    <div className='shop'>
    <div className="shop__title">
        <h2>Products</h2>
    </div>
    <div className="shop__products">
       {Products.map((product)=>(
        <Product data={product} key={product.id}/>
       ))}
       <HotDeals/>
    </div>
    
    </div>
  )
}
