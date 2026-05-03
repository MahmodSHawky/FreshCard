"use server"

import { LoginSchemaType, RegisterSchemaType } from "@/schemas/auth.schema";
import { cookies } from "next/headers";


export async function userRegister(data : RegisterSchemaType){
  try{
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
      method : "POST",
      body : JSON.stringify(data ),
      headers : {"content-type" : "application/json"}
    })
    // if(res.ok){

    // }else{

    // }

    const result = await res.json()
    return res.ok
  }
  catch(err){
    console.log(err);
    
  }
}

export async function userLogin(data : LoginSchemaType){
  // try{
  //   const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,{
  //     method : "POST",
  //     body : JSON.stringify(data ),
  //     headers : {"content-type" : "application/json"}
  //   })

  //   const result = await res.json()
  //   console.log("resultofffffflogin",result);
    
  //   if(res.ok){
  //     const cookie = await cookies()
  //     cookie.set("userToken" , result.token, {
  //       httpOnly :true,  //httpOnly ==> i can use token only by using http request
  //       // secure : true,
  //       maxAge : 60 * 60 * 24,
  //     })  
  //   }

    
  //   return res.ok
  // }
  // catch(err){
  //   console.log(err);
    
  // }
}