"use client";

import BlogCard from "./BlogCard";

interface Blog {
  id: number;
  code:string;
  title: string;
  status: "Posted" | "Draft";
  authorName: string;
  authorImage: any;
  date: string;
  BlogImage: any;
  category: string;
  description: string;
}

interface BlogGridProps {
  blogs: Blog[];
  activeTab: "Posted" | "Draft";
  onDelete: () => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs, activeTab, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {blogs
        .filter((b) =>
          activeTab === "Posted" ? b.status === "Posted" : b.status === "Draft"
        )
        .map((blog) => (
          <BlogCard key={blog.id} {...blog} onDelete={onDelete} />
        ))}
    </div>
  );
};

export default BlogGrid;
