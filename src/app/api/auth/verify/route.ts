import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function GET(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const token = cookie.split("admin-token=")[1]?.split(";")[0];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);
    
    // Return user data with proper structure
    const user = {
      id: payload.id || payload._id,
      email: payload.email,
      name: payload.name || "Admin"
    };
    
    return NextResponse.json({ user });
  } catch (error: unknown) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
