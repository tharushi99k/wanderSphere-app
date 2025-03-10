import ReservationContext from '@/components/dashboard/reservation/reservationContext'
import SideBar from '@/components/sidebar/sidebar'
import React from 'react'

const Reservation = () => {
  return (
    <div className="flex w-full h-screen">
    <div className="border h-full fixed ">
      <SideBar />
    </div>
    <div className=" ml-80 overflow-auto h-full w-full">
      <ReservationContext />
    </div>
  </div>
  )
}

export default Reservation