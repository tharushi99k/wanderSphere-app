
import SideBar from "@/components/sidebar/sidebar";
import TokenContext from "@/components/dashboard/tokenized_property/tokenContext";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

function token() {
  return (
    <div className="flex w-full h-screen">
      <div className="border h-full fixed">
        <SideBar />
      </div>
      <div className="ml-80 overflow-auto h-full w-full">
        <TokenContext/>
      </div>
      
    </div>


  );
}

export default token;
