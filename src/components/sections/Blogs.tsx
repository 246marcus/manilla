"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      mainImage: "/images/blogCard1.png",
      overlayImage: "/images/overlay1.png",
      title: "NFT Art Trends 2025",
    },
    {
      id: 2,
      mainImage: "/images/blogCard2.png",
      overlayImage: "/images/overlay2.png",
      title: "How to Create Your First NFT",
    },
    {
      id: 3,
      mainImage: "/images/blogCard2.png",
      overlayImage: "/images/overlay3.png",
      title: "Metaverse Opportunities",
    },
    {
      id: 4,
      mainImage: "/images/blogCard2.png",
      overlayImage: "/images/overlay3.png",
      title: "Metaverse Opportunities",
    },
    {
      id: 5,
      mainImage: "/images/blogCard2.png",
      overlayImage: "/images/overlay3.png",
      title: "Metaverse Opportunities",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : blogs.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < blogs.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className=" p-6 lg:px-0">
      <div
        className="max-w-7xl bg-cyan-400/90 mx-auto p-6 text-center py-10 rounded-2xl  mt-0"
        style={{
          backgroundImage: "url('/images/blogbackground.png')", // replace with your overlay
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Top Blog Banner Image */}
        <img
          src="/icons/blogicon.png"
          alt="Blog Top"
          width={200}
          height={200}
          className="mx-auto object-contain scale-90 "
        />

        {/* Learn More Button */}
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Learn More Daily
        </button>

        {/* Blog Carousel */}
        <div className="mt-12">
          {/* Make vertical on small screens, horizontal centered on larger */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center gap-6">
            {/* Carousel (2 visible cards) */}
            <div className="overflow-hidden w-full lg:w-[700px] mx-auto">
              {/* 2 * 320px width */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 320}px)`,
                }}
              >
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="relative rounded-xl shadow-lg min-w-[300px] max-w-sm mx-auto p-0 mr-5"
                  >
                    {/* Main Image */}
                    <Image
                      src={blog.mainImage}
                      alt={blog.title}
                      width={300}
                      height={200}
                      className="rounded-lg "
                    />

                    {/* Optional Overlay Image */}
                    {/*    {blog.overlayImage && (
                      <img
                        src={blog.overlayImage}
                        alt="Overlay"
                        width={50}
                        height={50}
                        className="absolute top-2 left-2 rounded-full"
                      />
                    )} */}
                  </div>
                ))}
              </div>

              {/* Arrows under carousel — horizontal on desktop, vertical on mobile */}
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
