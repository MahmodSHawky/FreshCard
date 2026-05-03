"use server"

import { ckeckOutSchemaType } from "@/schemas/checkOut.schema"
import { getMyToken } from "@/utilites"

export async function onLinePayment(cartId: String, url:string = process.env.NEXTAUTH_URL!, formValues:ckeckOutSchemaType){

  const token = await getMyToken()

  if (!token) {
  return {
    status: "error",
    message: "Please login first"
  }
  }

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,{
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