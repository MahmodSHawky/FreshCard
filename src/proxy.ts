// gate between client & server

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const protectedRoutes = ["/cart", "/wishlist", "/checkout", "/allorders"];
  const authRoutes = ["/login", "/register"];

  // 1- get pathname in URL
  const myPath = request.nextUrl.pathname;

  // 2- get token
  const myToken = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  const token = myToken?.routeToken;

  if (!token && protectedRoutes.some((path) => myPath.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && authRoutes.some((path) => myPath.startsWith(path))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

//if we make request  ??
// when we go to proxy
export const config = {
  matcher: [
    "/cart/:path*",
    "/wishlist/:path*",
    "/checkout/:path*",
    "/allorders/:path*",
    "/login",
    "/register",
  ],
};
