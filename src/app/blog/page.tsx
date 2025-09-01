// app/blog/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MediaPartner from "@/components/sections/MediaPartner";
import BlogCard from "@/app/blog/components/BlogCard";

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

const categories = [
  "E-commerce",
  "Crypto",
  "Finance",
  "Technology",
  "Art",
  "Lifestyle",
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("E-commerce"); // default

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs?status=published");
      const data = await res.json();

      if (res.ok) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(
    (blog) => blog.category.toLowerCase() === activeCategory.toLowerCase()
  );

  console.log(blogs);

  return (
    <main>
      {/* Top Banner Section */}
      <section
        className="bg-[#099ca4] py-16"
        style={{
          backgroundImage: "url('/images/blogbackground.png')", // replace with your overlay
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="max-w-6xl mx-auto mt-8 px-6 text-center relative">
          {/*  activeTab desktop */}
          <div className="hidden lg:flex flex-wrap justify-center gap-3 lg:gap-2 absolute bottom-0 z-10 max-w-xl left-8 ">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === tab
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Top Blog Banner Image */}
          <Image
            src="/icons/blogicon.png"
            alt="Blog Top"
            width={180}
            height={200}
            className="mx-auto object-contain scale-75 md:scale-90"
          />

          {/* Learn More Button */}
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Welcome to Blog Section
          </button>

          {/* Left and Right Images */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-5 lg:mt-12 gap-y-6 lg:gap-y-0 lg:gap-x-10">
            {/* Left image */}
            <div className=" flex flex-col justify-center lg:items-start items-center  lg:text-start max-w-md gap-3 lg:pt-8 ">
              <p className=" flex gap-1 md:gap-2 items-center border-b font-semibold text-sm ">
                From Insight to Impact
              </p>
              <h2 className="font-bold text-2xl md:text-4xl">
                Insights and trends for smarter finance.
              </h2>
              <p className=" text-sm p-2 bg-black/40 rounded-2xl text-white transition-transform  hover:scale-95">
                Explore expert advice, product updates, and real-world guides to
                help you navigate payments, crypto, and smarter money
                management.
              </p>

              {/*  <Image
                src="/images/blogText1.png"
                alt="Left Side Image"
                width={600} // increased width
                height={700} // increased height
                className="rounded-lg object-cover"
              /> */}
            </div>

            {/* Right images container */}
            <div className="flex-shrink-0 relative">
              {/* Static Image on the right with overlay */}
              <div className="flex-shrink-0 relative max-w-sm mx-auto">
                {/* Main Image */}
                <Image
                  src="/images/manillablog.png"
                  alt="Blog Side Image"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover mx-auto"
                />

                {/* Overlay Image at bottom-left */}
                <Link href="/blog" passHref>
                  <img
                    src="/images/bloglittleimage.png"
                    alt="Overlay Decoration"
                    width={130}
                    height={100}
                    className="absolute bottom-0 left-0 rounded-lg cursor-pointer transition-transform  hover:scale-95"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/*  activeTab Mobile */}
        <div className="lg:hidden flex flex-wrap justify-center gap-3 lg:gap-2 max-w-xl left-8 -mt-8 mb-6 sm:mb-10 mx-auto scale-90 sm:scale-100">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === tab
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No published blogs found.</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-8 border rounded-2xl border-black/30">
            <p className="text-gray-600 italic">
              No blogs found in {activeCategory}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*  {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))} */}

            {filteredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </section>

      {/* Media Partners */}
      <section>
        <MediaPartner />
      </section>
    </main>
  );
}
