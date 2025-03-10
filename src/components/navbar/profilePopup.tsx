import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useClickAway } from "react-use";
import { FiUser, FiGrid, FiLogOut } from "react-icons/fi";
import Link from "next/link";

const ProfilePopup: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);

  useClickAway(popupRef, () => {
    setIsPopupOpen(false);
  });

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <Image
        src={"/assets/images/profile/user.png"}
        alt="deedx logo"
        width={100}
        height={100}
        className="max-w-[2.25rem] h-auto"
        onClick={togglePopup}
      />
      {isPopupOpen && (
        <div
          ref={popupRef}
          className="profile-popup flex flex-col items-center justify-center absolute mt-2 w-[19rem] p-2 py-4 bg-[#FBFFF5]  rounded-[0.6rem] shadow-lg right-1 gap-5 text-black"
          style={{ top: "100%" }}
        >
          <Image
            src="/assets/images/profile/user.png"
            alt="Profile"
            width={50}
            height={50}
            className="size-20   rounded-full "
          />
          <ul>
            <li className="p-2  text-xl font-bold">
              Jameson Nethern
            </li>
          </ul>
          <div className="flex items-center justify-center w-full gap-4">
            <Link href="/profile">
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <FiUser className="w-10 h-10 text-black" />
                <h4 className="text-black text-xs">Profile</h4>
              </div>
            </Link>

            <Link href="/dashboard">
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <FiGrid className="w-10 h-10 text-black" />
                <h4 className="text-black text-xs">Dashboard</h4>
              </div>
            </Link>

            <Link href="/">
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <FiLogOut className="w-10 h-10 text-black" />
                <h4 className="text-black text-xs">Log out</h4>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
