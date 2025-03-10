import Image from "next/image";
import React from "react";


function TokenizedPro() {
  return (
    <div className="flex flex-col items-start justify-start w-[36%] gap-4 ">
      <h2 className="text-2xl font-normal">Most Recervations</h2>
      <div className=" token flex flex-col items-start justify-start  p-2 gap-3 pb-4">
        <Image
          src={"/assets/images/dashboard/mirissa.jpg"}
          alt="footer deedx logo"
          width={1000}
          height={1000}
          className="w-full h-auto "
        />

        <div className="flex flex-col items-start justify-start w-full px-5">
          <h3 className="text-2xl font-bold">Mirissa </h3>
          <h4 className="text-sm font-normal">Paradise Beach Club</h4>
        </div>
        <div className="flex items-start justify-start w-full pl-[0.65rem] gap-4">
          <div className="flex items-center justify-center px-3 py-1 bg-[#E7F5FF] rounded-lg gap-3 ">
            <Image
              src={"/assets/images/dashboard/icon_1.png"}
              alt="tokenized property icon 1"
              width={500}
              height={500}
              className="w-4 h-auto"
            />
            <h4 className="text-xs font-normal">4</h4>
          </div>
          <div className="flex items-center justify-center px-3 py-1 bg-[#E7F5FF] rounded-lg gap-3 ">
            <Image
              src={"/assets/images/dashboard/icon_2.png"}
              alt="tokenized property icon 1"
              width={500}
              height={500}
              className="w-4 h-auto"
            />
            <h4 className="text-xs font-normal">2</h4>
          </div>
          <div className="flex items-center justify-center px-3 py-1 bg-[#E7F5FF] rounded-lg gap-3 ">
            <Image
              src={"/assets/images/dashboard/icon_3.png"}
              alt="tokenized property icon 1"
              width={500}
              height={500}
              className="w-4 h-auto"
            />
            <h4 className="text-xs font-normal">Car Parking</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenizedPro;
