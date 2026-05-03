"use client"
import { getLoggedUserCart } from "@/actions/cart.actions";
import { cartProduct } from "@/api/types/products.type";
import { createContext, ReactNode, useEffect, useState } from "react";
import { getLoggedUserWishlist } from "@/actions/washlist.actions";

export const CartContext = createContext({numOfCartItems:0, setnumOfCartItems (num: number){}, numOfWishlistItems:0, setnumOfWishlistItems (num: number){}})


export default function CartContextProvider({children}:{children : ReactNode}){
  const [numOfCartItems, setnumOfCartItems] = useState(0)

  async function getUserCart(){
    try{
      const res = await getLoggedUserCart()
      let sum = 0
      
      res.data.products.forEach((product:cartProduct)=>{
        sum += product.count
      })
      // console.log("contextFromCarttt",sum);
      setnumOfCartItems(sum)
    }
    catch(err: unknown){ 
      if(err instanceof Error){
        console.log(err);
        
      }
    }
    }

  useEffect(() => {
    getUserCart()
  },[])



  const [numOfWishlistItems, setnumOfWishlistItems] = useState(0)

  async function getUserWishlist(){
    try{
      const res = await getLoggedUserWishlist()
      let sum = res.data.length
    
      // console.log("contextFromCarttt",sum);
      setnumOfWishlistItems(sum)
    }
    catch(err: unknown){ 
      if(err instanceof Error){
        console.log(err);
        
      }
    }
    }

  useEffect(() => {
    getUserWishlist()
  },[])


  return <CartContext.Provider value={{numOfCartItems, setnumOfCartItems, numOfWishlistItems, setnumOfWishlistItems}}>
    {children}
  </CartContext.Provider>
}





