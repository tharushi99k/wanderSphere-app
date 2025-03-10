import ListingsContext from '@/components/listings/listingsContext'
import SideBar from '@/components/sidebar/sidebar'
import React from 'react'

const Listings = () => {
  return (
     <div className="flex w-full h-screen">
          <div className="border h-full fixed ">
            <SideBar />
          </div>
          <div className=" ml-80 overflow-auto h-full w-full">
            <ListingsContext />
          </div>
        </div>
  )
}

export default Listings