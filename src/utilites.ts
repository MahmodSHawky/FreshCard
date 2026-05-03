import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function getMyToken(){
  const cookieStore  = await cookies()

  const tokenCookie =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value

  if (!tokenCookie) return null

  const decodedToken = await decode({
    token: tokenCookie,
    secret: process.env.NEXTAUTH_SECRET!
  })

  return decodedToken?.routeToken
}