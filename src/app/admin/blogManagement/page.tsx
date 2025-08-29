import React from 'react'
import AppSidebar from '../components/Sidebar'
import BlogManagement from '../components/blogcomp/BlogManagement'


const BlogHome = () => {
  return (
    <div className='flex'>
      <AppSidebar/>
      <BlogManagement/>
    </div>
  )
}

export default BlogHome