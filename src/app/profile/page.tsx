import Navbar from '@/components/navbar/navbar'
import ProfileContext from '@/components/profileContext/ProfileContext'
import React from 'react'

function profile() {
  return (
    <div className="flex flex-col relative py-7">
      <Navbar/>
      <ProfileContext/>    
    </div>

    
  )
}

export default profile