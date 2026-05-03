import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {jwtDecode} from "jwt-decode"

export const authOptions : NextAuthOptions= {
  secret: process.env.NEXTAUTH_SECRET,
  providers : [
    // way to login with email & password
    Credentials({

      //button name
      name : "myLogin",

      //input info 
      credentials :{
        email : { label : "email" , type : "email", placeholder: " example@gmail.com"},
        password : { label : "password" , type : "email", placeholder: "***********"},
      },

      //function to call api ==> when click on button
      async authorize(credentials ,req){
        
        try{
          const res = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,{
            method : "POST",
            body : JSON.stringify({
              email : credentials?.email,
              password : credentials?.password,
            }),
            headers : {"content-type" : "application/json"}
          })
          
          const result = await res.json()

          if(!res.ok){
            throw new Error(result?.message || "invalid login")
          }
          console.log("resultofffffflogin",result);
          

          const jwt = jwtDecode<{ id: string }>(result.token)
          
          //use it to generate increpted token based on it
          return {
            id :jwt.id,
            name : result.user.name,
            email : result.user.email,
            accessToken : result.token
          }
        }
        catch(err){
          console.log(err);
          throw new Error((err as Error).message)
          return null
        }


        // excute when call api 
        // get form values 
        // on success ==> return object user data 
        // on error ==> null / false / error
      }
    })
  ],
  //function will be excute after successfully login || user refresh ||get sesstion
  callbacks : {
    //recieve user object from authorize function
    jwt(param){
      if (param.user){
        param.token.routeToken = param.user.accessToken
        param.token.id = param.user.id
        
      }
      // console.log("jwttparammm",param);
      
      return param.token
    },
    
    //when ==> useSession  || getServerSession || api/auth/session
    session({ session, token }) {
    session.id = token.id
    session.accessToken = token.routeToken  as string

    return session
  }
  },
  pages :{
    signIn : "/login"
  }
}





/*
  two types of tokenes
    1- access token ===> returned from database =========>> used when call api 
    2- jwt token(increpted) ==>  next auth token ===> save in cookies
*/

