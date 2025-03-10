"use client";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import ProfilePopup from "./profilePopup";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-10 bg-white shadow-md backdrop-blur">
        <div className="flex justify-between items-center px-7 lg:px-12 mx-auto md:items-center md:px-8">
          {/* Logo */}
          <div className="flex items-center py-3 md:py-5">
            <Link href="/">
              <Image
                src={"/assets/images/navbar/logo.png"}
                alt="deedx logo"
                width={116}
                height={46.6}
                className="max-w-[7.25rem] h-auto"
              />
            </Link>
            {/* Mobile Hamburger Menu Button */}
            <div className="md:hidden ml-4">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <XMarkIcon className="size-12 md:hidden border rounded-full p-[0.9rem]" />
                ) : (
                  <div className="size-12 border rounded-full md:hidden p-[14px] flex items-center justify-center">
                    <Image
                      src={"/assets/images/navbar/menu.png"}
                      alt="menu icon"
                      width={100}
                      height={100}
                      className="w-3"
                    />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Menu (Center) - Desktop */}
          <div
            className={`flex-1 justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex">
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5 md:px-6 text-start border-y-2 md:border-y-0 md:border-b-0">
                <Link href="/home" onClick={() => setNavbar(!navbar)}>
                  Explore
                </Link>
              </li>
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5 md:px-6 text-start border-b-2 md:border-b-0">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5 md:px-6 text-start border-b-2 md:border-b-0">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Journey
                </Link>
              </li>
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5 md:px-6 text-start border-b-2 md:border-b-0">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Travel
                </Link>
              </li>
              <li className="text-black text-opacity-50 hover:text-black md:text-sm text-[1.8rem] font-semibold py-5 md:px-6 text-start border-b-2 md:border-b-0 md:hidden">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Contact Us
                </Link>
              </li>

              {/* Social media icons */}
              <div className="flex items-start justify-start w-full gap-1 mt-12 py-2 md:hidden">
                <Link href="https://www.facebook.com/">
                  <Image
                    src={"/assets/images/socialmedia_logo/black/facebook.png"}
                    alt="facebook"
                    width={32}
                    height={32}
                    className="max-w-[] h-auto p-[0.38rem] opacity-50 hover:opacity-100"
                  />
                </Link>
                <Link href="https://www.twitter.com/">
                  <Image
                    src={"/assets/images/socialmedia_logo/black/Twitter.png"}
                    alt="twitter"
                    width={32}
                    height={32}
                    className="max-w-[] h-auto p-[0.38rem] opacity-50 hover:opacity-100"
                  />
                </Link>
                <Link href="https://www.instagram.com/">
                  <Image
                    src={"/assets/images/socialmedia_logo/black/instagram.png"}
                    alt="instagram"
                    width={32}
                    height={32}
                    className="max-w-[] h-auto p-[0.38rem] opacity-50 hover:opacity-100"
                  />
                </Link>
              </div>
            </ul>
          </div>

          {/* Button and Profile (Right) */}
          <div className="flex items-center justify-end gap-6">
            <Link href="/login">
              <button className="hidden md:block py-3 px-[3.15rem] bg-[#657A41] border-0 rounded-lg">
                <h3 className="text-sm font-bold text-white">Start Planning</h3>
              </button>
            </Link>
            <div className="flex items-center">
              <ProfilePopup />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
