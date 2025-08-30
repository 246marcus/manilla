"use client";

import BlogCard from "./BlogCard";

interface Blog {
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
}

interface BlogGridProps {
  blogs: Blog[];
  activeTab: "Posted" | "Draft";
  onDelete: (id: number) => void;
  setSelected:React.Dispatch<React.SetStateAction<Blog | null>>;
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs, activeTab, onDelete, setSelected }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {/*  {blogs
        .filter((b) =>
          activeTab === "Posted" ? b.status === "Posted" : b.status === "Draft"
        )
        .map((blog) => (
          <BlogCard key={blog.id} {...blog} onDelete={()=>onDelete(blog.id)} />
        ))} */}

      {blogs.length === 0 ? (
        <p className="text-center flex justify-center items-center col-span-full text-gray-500 h-[320px]">
          No blogs found
        </p>
      ) : (
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            {...blog}
            onDelete={() => onDelete(blog.id)}
           setSelected={setSelected}
          />
        ))
      )}
    </div>
  );
};

export default BlogGrid;
