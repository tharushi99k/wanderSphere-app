import Image from 'next/image'
import React from 'react'
import SimpleMultiStepForm from '../dashboard/on-ramp/simple-multi-step-form/simpleMultiStepForm'

function TokenizeProContext() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-5 gap-5 absolute top-[5.5rem]">
      <div className="item-center justify-start w-full border-b py-4 ">
        <h1 className="text-2xl font-normal text-black px-3">Tokenize Property</h1>
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
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default TokenizeProContext