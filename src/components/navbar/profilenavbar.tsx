"use client";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from "react";


function Profilenavbar() {
    const [navbar, setNavbar] = useState(false);
  return (
    <div>
    <nav className="w-full  fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="justify-between  px-7 lg:px-12 mx-auto  md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <Image
                src={"/assets/images/navbar/deedx_logo.svg"}
                alt="deedx logo"
                width={116}
                height={46.6}
                className="max-w-[7.25rem] h-auto  "
              />
            </Link>
            {/*  BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                 
                  <XMarkIcon className="size-12 md:hidden border rounded-full p-[0.9rem]  " />
                ) : (
                  // <Bars3CenterLeftIcon className="size-12 md:hidden border rounded-full p-[0.9rem]  " />
                  <div className=" size-12 border rounded-full md:hidden p-[14px] flex items-center justify-center ">
                    <Image
                      src={"/assets/images/navbar/menu.png"}
                      alt="menu icon"
                      width={100}
                      height={100}
                      className=" w-3"
                    />
                  </div>

                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-between pb-3 mt-8 md:block md:pb-0 md:mt-0 md:overflow-hidden overflow-scroll ${
              navbar ? " md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5    md:px-6 text-start border-y-2 md:border-y-0 md:border-b-0  ">
                <Link href="/home" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5     md:px-6 text-start border-b-2 md:border-b-0  ">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5     md:px-6 text-start border-b-2 md:border-b-0  ">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Listings
                </Link>
              </li>
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5    md:px-6 text-start border-b-2 md:border-b-0  ">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Features
                </Link>
              </li>
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5     md:px-6 text-start border-b-2 md:border-b-0 md:hidden ">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Contact Us
                </Link>
              </li>

              {/* social media icons */}
              <div className="flex items-start justify-start w-full gap-1 mt-12 py-2 md:hidden  ">
                <Link href="https://www.facebook.com/">
                  <Image
                    src={"/assets/images/socialmedia_logo/black/facebook.png"}
                    alt="deedx logo"
                    width={32}
                    height={32}
                    className="max-w-[] h-auto p-[0.38rem] opacity-50 hover:opacity-100"
                  />
                </Link>

                <Link href="https://www.twitter.com/">
                  <Image
                    src={"/assets/images/socialmedia_logo/black/Twitter.png"}
                    alt="deedx logo"
                    width={32}
                    height={32}
                    className="max-w-[] h-auto p-[0.38rem]  opacity-50 hover:opacity-100 "
                  />
                </Link>

                <Link href="https://www.instagram.com/">
                <Image
                  src={"/assets/images/socialmedia_logo/black/instagram.png"}
                  alt="deedx logo"
                  width={32}
                  height={32}
                  className="max-w-[] h-auto p-[0.38rem]  opacity-50 hover:opacity-100  "
                />
                </Link>

                
              </div>
            </ul>
          </div>
        </div>
        <Link href="/">
          <button className=" hidden md:block py-4 px-[3.15rem] bg-black border-0 rounded-[6.3rem]">
            <h3 className="text-sm font-bold text-white">profile</h3>
          </button>
        </Link>
      </div>
    </nav>
  </div>
  )
}

export default Profilenavbar