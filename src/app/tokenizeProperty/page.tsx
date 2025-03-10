import Navbar from '@/components/navbar/navbar'
import Profilenavbar from '@/components/navbar/profilenavbar'
import TokenizeProContext from '@/components/tokenizePro/tokenizeProContext'
import React from 'react'

function tokenizeProperty() {
  return (
    <div className="flex flex-col relative py-7">
    <Profilenavbar/>
    <TokenizeProContext/>
      
  </div>
  )
}

export default tokenizeProperty