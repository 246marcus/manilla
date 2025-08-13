// components/BlogCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types"; // Make sure you have a Blog type in types/index.ts

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Blog Image */}
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category aligned with content */}
        <p className="text-gray-700 text-sm font-medium mb-2">
          {blog.category}
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {blog.title}
        </h2>

        <p className="text-gray-600 flex-1 mb-4">
          {blog.excerpt}{" "}
          <Link
            href={`/blog/${blog.slug}`}
            className="text-blue-600 font-semibold"
          >
            See more
          </Link>
        </p>

        {/* Author info */}
        <div className="flex items-center mt-auto">
          <Image
            src={blog.authorImage}
            alt={blog.authorName}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="ml-2">
            <p className="text-gray-900 font-medium text-sm">
              {blog.authorName}
            </p>
            <p className="text-gray-500 text-xs">{blog.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
