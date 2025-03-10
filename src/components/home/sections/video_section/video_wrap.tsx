"use client";

import { motion } from "framer-motion"


function Video_Wrap() {
  return (
    <div className=" w-full">
      <div className="relative w-full h-[100vh] flex overflow-hidden rounded-lg text-white shadow-sm ">
      <motion.div
    >
      <video
        muted
        autoPlay
        loop
        className="absolute w-full h-full object-cover inset-0 bg-herovideo -z-[100]"
      >
        <source src="/assets/videos/tour.mp4" type="video/mp4" />
        <track
          src="/assets/videos/tour.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
    </motion.div>

    {/* Hero Text and Subtitle */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 -z-[100]">
        <div className="inline-block border-2 border-white px-28 py-16 rounded-lg">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Explore Sri Lanka</h1>
      <p className="text-lg font-medium drop-shadow-md">
        Discover the beauty, culture, and adventure.
      </p>
      </div>
    </div>
        
      </div>
    </div>
  );
}

export default Video_Wrap;
