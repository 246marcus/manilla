"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BlogCard from "@/app/blog/components/BlogCard";
import { Blog } from "@/types";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/slug/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data.blog);

        // fetch related blogs
        const resAll = await fetch("/api/blogs");
        const dataAll = await resAll.json();
        setRelatedBlogs(
          dataAll.blogs.filter((b: Blog) => b.slug !== slug).slice(0, 4)
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p className="text-center py-16 mt-20 my-8">Loading blog...</p>;
  if (!blog) return <p className="text-center py-16 my-8 mt-20">Blog not found.</p>;

  return (
    <main>
      <section
        className="bg-[#1ABFC8] py-16"
        style={{
          backgroundImage: "url('/images/blogbackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
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
        {/* Main Blog */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h1 className="text-3xl font-bold mb-6">{blog.title}</h1>
            <div className="flex gap-2 mt-4">
              <Image
                src={blog.authorImage}
                alt={blog.authorName}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div className="text-gray-500 text-sm">
                <p>{blog.authorName}</p>
                <p>
                  {new Date(blog.publishedAt || blog.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={500}
            className="w-full h-auto rounded-lg object-cover mx-auto"
          />
          <p className="text-blue-500 uppercase text-sm font-medium">
            {blog.category}
          </p>
          <h2 className="text-3xl font-semibold">{blog.title}</h2>
          {/* <p className="text-gray-700 whitespace-pre-line">{blog.content}</p> */}

          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Related Blogs */}
        <aside className="space-y-6">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/relatedicon.png"
              alt="Related Icon"
              width={32}
              height={24}
              className="object-contain"
            />
            <h3 className="text-lg font-semibold">Related Blogs</h3>
          </div>
          {relatedBlogs.map((related) => (
            <BlogCard key={related._id} blog={related} />
          ))}
        </aside>
      </section>
    </main>
  );
}
