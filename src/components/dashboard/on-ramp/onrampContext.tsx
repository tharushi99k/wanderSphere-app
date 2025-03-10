import Image from "next/image";
import React from "react";
import SimpleMultiStepForm from "./simple-multi-step-form/simpleMultiStepForm";

function OnrampContext() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-5 gap-5">
      <div className="item-center justify-start w-full border-b py-4">
        <h1 className="text-2xl font-normal">On-ramp</h1>
      </div>
      {/* image and multiple stepform */}
      <div className="grid grid-cols-5 gap-5 w-full">
        {/* image */}
        <div className="w-full col-span-2 ">
          <Image
            src="/assets/images/onramp/onramp_img.png"
            alt="onramp image"
            width={1000}
            height={1000}
            className=" w-full h-auto"
          />
        </div>

        {/* form */}
        <div className="col-span-3">
        <div className="grid grid-cols gap-5">
          <SimpleMultiStepForm showStepNumber={true}/>
          {/* <MultipleStepForm/> */}
          {/* <OnrampForm_2/> */}
          {/* <OnrampForm_1/> */}
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default OnrampContext;
