"use client";

import { useParams } from "next/navigation";
import React from "react";
import { blogs } from "@/types";
import Image from "next/image";
import BlogCard from "@/app/blog/components/BlogCard";

export default function BlogDetailPage() {
  const params = useParams();
  const { slug } = params;

  // Find the current blog
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p className="text-center py-16">Blog not found.</p>;

  // Related blogs (excluding the current one)
  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 4);

  return (
    <main>
      <section
        className="bg-[#1ABFC8] py-16"
        style={{
          backgroundImage: "url('/images/blogbackground.png')", // replace with your overlay
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Top Blog Banner Image */}
          <Image
            src="/icons/blogicon.png"
            alt="Blog Top"
            width={180}
            height={200}
            className="mx-auto object-contain"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 mt-9 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Main Blog Content */}
        <div className="lg:col-span-2 flex flex-col gap- mx-auto">
          {/* First Grid: Title + Author */}
          <div className="bg-gray-100 p-8 rounded-lg lg:text-left">
            <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
            <div className="flex lg:justify-start gap-2 mt-4">
              <Image
                src={blog.authorImage}
                alt={blog.authorName}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div className="text-gray-500 text-sm">
                <p>{blog.authorName}</p>
                <p>{blog.date}</p>
              </div>
            </div>
          </div>

          {/* Second Grid: Blog Image + Category + Title + Content */}
          <div className="flex flex-col gap-6">
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={500}
              className="w-full h-auto rounded-lg object-cover mx-auto"
            />
            <p className="text-blue-500 uppercase text-sm font-medium text-center lg:text-left">
              {blog.category}
            </p>
            <h2 className="text-3xl font-semibold text-center lg:text-left">
              {blog.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line">{blog.content}</p>
          </div>
        </div>

        {/* Right: Related Blogs */}
        <aside className="space-y-6">
          {/* Title with Icon */}
          <div className="flex items-center gap-2">
            <Image
              src="/icons/relatedicon.png" // your icon path
              alt="Related Icon"
              width={32}
              height={24}
              className="object-contain"
            />
            <h3 className="text-lg font-semibold">Related Blogs</h3>
          </div>

          {/* Related Blog Cards */}
          {relatedBlogs.map((related) => (
            <BlogCard key={related.slug} blog={related} />
          ))}
        </aside>
      </section>
    </main>
  );
}
