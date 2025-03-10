import Image from "next/image";
import React from "react";

function Highlights() {
  const highlights = [
    {
      src: "/assets/images/property_details/user.png",
      alt: "User Icon",
      title: "User Name",
      subtitle: "Milly Johnson"
    },
    {
      src: "/assets/images/property_details/location.png",
      alt: "Location Icon",
      title: "Location",
      subtitle: "Park of Nations, Portugal"
    },
    {
      src: "/assets/images/property_details/proicon.png",
      alt: "Property Icon",
      title: "Property Type",
      subtitle: "Apartment"
    },
    {
      src: "/assets/images/property_details/user.png",
      alt: "Features Icon",
      title: "Property Features",
      subtitle: "2 Rooms | 2 Washrooms"
    },
    {
      src: "/assets/images/property_details/acreage.png",
      alt: "Acreage Icon",
      title: "Acreage",
      subtitle: "0.31423324"
    },
    {
      src: "/assets/images/property_details/gps.png",
      alt: "GPS Icon",
      title: "Gps Coordinates",
      subtitle: "-9.089666308 , 38.7675"
    }
  ];

  return (
    <div className="grid grid-cols-3 w-full gap-4">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-start justify-center w-full gap-5 p-2">
          <div className="border rounded-full w-10 h-10 bg-[#F0F0F0] relative">
            <Image
              src={highlight.src}
              alt={highlight.alt}
              width={500}
              height={500}
              className="w-5 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <h4 className="text-base font-medium">{highlight.title}</h4>
            <h4 className="text-sm font-normal">{highlight.subtitle}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
