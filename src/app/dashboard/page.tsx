
import DashboardContext from "@/components/dashboard/dashboardContext";
import SideBar from "@/components/sidebar/sidebar";
import React from "react";

function dashboard() {
  return (
  
    <div className="flex w-full h-screen">
      <div className="border h-full fixed ">
        <SideBar />
      </div>
      <div className=" ml-80 overflow-auto h-full w-full">
        <DashboardContext />
      </div>
    </div>
  );
}

export default dashboard;
