import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import Blog from "../../../lib/models/Blog";
import { deleteImage } from "../../../lib/cloudinary";

// GET single blog by ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const blog = await Blog.findById(params.id).select("-__v");

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error: unknown) {
    console.error("Get blog error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// PUT update blog
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await req.json();

    const {
      title,
      category,
      content,
      excerpt,
      authorName,
      authorImage,
      image,
      status,
    } = body;

    const updateData: Record<string, unknown> = {};
    
    if (title) updateData.title = title;
    if (category) updateData.category = category;
    if (content) updateData.content = content;
    if (excerpt) updateData.excerpt = excerpt;
    if (authorName) updateData.authorName = authorName;
    if (authorImage) updateData.authorImage = authorImage;
    if (image) updateData.image = image;
    if (status) {
      updateData.status = status;
      updateData.publishedAt = status === "published" ? new Date() : null;
    }

    const blog = await Blog.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true, runValidators: true }
    ).select("-__v");

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Blog updated successfully", blog },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Update blog error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    // Delete image from Cloudinary if it exists
    if (blog.imagePublicId) {
      try {
        await deleteImage(blog.imagePublicId);
      } catch (deleteError) {
        console.error("Failed to delete image from Cloudinary:", deleteError);
        // Continue with blog deletion even if image deletion fails
      }
    }

    await Blog.findByIdAndDelete(params.id);

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Delete blog error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
