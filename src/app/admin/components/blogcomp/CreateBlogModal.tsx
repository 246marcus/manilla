"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Authorimg from "../../../../../public/images/blogauthor.png";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("./TextEditor"), {
  ssr: false,
});

interface CreateBlogModalProps {
  onClose: () => void;
  onSubmit: (blog: {
    _id: string;
    title: string;
    category: string;
    content: string;
    excerpt: string;
    authorName: string;
    authorImage: string;
    image: string;
    status: string;
  }) => void;
}

const CreateBlogModal: React.FC<CreateBlogModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "E-commerce",
    content: "",
    excerpt: "",
    authorName: "",
    image: null as File | null,
    status: "draft" as "draft" | "published",
  });

  const avatars = [
    "/images/blogauthor.png",
    "/images/blogauthor.png",
    "/images/blogauthor.png",
    "/images/blogauthor.png",
  ];

  const [selectedAvatar, setSelectedAvatar] = useState<string>(avatars[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please select an image for the blog");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("content", formData.content);
      formDataToSend.append("excerpt", formData.excerpt);
      formDataToSend.append("authorName", formData.authorName);
      formDataToSend.append("authorImage", selectedAvatar);
      formDataToSend.append("status", formData.status);
      formDataToSend.append("image", formData.image);

      const res = await fetch("/api/blogs", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok) {
        onSubmit(data.blog);
      } else {
        alert(data.message || "Failed to create blog");
      }
    } catch (error) {
      console.error("Create blog error:", error);
      alert("Failed to create blog");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
      <div className="flex justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl space-y-6 mt-10 mb-10">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="w-full">
              <h2 className="text-xl font-semibold">Create Blog</h2>
              <p className="text-gray-500 text-sm border-b-2 border-dashed pb-2">
                Interface for writing and formatting blog posts.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Blog Details */}
            <div className=" rounded-lg">
              <h3 className="font-medium  bg-black/30 text-gray-700 mb-3 p-2">
                Blog Details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full border rounded-md p-2"
                    placeholder="Enter blog title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-semibold ">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full border rounded-md p-2 "
                  >
                    <option value="E-commerce" className="hover:bg-black/80">
                      E-commerce
                    </option>
                    <option value="Crypto">Crypto</option>
                    <option value="Finance">Finance</option>
                    <option value="Technology">Technology</option>
                    <option value="Art">Art</option>
                    <option value="Lifestyle">Lifestyle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1 font-semibold ">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as "draft" | "published",
                      })
                    }
                    className="w-full border rounded-md p-2 "
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1 font-semibold ">
                    Blog Excerpt
                  </label>
                  {/* <textarea
                    value={formData.excerpt}
                    onChange={(e) =>
                      setFormData({ ...formData, excerpt: e.target.value })
                    }
                    className="w-full border rounded-md p-2 h-20"
                    placeholder="Enter blog excerpt (short preview)"
                    maxLength={200}
                    required
                  /> */}

                  <TextEditor
                    initialValue={formData.excerpt}
                    onChange={({ html }) =>
                      setFormData({
                        ...formData,
                        excerpt: html, // store excerpt as HTML
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-semibold ">
                    Blog Content
                  </label>
                  {/*  <textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    className="w-full border rounded-md p-2 h-32"
                    placeholder="Enter blog content"
                    required
                  /> */}

                  <TextEditor
                    initialValue={formData.content}
                    onChange={({ html }) =>
                      setFormData({
                        ...formData,
                        content: html, // store content as HTML
                      })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Author Details */}
            <div className=" rounded-lg ">
              <h3 className="font-medium bg-black/30 p-2 text-gray-700 mb-3">
                Blog Author Details
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-1 font-semibold ">
                    {`Author's Name`}
                  </label>
                  <input
                    type="text"
                    value={formData.authorName}
                    onChange={(e) =>
                      setFormData({ ...formData, authorName: e.target.value })
                    }
                    className="w-full border rounded-md p-2"
                    placeholder="Enter author's name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-semibold ">
                    {` Author's Avatar`}
                  </label>
                  <div className="flex gap-2">
                    {avatars.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt="avatar"
                        className={`w-10 h-10 rounded-md border-2 cursor-pointer ${
                          selectedAvatar === src
                            ? "border-black/80"
                            : "border-gray-300"
                        }`}
                        onClick={() => setSelectedAvatar(src)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Image */}
            <div className=" rounded-lg ">
              <h2 className="font-medium bg-black/30 p-2 text-gray-700 mb-3">
                Upload Blog Image
              </h2>
              <h3 className="  mb-1 text-sm font-semibold ">Blog Image</h3>
              <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
                {formData.image ? (
                  <div className="space-y-3">
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Preview"
                      className="max-w-full h-48 object-cover rounded-lg mx-auto"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: null })}
                      className="text-red-500 text-sm hover:text-red-700"
                    >
                      Remove Image
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-500 mb-3">
                      Drag &amp; drop or click to upload
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          image: e.target.files ? e.target.files[0] : null,
                        })
                      }
                      className="hidden"
                      id="fileUpload"
                      required
                    />
                    <label
                      htmlFor="fileUpload"
                      className="bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200"
                    >
                      Upload from file
                    </label>
                    <p className="text-xs text-gray-400 mt-3">
                      File size: 1080 × 2048 • File format: (JPG/PNG)
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogModal;

