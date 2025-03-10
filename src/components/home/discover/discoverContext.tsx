import React from 'react'
import DiscoverCard from './discoverCard'

function DiscoverContext() {
  return (
    <div className="flex flex-col items-center justify-center w-[80%] gap-12 h-screen">
        <div className="flex flex-col items-center justify-center w-full">
       
      <h1 className=' text-center text-sm md:text-base lg:text-lg   font-semibold text-[#657A41] '>Explore</h1>
            <h1 className=' text-center text-[1.65rem] md:text-[2.375rem] lg:text-4xl font-bold leading-[4.43rem] '>Discover Popular Location</h1>
        </div>
        {/* card */}
        <div className="w-full">
            <DiscoverCard/>
        </div>

        

    </div>
  )
}

export default DiscoverContext

