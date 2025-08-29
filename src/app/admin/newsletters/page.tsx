import React from 'react'
import AppSidebar from '../components/Sidebar'
import NewsletterPage from '../components/newletter/NewsletterPage'

const NewsletterHome = () => {
  return (
    <div className='flex '>
        <AppSidebar/>
        <NewsletterPage/>
    </div>
  )
}

export default NewsletterHome