import Image from "next/image";
import React from "react";

function CardBuy() {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 h-auto border border-[#008BEC]  rounded-[0.6rem] py-10 gap-5 ">
      <Image
        src={"/assets/images/property_details/zenitsu.png"}
        alt="tokenized property icon 1"
        width={1000}
        height={1000}
        className="w-28 h-auto"
      />
      <div className="flex flex-col items-center justify-center w-full">
      <h3 className="text-2xl font-bold text-black">Zenitsu</h3>
      <h4 className="text-black text-sm font-normal">0x3Eb5kmlmya00F</h4>
      </div>

      
     
    </div>
  );
}

export default CardBuy;
