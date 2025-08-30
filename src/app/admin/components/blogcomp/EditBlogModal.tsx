"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface EditBlogModalProps {
  blog: {
    _id: string;
    title: string;
    category: string;
    content: string;
    excerpt: string;
    authorName: string;
    authorImage: string;
    status: string;
  };
  onClose: () => void;
  onSubmit: (updatedBlog: {
    _id: string;
    title: string;
    category: string;
    content: string;
    excerpt: string;
    authorName: string;
    authorImage: string;
    status: string;
  }) => void;
}

const EditBlogModal: React.FC<EditBlogModalProps> = ({
  blog,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "E-commerce",
    content: "",
    excerpt: "",
    authorName: "",
    status: "draft" as "draft" | "published",
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        category: blog.category || "E-commerce",
        content: blog.content || "",
        excerpt: blog.excerpt || "",
        authorName: blog.authorName || "",
        status: blog.status || "draft",
      });
    }
  }, [blog]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`/api/blogs/${blog._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        onSubmit({ ...blog, ...formData });
      } else {
        alert(data.message || "Failed to update blog");
      }
    } catch (error) {
      console.error("Update blog error:", error);
      alert("Failed to update blog");
    }
  };

  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
      <div className="flex justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl space-y-6 mt-10 mb-10">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="w-full">
              <h2 className="text-xl font-semibold">Edit Blog</h2>
              <p className="text-gray-500 text-sm border-b-2 border-dashed pb-2">
                Update blog post information.
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
                    <option value="E-commerce">E-commerce</option>
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
                      setFormData({ ...formData, status: e.target.value as "draft" | "published" })
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
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) =>
                      setFormData({ ...formData, excerpt: e.target.value })
                    }
                    className="w-full border rounded-md p-2 h-20"
                    placeholder="Enter blog excerpt (short preview)"
                    maxLength={200}
                    required
                  />
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
                <div>
                  <label className="block text-sm mb-1 font-semibold ">
                    Author's Name
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
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Update Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlogModal;
