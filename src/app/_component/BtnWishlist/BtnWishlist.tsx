"use client"
import { addToWishlist } from '@/actions/washlist.actions';
import { CartContext } from '@/context/cartContext';
import { Button } from '@base-ui/react'
import React, { useContext } from 'react'
import { toast } from 'sonner';

export default function BtnWishlist({classes, word, id} : {classes :string, word:React.ReactNode, id :string }) {
  
  const {numOfWishlistItems, setnumOfWishlistItems} = useContext(CartContext)

  
  async function addProduct(){

    const res = await addToWishlist(id)
    // console.log(res);
    if (res.status === "success") {
      toast.success(res.message, {position : "top-center" , duration:2000 })
      setnumOfWishlistItems(numOfWishlistItems +1)
    }

    else {
      toast.error(res.message, {position : "top-center" , duration:2000 })
    }
  }


  return (
    <Button
      className={classes}
      onClick={(e) => {
        e.preventDefault()
        addProduct()
      }}>
      {word}
    </Button>
  )
}
