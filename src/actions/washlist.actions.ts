"use server"

import { getMyToken } from "@/utilites"


export async function addToWishlist(productId : string){  

try{
    const token = await getMyToken()

  if(!token) {
    throw new Error("please login frist...")
  } 


  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method : "POST",
    headers : {
      token : token as string ,
      "content-type" : "application/json"
    },
    body : JSON.stringify({productId :productId })
  })

  const data = await res.json()
  return data
}
catch(err){
  console.log(err)
  return err
}
}


export async function getLoggedUserWishlist(){  
  const token = await getMyToken()

  if(!token) {
    throw new Error("please login frist...")
  }


  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method : "GET",
    headers : {
      token : token as string ,
      "content-type" : "application/json"
    },
  })

  const data = await res.json()
  return data
}


export async function removeProductFromWishlist(productId : string){  
  const token = await getMyToken()

  if(!token) {
    throw new Error("please login frist...")
  }


  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
    method : "DELETE",
    headers : {
      token : token as string ,
      "content-type" : "application/json"
    },
  })

  const data = await res.json()
  return data
}



