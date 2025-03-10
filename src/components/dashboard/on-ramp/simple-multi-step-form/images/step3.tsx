import Image from "next/image";
import React from "react";

const Step3: React.FC = () => {
  return (
    // <>
    //   <img src="/assets/images/multiplestepform/step3.png" alt="lock" className="" />
    // </>
    <div className="">
    <Image
      src={"/assets/images/multiplestepform/step3.png"}
      alt="lock"
      width={32}
      height={32}
      className=""
    />
  </div>
  );
};

export default Step3;