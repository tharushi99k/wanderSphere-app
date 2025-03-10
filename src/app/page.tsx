import HomeContext from "@/components/pages/home/homeContext";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col relative ">
      <main>
        <HomeContext />
      </main>
    </div>
  );
};

export default Page;

