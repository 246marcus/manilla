"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Blog {
  _id: string;
  title: string;
  category: string;
  authorName: string;
  image?: string;
  createdAt: string;
  status: string;
}

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  const fetchLatestBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      
      if (res.ok) {
        // Get the latest 3 blogs, sorted by creation date
        const latestBlogs = data.blogs
          .sort((a: Blog, b: Blog) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .slice(0, 3);
        setBlogs(latestBlogs);
      }
    } catch (error) {
      console.error("Failed to fetch latest blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="bg-white rounded-xl shadow py-4">
      <h2 className="font-semibold  text-black/80 mb-1 px-4">Latest Blogs</h2>
      <p className="text-black/60 text-xs mb-2 px-4">
        Review/Edit your most recent blogs
      </p>
      {isLoading ? (
        <p className="text-sm text-black/80 font-semibold bg-black/15 mb-4 py-2 px-4">
          Loading latest blogs...
        </p>
      ) : blogs.length > 0 ? (
        <p className="text-sm text-black/80 font-semibold bg-black/15 mb-4 py-2 px-4">
          Here are your latest blogs
        </p>
      ) : (
        <p className="text-sm text-black/80 font-semibold bg-black/15 mb-4 py-2 px-4">
          No blogs created yet
        </p>
      )}
      <div className="space-y-2 ">
        {isLoading ? (
          <div className="p-4 py-2 pe-2 border rounded-md border-black/20">
            <p className="text-sm text-black/60">Loading...</p>
          </div>
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="flex space-x-3 p-4 py-2 pe-2 border rounded-md border-black/20">
              <div className="flex-5/12 flex p-4 px-1">
                <Image
                  src={blog.image || "/icons/dashblog.png"}
                  alt="Blog"
                  width={100}
                  height={80}
                  className="rounded-md flex-1  h-auto"
                />
              </div>
              <div className="text-black/60 space-y-1 flex-7/12">
                <p className="text-xs ">{blog.category}</p>
                <p className="text-xs leading-4 text-black/80 font-semibold">
                  {blog.title}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/dashblog.png"
                    alt="Blog"
                    width={40}
                    height={40}
                    className="rounded-full w-7 h-7 "
                  />
                  <div className="">
                    <p className="text-sm font-semibold text-black/90 ">
                      {blog.authorName || "Anonymous"}
                    </p>
                    <p className="text-xs ">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 py-2 pe-2 border rounded-md border-black/20">
            <p className="text-sm text-black/60">No blogs available. Create your first blog to see it here!</p>
          </div>
        )}
      </div>
    </div>
  );
}
