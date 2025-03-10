import React from "react";
import PropertyDoc from "./governmentPortal/propertyDoc";
import TokenizedPro from "./governmentPortal/tokenizedPro";
import Link from "next/link";
import Image from "next/image";
import Graph from "./governmentPortal/graph";

function DashboardContext() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-5 gap-8 ">
      <div className="item-center justify-start w-full border-b py-4">
        <h1 className="text-2xl font-normal">Government Portal</h1>
      </div>
      {/* token status,token property */}
      <div className="flex items-start justify-start w-full gap-5 ">
        <div className="w-full h-auto border border-[#80BDFF]  rounded-[0.625rem]">
        <Graph/>
        </div>
       
        <div className="flex flex-col items-center justify-end w-[36%] h-full gap-4">
          {/* <Image
            src="/assets/images/government_por/tokenizePro.png"
            alt="tokenized status"
            width={1000}
            height={1000}
            className=" w-full h-36"
          />
          */}
          <div className="tokenizepro3 relative items-center border border-[#80BDFF]  rounded-[0.625rem] justify-center w-full h-[245px] ">
              <div className="flex items-center justify-center w-full ">
                <Link href="/">
                  <div className=" flex items-start justify-start  top-20 left-5 absolute ">
                    <h3 className="bg-black px-11 py-2 text-white rounded-lg">
                      Recervation Map
                    </h3>
                  </div>
                </Link>
              </div>
            </div>

          {/* token 2 */}
          
            <div className="tokenizepro2 relative items-center border border-[#80BDFF]  rounded-[0.625rem] justify-center w-full h-[245px] ">
              <div className="flex items-center justify-center w-full ">
                <Link href="/">
                  <div className=" flex items-start justify-start  top-20 left-5 absolute ">
                    <h3 className="bg-black px-11 py-2 text-white rounded-lg">
                      New Updates
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          
        </div>
      </div>
      {/* property document,tokenized property for rent */}
      <div className="flex items-start justify-start w-full gap-5">
        <PropertyDoc />
        <TokenizedPro />
      </div>
    </div>
  );
}

export default DashboardContext;
