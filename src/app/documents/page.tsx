import DocumentContext from "@/components/dashboard/documents/documentContext";
import SideBar from "@/components/sidebar/sidebar";
import React from "react";

function documents() {
  return (
    <div className="flex w-full h-screen">
      <div className="border h-full fixed">
        <SideBar />
      </div>
      <div className="ml-80 overflow-auto h-full w-full">
        <DocumentContext/>
      </div>
      
    </div>
  );
}

export default documents;
