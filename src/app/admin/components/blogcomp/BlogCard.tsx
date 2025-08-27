"use client";

import Image from "next/image";
import { FaEllipsisV, FaEdit, FaTrashAlt, FaUpload } from "react-icons/fa";
import { useState } from "react";

interface BlogCardProps {
  id: number;
  code: string;
  title: string;
  status: "Posted" | "Draft";
  authorName: string;
  authorImage: any;
  date: string;
  BlogImage: any;
  category: string;
  description: string;
  onDelete: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  code,
  title,
  status,
  authorName,
  authorImage,
  date,
  BlogImage,
  category,
  description,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-2 bg-white py-6 rounded-3xl hover:scale-95 ">
      <div className="flex items-center w-full px-2 mb-2 justify-between pe-4">
        <h1 className="font-semibold text-md ">{code}</h1>
        {/* Action Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=" text-black/50 hover:text-black"
        >
          <FaEllipsisV />
        </button>
      </div>
      <div className="bg-white/60 border border-cyan-300 rounded-lg shadow p-2 relative">
        <Image
          src={BlogImage}
          alt={title}
          width={400}
          height={200}
          className="rounded-lg mb-2"
        />
        <div className="flex flex-col gap-1 mb-1">
          <p className="text-xs text-black/40 ">{category}</p>
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs text-black/50">
            {description.length > 30
              ? description.slice(29) + "... see more"
              : description}
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
            <p className="text-gray-500 text-xs">{date}</p>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-5 right-3 bg-white border border-black/50 shadow-lg rounded-md text-sm py-3 divide-y  ">
            {status === "Draft" && (
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-black/50 w-full text-left">
                <FaUpload /> Post Now
              </button>
            )}
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-black/50 w-full text-left">
              <FaEdit /> Edit
            </button>
            <button
              onClick={onDelete}
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
