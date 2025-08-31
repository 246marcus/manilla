import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("admin-token")?.value;
  const { pathname } = req.nextUrl;

  console.log(`Middleware: ${pathname}, Token: ${token ? 'exists' : 'missing'}`);
  console.log(`Middleware: JWT_SECRET exists: ${!!process.env.JWT_SECRET}`);

  // Skip middleware for login page to prevent redirect loop
  if (pathname === "/admin/login") {
    console.log("Middleware: Skipping login page");
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    if (!token) {
      console.log("Middleware: No token, redirecting to login");
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      const { payload } = await jwtVerify(token, secret);
      console.log("Middleware: Token verified successfully", { pathname, payload });
    } catch (error) {
      console.log("Middleware: Token verification failed", error);
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
