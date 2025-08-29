import React from 'react'
import AppSidebar from '../components/Sidebar'
import WaitlistPage from '../components/waitlist/WaitlistPage'

const WaitlistHome = () => {
  return (
    <div className='flex '>
        <AppSidebar/>
        <WaitlistPage />
    </div>
  )
}

export default WaitlistHome