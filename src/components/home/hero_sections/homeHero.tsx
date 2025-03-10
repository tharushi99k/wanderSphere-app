"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeInAndScale } from "../../../../utils/motion";

function HomeHero() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20 mb-20 sm:mt-[6.5rem] sm:mb-28 gap-8 sm:px-6 lg:px-12">
      <div className="flex flex-col items-start justify-start  w-full   ">
        <h1 className="home-hero w-11/12 px-6 sm:w-4/5  lg:w-[85%] mb-8 sm:mb-6 md:mb-8 lg:mb-6 text-[2.65rem] md:text-[3.5rem] lg:text-[5.5rem] font-light md:pr-12  lg:ml-14 ">
          Unlock{" "}
          <span className="inline-block">
            <motion.div {...fadeInAndScale(0.2)}>
              <Image
                src="/assets/images/home/Estate1.png"
                alt="Estate 1"
                width={1000}
                height={1000}
                className="w-20 h-10 sm:w-20 sm:h-10 md:w-[6.5rem] md:h-[3.94rem] lg:w-40 lg:h-[5.85rem] sm:-mb-[0.375rem] ml-[0.65rem] mr-[0.65rem] sm:ml-[0.65rem] sm:mr-[0.65rem] md:ml-3 md:mr-3 -mb-[0.375rem] lg:-mb-3 lg:ml-5 lg:mr-5 rounded"
              />
            </motion.div>
          </span>
          The Future of Real Estate with{" "}
          <span className="text-[#0096f7]">deedx</span>{" "}
          <span className="inline-block">
            <motion.div {...fadeInAndScale(0.2)}>
            <Image
              src="/assets/images/home/Estate2.png"
              alt="Estate 2"
              width={161}
              height={93}
              className="w-20 h-10 sm:w-20 sm:h-10  md:w-[6.5rem] md:h-[3.94rem] lg:w-40 lg:h-[5.85rem] sm:-mb-[0.375rem]  ml-[0.65rem] mr-[0.65rem] sm:ml-[0.65rem] sm:mr-[0.65rem] md:ml-3 md:mr-3 -mb-[0.375rem] lg:-mb-3 lg:ml-5 lg:mr-5 rounded  "
            />
            </motion.div>
          </span>
          Your Gateway to Secure{" "}
          <span className="inline-block">
            <motion.div {...fadeInAndScale(0.2)}>
            <Image
              src="/assets/images/home/Estate3.png"
              alt="Estate 3"
              width={161}
              height={93}
              className="w-20 h-10 sm:w-20 sm:h-10  md:w-[6.5rem] md:h-[3.94rem] lg:w-40 lg:h-[5.85rem] sm:-mb-[0.375rem]  ml-[0.65rem] mr-[0.65rem] sm:ml-[0.65rem] sm:mr-[0.65rem] md:ml-3 md:mr-3 -mb-[0.375rem] lg:-mb-3 lg:ml-5 lg:mr-5 rounded  "
            />
            </motion.div>
           
          </span>
          Property Transactions
        </h1>
        <div className="flex items-start justify-start  lg:w-4/5">
          <h3 className=" px-6 sm:w-10/12 md:w-4/6 lg:w-[63%] text-xl sm:text-xl md:text-2xl lg:text-[1.75rem]  lg:ml-14">
            Real Estate dreams into reality
            <span className="text-[#808080]">
              {" "}
              with deedx, Access Property From Anywhere, Anytime.
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
