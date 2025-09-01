// app/api/blogs/slug/[slug]/route.ts
import { NextResponse } from "next/server";
import connectDB from "../../../..//lib/db";
import Blog from "../../../../lib/models/Blog";

// GET single blog by slug
export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug: params.slug }).select("-__v");

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Get blog by slug error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
