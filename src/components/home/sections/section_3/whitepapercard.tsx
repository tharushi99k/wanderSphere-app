import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhitepaperCard() {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-12 p-8 border rounded-lg">
      <div className="flex flex-col items-start justify-start w-full">
        <h3 className="text-[2rem] font-light mb-2">DeedX 1.0 </h3>
        <h2 className="md:text-sm lg:text-base font-normal md:w-[75%] lg:w-[91%]">
          Download the Deedx Whitepaper: Unlock comprehensive insights into our
          blockchain-based real estate solutions. Learn about our innovative
          approach and the future of property transactions
        </h2>
      </div>

      <button className="flex  button border-b rounded-lg bg-[#f2faff] gap-4 p-6 md:w-[70%] lg:w-[85%]">
        <Image
          src={"/assets/images/home/section_3/icon_deedx.png"}
          alt="deedx logo"
          width={100}
          height={100}
          className="size-6  "
        />
        <div className="flex flex-col items-start justify-start w-full">
          <h3 className=" text-lg font-semibold  ">Whitepaper</h3>
          <h3 className=" text-base font-normal  ">Deedx Whitepaper 1.0</h3>
        </div>
      </button>

      {/* <Link href="https://drive.google.com/file/d/1nImwvP4T-NoN565Dp91rk9sCw9bOwiDX/view?usp=sharing">
        <button className="flex  button border-0 rounded-[1.25rem] bg-[#f2faff] gap-4 p-6 w-full">
          
          <Image
                  src={"/assets/images/home/section_3/icon_deedx.png"}
                  alt="deedx logo"
                  width={100}
                  height={100}
                  className="size-6  "
                />
          <div className="flex flex-col items-start justify-start w-full">
          <h3 className=" text-lg font-semibold  ">
            Whitepaper
          </h3>
          <h3 className=" text-base font-normal  ">
            Deedx Whitepaper 1.0
          </h3>
               
          

          </div>
         
        </button>
      </Link> */}
    </div>
  );
}

export default WhitepaperCard;
