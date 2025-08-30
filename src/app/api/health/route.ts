import { NextResponse } from "next/server";
import connectDB from "../../lib/db";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ ok: true, db: "connected" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: String(error?.message || error) },
      { status: 500 }
    );
  }
}
