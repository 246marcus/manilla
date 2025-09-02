"use client";

import BlogCard from "./BlogCard";
import { FiInbox } from "react-icons/fi";

interface Blog {
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
}

interface BlogGridProps {
  blogs: Blog[];
  activeTab: "Posted" | "Draft";
  onDelete: () => void;
  onDeleteBlog: (blogId: string) => void;
  onPublishBlog: (blogId: string) => void;
  onEditBlog: (blog: Blog) => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({
  blogs,
  activeTab,
  onDelete,
  onDeleteBlog,
  onPublishBlog,
  onEditBlog,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {/*  {blogs
        .filter((b) =>
          activeTab === "Posted" ? b.status === "published" : b.status === "draft"
        )
        .map((blog) => (
          <BlogCard 
            key={blog._id} 
            {...blog} 
            onDelete={onDelete}
            onDeleteBlog={onDeleteBlog}
            onPublishBlog={onPublishBlog}
            onEditBlog={onEditBlog}
          />
        ))} */}

      {blogs.length === 0 ? (
        <p className="text-center flex flex-col gap-3 justify-center items-center col-span-full text-gray-500 h-[320px]">
         <FiInbox size={60}/> No blogs found
        </p>
      ) : (
        blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            {...blog}
            onDelete={onDelete}
            onDeleteBlog={onDeleteBlog}
            onPublishBlog={onPublishBlog}
            onEditBlog={onEditBlog}
          />
        ))
      )}
    </div>
  );
};

export default BlogGrid;
