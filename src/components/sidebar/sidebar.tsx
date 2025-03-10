"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


interface SidebarLinkProps {
  href: string;
  imgSrc: string;
  activeImgSrc?: string;
  label: string;
  isActive: boolean;
}

function SideBar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-start justify-between w-[20%] h-screen pb-4">
      <div className="flex flex-col items-center justify-between gap-[4rem]">
        {/* Logo */}
        <Image
          src="/assets/images/sidebar/logo.png"
          alt="Estate 2"
          width={1000}
          height={1000}
          className="w-4/5 h-auto"
        />

        {/* Sidebar Links */}
        <div className="flex flex-col items-start justify-center w-full gap-6">
          {/* Dashboard */}
          <SidebarLink
            href="/dashboard"
            imgSrc="dashboard"
            activeImgSrc="activedashboard"
            label="Dashboard"
            isActive={pathname === "/dashboard"}
          />

          {/* Users */}
          <SidebarLink
            href="/users"
            imgSrc="onramp"
            label="Users"
            isActive={pathname === "/users"} 
          />

          {/* Listings */}
          <SidebarLink
            href="/listings"
            imgSrc="token"
            label="Listings"
            isActive={pathname === "/listings"} 
          />

          {/* Reservations */}
          <SidebarLink
            href="/reservation"
            imgSrc="document"
            label="Reservations"
            isActive={pathname === "/reservations"} 
          />
        </div>
      </div>
    </div>
  );
}


const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  imgSrc,
  activeImgSrc,
  label,
  isActive,
}) => {
  return (
    <Link href={href} className="w-full">
      <div
        className={`flex items-center group lg:gap-4 w-[19.2rem] px-10 py-3 transition-all duration-300 rounded-lg cursor-pointer ${
          isActive ? "bg-[#657A41] text-white" : "hover:bg-[#657A41] hover:text-white"
        }`}
      >
        {/* Sidebar Icon */}
        <Image
          src={`/assets/images/sidebar/${isActive && activeImgSrc ? activeImgSrc : imgSrc}.png`}
          width={28}
          height={28}
          alt={label}
          className="w-7 grayscale group-hover:opacity-100"
        />

        {/* Sidebar Label */}
        <h3 className={`text-base ${isActive ? "text-white" : "text-[#616161]"} group-hover:text-white group-hover:opacity-90 hidden lg:flex`}>
          {label}
        </h3>
      </div>
    </Link>
  );
};

export default SideBar;
