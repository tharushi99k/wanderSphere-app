
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { portals } from "../../../../../utils/motion";

function SectionContext_5() {
  return (
    <div className="grid md:grid-cols-2 items-center justify-center gap-1 w-full mt-36 sm:mt-40 px-1">
      <motion.div {...portals(0.1)}>
        <div className="real-time relative items-center justify-center w-full h-[400px] sm:h-[500px] md:h-[480px] lg:h-[560px] border  rounded-lg px-20 py-16">
          <div className="flex items-center justify-center w-full">
            <h3 className="sec-5-texthight text-center sm:text-2xl md:text-[1.75rem] lg:text-[2rem] font-extrabold  text-white sm:w-[60%] md:w-2/4">
              Real-Time Transaction Monitoring
            </h3>
          </div>
        </div>
      </motion.div>

      <motion.div {...portals(0.1)}>
        <div className="seamless items-center justify-center w-full h-[400px] sm:h-[500px]  md:h-[480px] lg:h-[560px] border  rounded-lg px-20 py-16">
          <div className="flex items-center justify-center w-full">
            <h3 className="sec-5-texthight text-center sm:text-2xl md:text-[1.75rem] lg:text-[2rem] font-extrabold  text-white sm:w-[60%] md:w-full lg:w-[50%]">
              Seamless Legal and Financial Integration
            </h3>
          </div>
        </div>
      </motion.div>

      <motion.div {...portals(0.1)}>
        <div className="user-friendly items-center justify-center w-full h-[400px] sm:h-[500px]  md:h-[480px] lg:h-[560px] border  rounded-lg px-20 py-16">
          <div className="flex items-center justify-center w-full">
            <h3 className="sec-5-texthight text-center sm:text-2xl md:text-[1.75rem] lg:text-[2rem] font-extrabold  text-white sm:w-[75%] md:w-[85%] lg:w-[60%]">
              User-Friendly Interface for Easy Navigation
            </h3>
          </div>
        </div>
      </motion.div>

      <motion.div {...portals(0.1)}>
        <div className="multicurrency items-center justify-center w-full h-[400px] sm:h-[500px]  md:h-[480px] lg:h-[560px] border  rounded-lg px-20 py-16">
          <div className="flex items-center justify-center w-full">
            <h3 className="sec-5-texthight text-center sm:text-2xl md:text-[1.75rem] lg:text-[2rem] font-extrabold  text-white sm:w-[60%] md:w-full lg:w-[60%]">
              Multi-Currency Support for Diverse Investments
            </h3>
          </div>
        </div>
      </motion.div>

      
        <div className="wallet col-span-2 items-center justify-center w-full   md:h-[360px]  border  rounded-lg ">
          <div className="flex flex-col items-start justify-cstart py-14 px-6 sm:py-14 sm:px-6 md:px-12 md:py-24 lg:p-36 ">
            <h3 className="sec-5-texthight text-center text-[1.65rem] sm:text-[1.65rem] md:text-[2.38rem] lg:text-[2.5rem] font-bold  text-black mb-6 ">
              Deedx Wallet
            </h3>
            <h4 className="text-base w-[75%] sm:w-[70%] md:w-[80%] lg:w-[52%]">
              Secure your investments with the Deedx Wallet. Designed for safety
              and convenience, manage your assets with confidence
            </h4>
          </div>
        </div>
      
    </div>
  );
}

export default SectionContext_5;
