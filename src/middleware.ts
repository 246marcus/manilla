import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;

    // Protect admin routes
    if (pathname.startsWith("/admin")) {
      if (req.nextauth?.token?.role !== "admin") {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    }

    // Protect admin APIs too
    if (pathname.startsWith("/api") && pathname.includes("/api/")) {
      if (req.nextauth?.token?.role !== "admin") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // must be logged in
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"], // applies only to admin + api
};
