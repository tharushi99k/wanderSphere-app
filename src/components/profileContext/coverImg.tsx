import Image from 'next/image'
import React from 'react'

function CoverImg() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8  ">
      {/* background image and profile pic */}
      <div className="background-img relative items-center   rounded-2xl justify-center w-full h-[250px] ">
        <div className="flex flex-col items-center justify-center w-full ">
          <Image
            src={"/assets/images/profile/profilepic.png"}
            alt="deedx logo"
            width={100}
            height={100}
            className="w-24 h-auto -bottom-9 left-36 absolute "
          />
        </div>
      </div>
    </div>
  )
}

export default CoverImg