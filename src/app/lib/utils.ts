// lib/utils.ts
import { NextRequest } from "next/server";
import { verifyToken } from "./auth";

export const getAuthUser = async (request: NextRequest) => {
  const token = request.cookies.get("admin-token")?.value;

  if (!token) {
    return null;
  }

  const decoded = verifyToken(token) as { id: string; email: string } | null;
  return decoded ? decoded : null;
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

export const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export const paginate = (page: number = 1, limit: number = 10) => {
  const skip = (page - 1) * limit;
  return { skip, limit };
};

export const formatResponse = (data: unknown, message?: string) => {
  return {
    success: true,
    message: message || "Operation successful",
    data,
  };
};

export const formatError = (message: string, status: number = 400) => {
  return {
    success: false,
    error: message,
    status,
  };
};
