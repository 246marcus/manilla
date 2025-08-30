import mongoose, { Schema, models, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["E-commerce", "Crypto", "Finance", "Technology", "Art", "Lifestyle"],
    },
    image: {
      type: String,
      required: true,
    },
    imagePublicId: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: 200,
    },
    authorName: {
      type: String,
      required: true,
      trim: true,
    },
    authorImage: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Generate slug from title before saving
BlogSchema.pre("save", function (next) {
  if (this.isModified("title") && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  next();
});

export type BlogDocument = mongoose.Document & {
  title: string;
  slug: string;
  category: string;
  image: string;
  imagePublicId?: string;
  content: string;
  excerpt: string;
  authorName: string;
  authorImage: string;
  status: "draft" | "published";
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

const Blog = models.Blog || model<BlogDocument>("Blog", BlogSchema);
export default Blog;
