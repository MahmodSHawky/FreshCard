"use client"
import { addToCart } from '@/actions/cart.actions';
import { CartContext } from '@/context/cartContext';
import { Button } from '@base-ui/react'
import React, { useContext } from 'react'
import { toast } from 'sonner';

export default function AddBtn({classes, word, id} : {classes :string, word:React.ReactNode, id :string }) {
  
  const {numOfCartItems, setnumOfCartItems} = useContext(CartContext)
  
  async function addProduct(){

    const res = await addToCart(id)
    // console.log(res);
    if (res.status === "success") {
      toast.success(res.message, {position : "top-center" , duration:2000 })
      setnumOfCartItems(numOfCartItems +1)
    }

    else {
      toast.error(res.message, {position : "top-center" , duration:2000 })
    }
  }


  return (
    <Button
      className={classes}
      onClick={(e) => {
        e.preventDefault();
        addProduct()
      }}>
      {word}
    </Button>
  )
}
