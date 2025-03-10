import Link from "next/link";
import React from "react";
import { FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* 1 st table */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Company</h1>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Expore
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              About 
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Journey
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Travel
            </p>
          </div>
           {/* 2 nd table */}
           <div className="space-y-5">
            <h1 className="text-lg font-bold">Support</h1>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Contact
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Legal Notice
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Privacy Policy
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Term & Condition
            </p>
            <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
              Sitemap
            </p>
          </div>
          
          {/* 4 th table */}
          <div className="space-y-5">
            <h1 className="text-lg font-bold">Contsct Us</h1>
            <div className="">
            <h1 className="text-sm text-gray-600">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-blue-950">+011 2343 4564</h1>
            </div>
            <div className="">
            <h1 className="text-sm text-gray-600">Our Email</h1>
            <h1 className="text-base font-bold text-blue-950">wanderSpehere@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">Copyright @ 2024 Webdev.All right reserved</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social : </span>
          <Link href="#" className="text-gray-500 hover:text-gray-800"><FaFacebook/></Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800"><FaTwitter/></Link>
          <Link href="#" className="text-gray-500 hover:text-gray-800"><FaDribbble/></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
