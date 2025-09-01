"use client";

import Image from "next/image";
import { FaEllipsisV, FaEdit, FaTrashAlt, FaUpload } from "react-icons/fa";
import { useState } from "react";

interface BlogCardProps {
  _id: string;
  id?: number;
  code?: string;
  title: string;
  status: "draft" | "published";
  authorName: string;
  authorImage: string;
  date?: string;
  BlogImage?: string;
  image: string;
  category: string;
  description?: string;
  excerpt: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  onDelete: () => void;
  onDeleteBlog: (blogId: string) => void;
  onPublishBlog: (blogId: string) => void;
  onEditBlog: (blog: BlogCardProps) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  _id,
  id,
  code,
  title,
  status,
  authorName,
  authorImage,
  date,
  BlogImage,
  image,
  category,
  description,
  excerpt,
  content,
  createdAt,
  updatedAt,
  onDelete,
  onDeleteBlog,
  onPublishBlog,
  onEditBlog,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="px-2 bg-white py-6 rounded-3xl hover:scale-95 h-90 ">
      <div className="flex items-center w-full px-2 mb-2 justify-between pe-4">
        <h1 className="font-semibold text-md ">
          {code || `#${_id.slice(-6)}`}
        </h1>
        {/* Action Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=" text-black/50 hover:text-black"
        >
          <FaEllipsisV />
        </button>
      </div>
      <div className="bg-white/60 border border-cyan-300 rounded-lg shadow p-2 relative h-84">
        <Image
          src={BlogImage || image}
          alt={title}
          width={400}
          height={200}
          className="rounded-lg mb-2"
        />
        <div className="flex flex-col gap-1 mb-1">
          <p className="text-xs text-black/40 ">{category}</p>
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs text-black/50">
            {showFullContent
              ? description || excerpt || ""
              : (description || excerpt || "").length > 30
              ? (description || excerpt || "").slice(0, 30) + "... "
              : description || excerpt || ""}
            {(description || excerpt || "").length > 30 && (
              <button
                onClick={() => setShowFullContent(!showFullContent)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {showFullContent ? "see less" : "see more"}
              </button>
            )}
          </p>
        </div>
        {/* Author info */}
        <div className="flex items-center justify-center md:justify-start mt-auto ">
          <Image
            src={authorImage}
            alt={title}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="ml-2">
            <p className="text-gray-900 font-medium text-sm">{authorName}</p>
            <p className="text-gray-500 text-xs">
              {date || new Date(createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-5 right-3 bg-white border border-black/50 shadow-lg rounded-md text-sm py-3 divide-y z-10">
            {status === "draft" && (
              <button
                onClick={() => {
                  onPublishBlog(_id);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-black/50 w-full text-left"
              >
                <FaUpload /> Post Now
              </button>
            )}
            <button
              onClick={() => {
                onEditBlog({
                  _id,
                  id,
                  code,
                  title,
                  status,
                  authorName,
                  authorImage,
                  date,
                  BlogImage,
                  image,
                  category,
                  description,
                  excerpt,
                  content,
                  createdAt,
                  updatedAt,
                  onDelete,
                  onDeleteBlog,
                  onPublishBlog,
                  onEditBlog,
                });
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-black/50 w-full text-left"
            >
              <FaEdit /> Edit
            </button>
            <button
              onClick={() => {
                onDeleteBlog(_id);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-black/50 w-full text-left text-red-600"
            >
              <FaTrashAlt /> Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
