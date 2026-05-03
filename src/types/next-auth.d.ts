import { JWT } from "next-auth/jwt"
import NextAuth  from "next-auth"

declare module "next-auth" {
  interface Session {
    user : {
      name : string,
      email : string,
    },
    expire : string,
    id : string
  }

  interface User {
      id :string,
      name : string,
      email : string,
      accessToken : string
    
  }
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    routeToken : string,
    id : string,
  }
}