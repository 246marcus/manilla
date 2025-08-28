// lib/validations.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "published", "archived"]).optional(),
  featuredImage: z.string().url().optional(),
});

export const newsletterSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  content: z.string().min(1, "Content is required"),
  htmlContent: z.string().optional(),
  recipients: z.array(z.string().email()).optional(),
  scheduledAt: z.string().datetime().optional(),
});

export const waitlistSchema = z.object({
  email: z.string().email("Invalid email format"),
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  interest: z.enum([
    "trading",
    "investment",
    "education",
    "consulting",
    "other",
  ]),
  message: z.string().optional(),
});
