import React, { useState, createContext} from 'react'
import {Products} from "../Products"


export const ShopContext = createContext(null)

// LOOPING OVER THE PRODUCT ARRAY
const getDefaultCart = ()=>{
    let cart= {}
    for (let i=1; i<Products.length +1; i++){
        cart[i]=0
    }
    return cart
}



export const ShopContextProvider =({children})=> {
    const [cartItems, setCartItems]= useState(getDefaultCart())
   

    // ADD TO CART FUNCTION
    const addCart =(itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] +1 }))
    }

     // Remove  from CART FUNCTION
     const removeFromCart =(itemId)=> {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] -1 }))
    }
 // updating  CART item count
    const updateCartItemCount = (newAmount, itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount}))
    }

     // getting total items amount  FUNCTION
     const getTotalCartAmount= ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0 ){
                let itemInfo =Products.find((product)=> product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
        }
     }
     return totalAmount
    };

    const contextValue= {cartItems, addCart, removeFromCart, updateCartItemCount,getTotalCartAmount}
    console.log(cartItems)



  return (
    <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
  )
}
