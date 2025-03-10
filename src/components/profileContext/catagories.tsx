import Image from "next/image";
import Link from "next/link";
import React from "react";

function Catagories() {
  return (
    <div className="flex items-center justify-between w-full border-b">
        {/* menu */}
      <div className="flex items-start justify-start ">
        <ul className="flex h-auto items-center justify-center w-full ml-10 gap-8">
          <li className="text-black  hover:text-black text-sm font-semibold hover:border hover:border-[#80BDFF] hover:bg-[#E6F6FF] hover:px-4 py-2 rounded-lg">
            <Link href="/home">All</Link>
          </li>
          <li className="text-black  hover:text-black text-sm font-semibold hover:border hover:border-[#80BDFF] hover:bg-[#E6F6FF] hover:px-4 py-2 rounded-lg ">
            <Link href="/">Owned</Link>
          </li>
          <li className="text-black  hover:text-black text-sm font-semibold hover:border hover:border-[#80BDFF] hover:bg-[#E6F6FF] hover:px-4 py-2 rounded-lg ">
            <Link href="/">On Sale</Link>
          </li>
          <li className="text-black  hover:text-black text-sm font-semibold hover:border hover:border-[#80BDFF] hover:bg-[#E6F6FF] hover:px-4 py-2 rounded-lg">
            <Link href="/">Created</Link>
          </li>
        </ul>
      </div>
      {/* filter */}
      <button className=" items-center justify-center bg-black rounded-md ">
        <div className="flex items-center justify-center gap-3 px-4 py-1 ">
        <Image
            src={"/assets/images/profile/filter.png"}
            alt="filter logo"
            width={100}
            height={100}
            className="w-4 h-auto"
          />
        <h4 className="text-white text-sm font-medium">Filter</h4>
        </div>
      </button>

      {/* property */}
      
    </div>
  );
}

export default Catagories;
