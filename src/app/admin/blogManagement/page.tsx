import React from "react";
import AppSidebar from "../components/Sidebar";
import BlogManagement from "../components/blogcomp/BlogManagement";

const BlogHome = () => {
  return (
    <>
      <p className="text-center mt-20 lg:hidden">Desktop Mode Only</p>
      <div className=" hidden lg:flex">
        <AppSidebar />
        <BlogManagement />
      </div>
    </>
  );
};

export default BlogHome;
