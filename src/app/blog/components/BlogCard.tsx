// components/BlogCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  category: string;
  image: string;
  content: string;
  excerpt: string;
  authorName: string;
  authorImage: string;
  createdAt: string;
  updatedAt: string;
}

interface BlogCardProps {
  blog: Blog;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:scale-95 transition-transform shadow-black/40 overflow-hidden max-w-md mx-auto min-h-48 flex flex-col">
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
      <div className="p-4 flex flex-col flex-1 text-center md:text-start">
        {/* Category aligned with content */}
        <p className="text-gray-700 text-sm font-medium mb-2">
          {blog.category}
        </p>

        <h2 className="  md:text-xl font-semibold text-gray-900 mb-2">
          {blog.title}
        </h2>
        {/* 
        <p className="text-gray-600 text-sm flex-1 mb-4">
          {blog.excerpt}{" "}
          <Link
            href={`/blog/${blog.slug}`}
            className="text-blue-600 font-semibold"
          >
            See more
          </Link>
        </p> */}

        <div className="text-gray-600 text-sm flex-1 mb-4">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.excerpt }}
          />
          <Link
            href={`/blog/${blog.slug}`}
            className="text-blue-600 font-semibold"
          >
            See more
          </Link>
        </div>

        {/* Author info */}
        <div className="flex items-center justify-center md:justify-start mt-auto">
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
            <p className="text-gray-500 text-xs">
              {formatDate(blog.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
