// app/blog/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MediaPartner from "@/components/sections/MediaPartner";
import BlogCard from "@/app/blog/components/BlogCard";
import { blogs } from "@/types"; // import your array of blogs

export default function BlogPage() {
  return (
    <main>
      {/* Top Banner Section */}
      <section
        className="bg-[#1ABFC8] py-16"
        style={{
          backgroundImage: "url('/images/blogbackground.png')", // replace with your overlay
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Top Blog Banner Image */}
          <Image
            src="/icons/blogicon.png"
            alt="Blog Top"
            width={180}
            height={200}
            className="mx-auto object-contain"
          />

          {/* Learn More Button */}
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            Welcome to Blog Section
          </button>

          {/* Left and Right Images */}
          <div className="flex flex-col lg:flex-row items-center justify-center mt-5 gap-y-6 lg:gap-y-0 lg:gap-x-10">
            {/* Left image */}
            <div className="flex-shrink-0">
              <Image
                src="/images/blogText1.png"
                alt="Left Side Image"
                width={600} // increased width
                height={700} // increased height
                className="rounded-lg object-cover"
              />
            </div>

            {/* Right images container */}
            <div className="flex-shrink-0 relative">
              <Image
                src="/images/manillablog1.png"
                alt="Blog Side Image"
                width={400} // increased width
                height={650} // increased height
                className="rounded-lg object-cover"
              />

              <Link href="/blog" passHref>
                <Image
                  src="/images/bloglittleimage.png"
                  alt="Overlay Decoration"
                  width={140} // base size for small screens
                  height={120}
                  className="absolute top-[63%] left-0 rounded-lg cursor-pointer w-[140px] h-[60px] md:w-[170px] md:h-[70px] lg:w-[170px] lg:h[100px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>

      {/* Media Partners */}
      <section>
        <MediaPartner />
      </section>
    </main>
  );
}
