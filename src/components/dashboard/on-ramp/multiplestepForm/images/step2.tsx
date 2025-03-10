import Image from "next/image";
import React from "react";

const Step2: React.FC = () => {
  return (
    // <>
    //   <img src="/assets/img/step2.png" alt="lock" className="" />
    // </>
    <div className="">
    <Image
      src={"/assets/images/multiplestepform/step2.png"}
      alt="lock"
      width={32}
      height={32}
      className=""
    />
  </div>
  );
};

export default Step2;
