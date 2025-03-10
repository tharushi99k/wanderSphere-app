import Image from "next/image";
import Link from "next/link";
import React from "react";

function ButtonSection_1() {
  return (
    <Link href="https://codinglegends.io/">
      <div className="sm:flex  items-center  justify-center  grid grid-col gap-3 sm:gap-6  border-b rounded-[0.625rem] px-8 py-6">
      <h3 className="  text-sm font-semibold text-[#808080]  ">Proudly Developed by: </h3>
      <Image
        src="/assets/images/home/section_1/CL logo.png"
        alt="CL logo"
        width={1000}
        height={1000}
        className=" w-40 h-auto "
      />
    </div>
    </Link>
    
  );
}

export default ButtonSection_1;
