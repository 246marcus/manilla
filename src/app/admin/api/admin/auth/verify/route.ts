// app/api/admin/auth/verify/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "../../../../../lib/auth";
import connectDB from "../../../../../lib/mongdb";
import User from "../../../../../models/User";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("admin-token")?.value;

    if (!token) {
      return NextResponse.json({ error: "No token found" }, { status: 401 });
    }

    const decoded = verifyToken(token) as any;
    if (!decoded) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    await connectDB();

    // Verify user still exists and is active
    const user = await User.findById(decoded.userId).select("-password");
    if (!user || !user.isActive || user.role !== "admin") {
      return NextResponse.json(
        { error: "User not found or unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      valid: true,
    });
  } catch (error) {
    console.error("Token verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
