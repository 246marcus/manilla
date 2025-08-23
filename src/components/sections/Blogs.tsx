"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import BlogCard from "../../app/blog/components/BlogCard"; // ✅ adjust path
import { blogs } from "../../../src/types"; // ✅ import your real blogs
import { Blog } from "@/types";

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : blogs.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < blogs.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="p-6">
      <div
        className="max-w-7xl bg-cyan-400/90 mx-auto p-6 text-center py-10 rounded-2xl mt-0"
        style={{
          backgroundImage: "url('/images/blogbackground.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Top Blog Banner Image */}
        <img
          src="/icons/blogicon.png"
          alt="Blog Top"
          width={200}
          height={200}
          className="mx-auto object-contain scale-90"
        />

        {/* Learn More Button */}
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Learn More Daily
        </button>

        {/* Blog Carousel */}
        <div className="mt-12">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center gap-6">
            {/* Carousel */}
            <div className="overflow-hidden w-full lg:w-[700px] mx-auto">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {blogs.map((blog: Blog) => (
                  <div
                    key={blog.id}
                    className="w-full sm:w-[300px] flex-shrink-0 mx-auto sm:mr-5"
                  >
                    <Link href={`/blog/${blog.slug}`} className="block h-full">
                      <BlogCard blog={blog} />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex justify-center items-center mt-6 gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Static Side Image */}
            <div className="flex-shrink-0 relative max-w-sm mx-auto">
              <Image
                src="/images/manillablog.png"
                alt="Blog Side Image"
                width={300}
                height={400}
                className="rounded-lg object-cover mx-auto"
              />
              <Link href="/blog" passHref>
                <img
                  src="/images/bloglittleimage.png"
                  alt="Overlay Decoration"
                  width={130}
                  height={100}
                  className="absolute bottom-0 left-0 rounded-lg cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
