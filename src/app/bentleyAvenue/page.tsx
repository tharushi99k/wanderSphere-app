import BentleyAvenuecontext from "@/components/bentleyAvenue/bentleyAvenuecontext";
import SideBar from "@/components/sidebar/sidebar";
import React from "react";

function bentleyAvenue() {
  return (
    <div className="flex items-start justify-start w-full  ">
      <div className="border">
        <SideBar />
      </div>
      <div className="flex flex-col items-center justify-center w-full px-4 py-5 gap-8 ">
        <div className="item-center justify-start w-full border-b py-4">
          <h1 className="text-2xl font-normal">Property Details</h1>
        </div>
        <div className="w-full">
            <BentleyAvenuecontext/>
        </div>
      </div>
    </div>
  );
}

export default bentleyAvenue;
