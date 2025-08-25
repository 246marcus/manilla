"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import BlogCard from "../../app/blog/components/BlogCard"; // ✅ adjust path
import { blogs } from "../../../src/types"; // ✅ import your real blogs
import { Blog } from "@/types";

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ Figure out how many cards fit in the container
  useEffect(() => {
    const updateCardsPerView = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = 300; // matches sm:w-[300px]
        const visibleCards = Math.max(
          1,
          Math.floor(containerWidth / cardWidth)
        );
        setCardsPerView(visibleCards);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = blogs.length - cardsPerView;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="p-4  max-w-7xl mx-auto">
      <div
        className=" bg-cyan-400/90  px-4 text-center py-10 rounded-2xl mt-0"
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
            <div
              ref={containerRef}
              className="overflow-hidden w-full lg:w-[700px] mx-auto"
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsPerView)
                  }%)`,
                }}
              >
                {blogs.map((blog: Blog) => (
                  <div
                    key={blog.id}
                    className="w-full sm:w-[300px] flex-shrink-0 mx-auto sm:mr-5"
                  >
                    <Link href={`/blog/${blog.slug}`} className="block h-full">
                      <div className="h-full min-h-[400px] flex">
                        <BlogCard blog={blog} className="flex-1" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex justify-center items-center mt-6 gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition"
                  disabled={currentIndex >= maxIndex}
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
