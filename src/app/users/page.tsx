import UsersContext from '@/components/dashboard/user/userContext'
import SideBar from '@/components/sidebar/sidebar'
import React from 'react'

const Users = () => {
  return (
    
    <div className="flex w-full h-screen">
      <div className="border h-full fixed ">
        <SideBar />
      </div>
      <div className=" ml-80 overflow-auto h-full w-full">
        <UsersContext />
      </div>
    </div>
  )
}

export default Users