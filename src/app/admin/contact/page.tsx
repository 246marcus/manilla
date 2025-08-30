import React from 'react'
import AppSidebar from '../components/Sidebar'
import ContactPage from '../components/contact/ContactPage'

const ContactHome = () => {
  return (
    <div className='flex'>
        <AppSidebar/>
        <ContactPage />
    </div>
  )
}

export default ContactHome
