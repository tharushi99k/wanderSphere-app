import Image from "next/image";
import React from "react";

const Step1: React.FC = () => {
  return (
    // <>
    //   <img src="/assets/img/step1.png" alt="lock" className="" />
    // </>
    <>
      <Image
        src={"/assets/images/multiplestepform/step1.png"}
        alt="lock"
        width={32}
        height={32}
        className=""
      />
    </>
  );
};

export default Step1;
