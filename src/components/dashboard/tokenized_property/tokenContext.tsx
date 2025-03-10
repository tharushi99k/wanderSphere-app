import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'
import Property_Section from "@/components/dashboard/tokenized_property/property_section";

function TokenContext() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-5 gap-4">
        <div className="item-center justify-start w-full border-b py-4">
          <h1 className="text-2xl font-normal">Tokenized Properties</h1>
        </div>   
        {/* search bar */}
        <div className="flex item-center justify-end w-full  ">
          <div className=" flex items-center justify-center w-[50%] border px-4  mt-5 rounded-lg">
          <div className="flex items-center justify-start w-full gap-4 p-2">
          <Image
            src={"/assets/images/tokenized_pro/search.png"}
            alt="footer deedx logo"
            width={100}
            height={100}
            className="w-4 h-auto"
          />
          <h3 className="text-sm font-normal">Search</h3>
          </div>
          <div className="flex items-center justify-start w-full gap-4 px-4 border-l">
          <h3 className="text-sm font-normal">Apartment</h3>
          <ChevronDownIcon className="size-5"/>
         
          </div>

          </div>
        </div>  
        {/* property section */}
        <div className="w-full">
          {/* num 1 */}
          <Property_Section/>

        </div>
      </div>
  )
}

export default TokenContext