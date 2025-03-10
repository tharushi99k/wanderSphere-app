import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="flex  flex-col items-center justify-center bg-black pt-16 pb-16  w-full h-screen ">
      <BsEnvelopePaper className="w-16 h-16 mt-20 text-white" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">
        Your Travel Journey Start Here
      </h1>
      <p className="mt-3 text-white text-xs sm:text-sm">
        Sign up and we will send the best deals to you
      </p>

      <div className="w-full">
        <input
          type="text"
          className="px-6 py-3.5 bg-white mt-8 w-[95%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />
        <button className="px-6 py-3.5 bg-[#657A41] text-white hover:bg-lime-900 transition-all duration-200 mt-4 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
