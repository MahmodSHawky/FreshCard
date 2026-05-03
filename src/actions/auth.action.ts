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
    

    const result = await res.json()
    return res.ok
  }
  catch(err){
    console.log(err);
    
  }
}

export async function userLogin(data : LoginSchemaType){

}