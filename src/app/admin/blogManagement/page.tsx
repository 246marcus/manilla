"use client";

import { useState } from "react";
import BlogGrid from "../components/blogcomp/BlogGrid";
import CreateBlogModal from "../components/blogcomp/CreateBlogModal";
import DeleteModal from "../components/blogcomp/DeleteModal";
import SuccessModal from "../components/blogcomp/SuccessModal";
import Topbar from "../components/Topbar";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdAddBox, MdDeleteOutline } from "react-icons/md";
import blogimg from "../../../../public/images/blogimage1.png";
import Authorimg from "../../../../public/images/blogauthor.png";
import Sidebar from "../components/Sidebar";

const blogPosts = [
  {
    id: 1,
    code: "Blog #001",

    status: "Posted" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 2,
    code: "Blog #002",
    status: "Posted" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 3,
    code: "Blog #003",
    status: "Posted" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 4,
    code: "Blog #004",
    status: "Posted" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 5,
    code: "Blog #005",
    status: "Draft" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 6,
    code: "Blog #006",
    status: "Draft" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 7,
    code: "Blog #007",
    status: "Draft" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 8,
    code: "Blog #008",
    status: "Draft" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 9,
    code: "Blog #009",
    status: "Posted" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 10,
    code: "Blog #010",
    status: "Posted" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
  {
    id: 11,
    code: "Blog #011",
    status: "Posted" as const,
    authorName: "Jacob Jones",
    authorImage: Authorimg,
    date: " 11 Jan 2022",
    category: "Cryptocurrency",
    BlogImage: blogimg,
    description:
      "In today's digital-first world, web in today's digital-first world, web In today's digital-first world, web",
    title: "Why Tokenized Receipts Are the Next Big Thing in E-commerce",
  },
];

const BlogManagement = () => {
  const [activeTab, setActiveTab] = useState<"Posted" | "Draft">("Posted");
  const [sort, setSort] = useState("Date");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showCreateSuccess, setShowCreateSuccess] = useState(false);

  const handleDeleteAll = () => setShowDeleteModal(true);
  const confirmDelete = () => {
    setShowDeleteModal(false);
    setShowDeleteSuccess(true);
  };

  const handleCreateSubmit = () => {
    setShowCreateForm(false);
    setShowCreateSuccess(true);
  };

  return (
    <>
      <Sidebar />
      {/* Header */}
      <Topbar
        title={"Blog Management"}
        subtitle={"All Blogs"}
        description={"View and manage all blog posts."}
      />
      <div className="p-4 border border-black/20">
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
      </div>
    </>
  );
};

export default BlogManagement;
