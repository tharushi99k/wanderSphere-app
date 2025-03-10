import OnrampContext from '@/components/dashboard/on-ramp/onrampContext'
import SideBar from '@/components/sidebar/sidebar'
import React from 'react'

function onramp() {
  return (
    <div className="flex w-full h-screen">
    <div className='border h-full fixed'>
        <SideBar/>
    </div>
    <div className="ml-80 overflow-auto h-full w-full">
      <OnrampContext/>
    </div>   
</div>
  )
}

export default onramp
