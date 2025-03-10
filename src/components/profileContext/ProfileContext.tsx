import Image from "next/image";
import React from "react";
import CoverImg from "./coverImg";
import Catagories from "./catagories";
import Profileproperty from "./profileproperty";

function ProfileContext() {
  return (
    <div className="flex flex-col items-center justify-center w-full absolute top-[7rem] gap-10 ">
      <div className="flex flex-col items-center justify-center w-full ">
      <div className="flex flex-col items-center justify-center w-full px-8 mb-14 ">
        <CoverImg />
      </div>
      <div className="flex items-center justify-between w-[72%]   ">
        <div className="flex flex-col items-start justify-center w-full">
        <h4 className="text-lg font-medium text-black ">Zenitsu</h4>
        <h4 className="text-2xl font-medium ">0x3Eb5...a00F</h4>
        </div>

        <div className="flex  items-end justify-end w-full gap-5">
        <button className="bg-[#008BEC] rounded-[0.33rem]">
          <h4 className="text-lg font-medium text-white px-8 py-2">Edit Profile</h4>
        </button>
        <button className="bg-[#008BEC] rounded-[0.33rem] py-[1.2rem] px-4 ">
        <Image
            src={"/assets/images/profile/menu.png"}
            alt="menu icon"
            width={50}
            height={50}
            className="w-5 h-auto "
          />
        </button>
        </div>
      </div>
      </div>
      

      {/* catagorise and filter */}
      <div className="flex items-center justify-center w-[90%]">
        <Catagories/>
      </div>

      <div className="w-full mb-10">
        <Profileproperty/>
      </div>
    </div>
  );
}

export default ProfileContext;
