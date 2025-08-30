import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const token = cookie.split("token=")[1]?.split(";")[0];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.json({ user: decoded });
  } catch (error: any) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
