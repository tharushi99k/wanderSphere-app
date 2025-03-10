import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import { BadgeCheck } from "lucide-react";

function LeftCard() {
  return (
    <div className="leftcard flex flex-col md: items-start lg:items-center justify-center  w-full border-0 rounded-lg p-12 bg-white  ">
      <h3 className="left-text text-sm md:text-base lg:text-lg mb-6 sm:w-[70%] md:w-[55%] font-semibold lg:w-full text-[#657A41]">
        About Us
      </h3>
      <h3 className="left-text text-[1.65rem] md:text-[2.375rem] lg:text-3xl font-bold mb-6 sm:w-[70%] md:w-[55%] lg:w-full ">
        Discover Sri Lanka, One Adventure at a Time!
      </h3>
      <p className="text-base mb-6 lg:w-full md:w-[67%]">
        WanderSphere curates personalized travel experiences, connecting you
        with Sri Lanka’s rich culture, breathtaking landscapes, and hidden gems{" "}
      </p>

      <div className="flex flex-col items-start justify-start w-full gap-2 mb-4">
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-5 h-5 text-[#657A41]" />
          <h3 className="left-text text-sm md:text-base">
            Personalized Travel Plans
          </h3>
        </div>

        <div className="flex items-center gap-2 ">
          <BadgeCheck className="w-5 h-5 text-[#657A41]" />
          <h3 className="left-text text-sm md:text-base">Local Expertise</h3>
        </div>

        <div className="flex items-center gap-2">
          <BadgeCheck className="w-5 h-5 text-[#657A41]" />
          <h3 className="left-text text-sm md:text-base">
            Smart Search & Booking
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <BadgeCheck className="w-5 h-5 text-[#657A41]" />
          <h3 className="left-text text-sm md:text-base">
            Sustainable Tourism
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <BadgeCheck className="w-5 h-5 text-[#657A41]" />
          <h3 className="left-text text-sm md:text-base">24/7 Support</h3>
        </div>
      </div>

      <div className="flex items-center justify-start w-full">
        <div className="flex items-start justify-start gap-[0.65rem] bg-[#657A41] px-4 py-2 rounded-lg">
          <h3 className="text-base text-white">Read More</h3>
          <ArrowRightIcon className="size-[1.5rem] text-white " />
        </div>
      </div>
    </div>
  );
}

export default LeftCard;
