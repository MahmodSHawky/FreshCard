"use server"

import { ckeckOutSchemaType } from "@/schemas/checkOut.schema"
import { getMyToken } from "@/utilites"

export async function cashPayment(cartId: String, formValues:ckeckOutSchemaType){

  const token = await getMyToken()

  if(!token){
    throw new Error("login first")
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,{
    method:"POST",
    headers :{
      token : token ,
      "content-type":"application/json"
    },
    body : JSON.stringify({shippingAddress :formValues })
  }, )

  const data = await res.json()
  return data
}