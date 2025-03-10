import Image from "next/image";
import React from "react";
import LeftCard from "./leftcard";

function rightcard() {
  return (
    <div className=" intro-img full-card border-0 rounded-lg  md:w-full lg:w-[80%] h-auto mx-auto relative  lg:grid grid-cols-2 gap-2">
        <LeftCard/>
    </div>
  );
}

export default rightcard;
