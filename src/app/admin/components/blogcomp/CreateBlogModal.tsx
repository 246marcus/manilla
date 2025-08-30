"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Authorimg from "../../../../../public/images/blogauthor.png";

interface CreateBlogModalProps {
  onClose: () => void;
  onSubmit: () => void;
}

const CreateBlogModal: React.FC<CreateBlogModalProps> = ({
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "E-commerce",
    content: "",
    author: "",
    image: null as File | null,
  });

  const avatars = [
    "/images/blogauthor.png",
    "/images/blogauthor.png",
    "/images/blogauthor.png",
    "/images/blogauthor.png",
  ];

  const [selectedAvatar, setSelectedAvatar] = useState<string>(avatars[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
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
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1 font-semibold ">
                    Blog Content
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    className="w-full border rounded-md p-2 h-32"
                    placeholder="Enter blog content"
                    required
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
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    className="w-full border rounded-md p-2"
                    placeholder="Enter author's name"
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
                <p className="text-gray-500 mb-3">
                  Drag & drop or click to upload
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
