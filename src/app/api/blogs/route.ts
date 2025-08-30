import { NextResponse } from "next/server";
import connectDB from "../../lib/db";
import Blog from "../../lib/models/Blog";
import { uploadImage } from "../../lib/cloudinary";

// GET all blogs
export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const category = searchParams.get("category");

    let query: Record<string, unknown> = {};
    
    if (status) {
      query.status = status;
    }
    
    if (category) {
      query.category = category;
    }

    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .select("-__v");

    return NextResponse.json({ blogs });
  } catch (error: unknown) {
    console.error("Get blogs error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}

// POST create new blog
export async function POST(req: Request) {
  try {
    await connectDB();
    const formData = await req.formData();
    
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const content = formData.get('content') as string;
    const excerpt = formData.get('excerpt') as string;
    const authorName = formData.get('authorName') as string;
    const authorImage = formData.get('authorImage') as string;
    const status = (formData.get('status') as string) || "draft";
    const imageFile = formData.get('image') as File;

    // Validate required fields
    if (!title || !category || !content || !excerpt || !authorName || !authorImage || !imageFile) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return NextResponse.json(
        { message: "A blog with this title already exists" },
        { status: 409 }
      );
    }

    // Upload image to Cloudinary
    let imageUrl = "";
    let imagePublicId = "";
    
    if (imageFile) {
      try {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64String = `data:${imageFile.type};base64,${buffer.toString('base64')}`;
        
        const cloudinary = require('cloudinary').v2;
        cloudinary.config({
          cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
          api_key: process.env.CLOUDINARY_API_KEY,
          api_secret: process.env.CLOUDINARY_API_SECRET,
        });

        const result = await cloudinary.uploader.upload(base64String, {
          folder: 'manilla-blogs',
          resource_type: 'auto',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto' }
          ]
        });

        imageUrl = result.secure_url;
        imagePublicId = result.public_id;
      } catch (uploadError) {
        console.error("Image upload error:", uploadError);
        return NextResponse.json(
          { message: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    const blogData = {
      title,
      slug,
      category,
      content,
      excerpt,
      authorName,
      authorImage,
      image: imageUrl,
      imagePublicId,
      status,
      publishedAt: status === "published" ? new Date() : null,
    };

    const blog = new Blog(blogData);
    await blog.save();

    return NextResponse.json(
      { message: "Blog created successfully", blog },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Create blog error:", error);
    return NextResponse.json(
      { message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
