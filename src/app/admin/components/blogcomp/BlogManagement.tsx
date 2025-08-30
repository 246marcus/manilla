"use client";

import { useState, useEffect } from "react";
import BlogGrid from "./BlogGrid";
import CreateBlogModal from "./CreateBlogModal";
import EditBlogModal from "./EditBlogModal";
import DeleteModal from "./DeleteModal";
import SuccessModal from "./SuccessModal";
import Topbar from "../Topbar";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdAddBox, MdDeleteOutline } from "react-icons/md";
import blogimg from "../../../../../public/images/blogimage1.png";
import Authorimg from "../../../../../public/images/blogauthor.png";

interface BlogPost {
  _id: string;
  id?: number;
  code?: string;
  status: "draft" | "published";
  authorName: string;
  authorImage: string;
  date?: string;
  category: string;
  BlogImage?: string;
  image: string;
  description?: string;
  excerpt: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const BlogManagement = () => {
  const [activeTab, setActiveTab] = useState<"Posted" | "Draft">("Posted");
  const [sort, setSort] = useState("Date");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showCreateSuccess, setShowCreateSuccess] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Fetch blogs from API
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();

      if (res.ok) {
        // Transform API data to match component interface
        const transformedBlogs = data.blogs.map((blog: {
          _id: string;
          title: string;
          category: string;
          content: string;
          excerpt: string;
          authorName: string;
          authorImage: string;
          image: string;
          status: string;
          createdAt: string;
        }, index: number) => ({
          ...blog,
          id: index + 1,
          code: `Blog #${String(index + 1).padStart(3, '0')}`,
          date: new Date(blog.createdAt).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
          BlogImage: blog.image,
          description: blog.excerpt,
        }));
        setBlogPosts(transformedBlogs);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAll = () => setShowDeleteModal(true);
  
  const confirmDelete = async () => {
    try {
      // Delete all blogs
      const deletePromises = blogPosts.map(blog => 
        fetch(`/api/blogs/${blog._id}`, { method: "DELETE" })
      );
      
      await Promise.all(deletePromises);
      setBlogPosts([]);
      setShowDeleteModal(false);
      setShowDeleteSuccess(true);
    } catch (error) {
      console.error("Failed to delete blogs:", error);
      alert("Failed to delete blogs");
    }
  };

  // Handle individual blog operations
  const handleDeleteBlog = async (blogId: string) => {
    try {
      const res = await fetch(`/api/blogs/${blogId}`, { method: "DELETE" });
      
      if (res.ok) {
        setBlogPosts(prev => prev.filter(blog => blog._id !== blogId));
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
      alert("Failed to delete blog");
    }
  };

  const handlePublishBlog = async (blogId: string) => {
    try {
      const res = await fetch(`/api/blogs/${blogId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "published" }),
      });
      
      if (res.ok) {
        const updatedBlog = await res.json();
        setBlogPosts(prev => 
          prev.map(blog => 
            blog._id === blogId 
              ? { ...blog, status: "published" as const }
              : blog
          )
        );
      } else {
        alert("Failed to publish blog");
      }
    } catch (error) {
      console.error("Failed to publish blog:", error);
      alert("Failed to publish blog");
    }
  };

  const handleEditBlog = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setShowEditForm(true);
  };

  const handleEditSubmit = (updatedBlog: BlogPost) => {
    setBlogPosts(prev => 
      prev.map(blog => 
        blog._id === updatedBlog._id ? updatedBlog : blog
      )
    );
    setShowEditForm(false);
    setSelectedBlog(null);
  };

  const handleCreateSubmit = (newBlog: BlogPost) => {
    setBlogPosts(prev => [newBlog, ...prev]);
    setShowCreateForm(false);
    setShowCreateSuccess(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-white/40 h-screen overflow-y-auto">
      {/* Header */}
      <Topbar
        title={"Blog Management"}
        subtitle={"All Blogs"}
        description={"View and manage all blog posts."}
      />
      <div className="p-4 border border-black/20 flex-1">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h1 className=" font-semibold text-black/80">
              Simply create a new blog or manage existing blogs
            </h1>
            <p className="text-sm text-black/50">
              Create, view and manage all blog posts.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="  border-black/10 rounded-md p-2 text-sm font-semibold "
            >
              <option value="Date">By Date</option>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
            <button
              onClick={handleDeleteAll}
              className="flex items-center gap-1 hover:text-white font-semibold border-black/40  border  px-4 py-2 rounded-md hover:bg-black/80"
            >
              <MdDeleteOutline size={22} />
              Delete All
            </button>
            <button
              onClick={() => setShowCreateForm(true)}
              className=" flex items-center gap-1 bg-black/80  text-white font-semibold px-4 py-2 rounded-md hover:bg-transparent hover:text-black/80 border border-black/40"
            >
              <MdAddBox size={20} />
              Create Blog
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 text-sm border-b border-black/10 mb-4">
          <button
            className={`pb-1 px-1 ${
              activeTab === "Posted"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-black/50"
            }`}
            onClick={() => setActiveTab("Posted")}
          >
            Posted Blogs
          </button>
          <button
            className={`pb-1 px-1 ${
              activeTab === "Draft"
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-black/50"
            }`}
            onClick={() => setActiveTab("Draft")}
          >
            Draft
          </button>
        </div>

        {/* Blog Grid */}
        <BlogGrid
          blogs={blogPosts}
          activeTab={activeTab}
          onDelete={handleDeleteAll}
          onDeleteBlog={handleDeleteBlog}
          onPublishBlog={handlePublishBlog}
          onEditBlog={handleEditBlog}
        />

        {/* Modals */}
        {showCreateForm && (
          <CreateBlogModal
            onClose={() => setShowCreateForm(false)}
            onSubmit={handleCreateSubmit}
          />
        )}
        {showDeleteModal && (
          <DeleteModal
            onConfirm={confirmDelete}
            onClose={() => setShowDeleteModal(false)}
          />
        )}
        {showDeleteSuccess && (
          <SuccessModal
            title="Delete Blog"
            subtitle="Please confirm whether you want to proceed with this action."
            messageA="Successfully Deleted."
            messageB="All blogs have been successfully deleted."
            buttons={[
              { label: "Back", onClick: () => setShowDeleteSuccess(false) },
              {
                label: "Done",
                onClick: () => setShowDeleteSuccess(false),
                primary: true,
              },
            ]}
          />
        )}
        {showCreateSuccess && (
          <SuccessModal
            title="Create Blog"
            subtitle="Interface for writing and formatting blog posts."
            messageA="Blog created successfully."
            messageB="Your post has been created successfully and it is been saved"
            buttons={[
              {
                label: "View Draft",
                onClick: () => setShowCreateSuccess(false),
              },
              {
                label: "Upload Blog",
                onClick: () => setShowCreateSuccess(false),
                primary: true,
              },
            ]}
          />
        )}
        {showEditForm && selectedBlog && (
          <EditBlogModal
            blog={selectedBlog}
            onClose={() => {
              setShowEditForm(false);
              setSelectedBlog(null);
            }}
            onSubmit={handleEditSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default BlogManagement;
