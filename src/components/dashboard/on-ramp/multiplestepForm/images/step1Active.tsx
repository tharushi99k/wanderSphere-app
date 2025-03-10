import Image from "next/image";
import React from "react";

const Step1Active: React.FC = () => {
  return (
    // <>
    //   <img src="/assets/img/step1Active.png" alt="lock" className="" />
    // </>
    <div className="">
    <Image
      src={"/assets/images/multiplestepform/step1Active.png"}
      alt="lock"
      width={32}
      height={32}
      className=""
    />
  </div>
  );
};

export default Step1Active;
