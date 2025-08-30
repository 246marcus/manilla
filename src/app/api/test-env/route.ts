import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    jwtSecretExists: !!process.env.JWT_SECRET,
    mongodbUriExists: !!process.env.MONGODB_URI,
    nodeEnv: process.env.NODE_ENV,
  });
}
