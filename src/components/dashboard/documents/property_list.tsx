import Image from 'next/image';
import React from 'react';

function Property_list() {
  const data = [
    {
      name: "Shane Benson",
      address: "Bentley Avenue",
      date: "2024.01.23",
      personImg: "/assets/images/dashboard/person.png",
      docImg: "/assets/images/dashboard/doc.png",
      rectangleImg: "/assets/images/dashboard/Rectangle.png",
      dotsImg: "/assets/images/dashboard/dots.png",
      verifyText: "Verify"
    },
    {
      name: "Shane Benson",
      address: "Bentley Avenue",
      date: "2024.02.14",
      personImg: "/assets/images/dashboard/person.png",
      docImg: "/assets/images/dashboard/doc.png",
      rectangleImg: "/assets/images/dashboard/Rectangle.png",
      dotsImg: "/assets/images/dashboard/dots.png",
      verifyText: "Verify"
    },
    {
      name: "Shane Benson",
      address: "Bentley Avenue",
      date: "2024.03.12",
      personImg: "/assets/images/dashboard/person.png",
      docImg: "/assets/images/dashboard/doc.png",
      rectangleImg: "/assets/images/dashboard/Rectangle.png",
      dotsImg: "/assets/images/dashboard/dots.png",
      verifyText: "Pending"
    },
    {
      name: "Shane Benson",
      address: "Bentley Avenue",
      date: "2024.04.05",
      personImg: "/assets/images/dashboard/person.png",
      docImg: "/assets/images/dashboard/doc.png",
      rectangleImg: "/assets/images/dashboard/Rectangle.png",
      dotsImg: "/assets/images/dashboard/dots.png",
      verifyText: "Rejected"
    },
    {
      name: "Shane Benson",
      address: "Bentley Avenue",
      date: "2024.05.10",
      personImg: "/assets/images/dashboard/person.png",
      docImg: "/assets/images/dashboard/doc.png",
      rectangleImg: "/assets/images/dashboard/Rectangle.png",
      dotsImg: "/assets/images/dashboard/dots.png",
      verifyText: "Verify"
    }
  ];

  return (
    <div className="flex flex-col w-full gap-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-center w-full border rounded-md border-[#80BDFF] px-8 py-[0.4rem] gap-12">
          <Image
            src={item.personImg}
            alt="person logo"
            width={100}
            height={100}
            className="w-10 h-auto"
          />
          <div className="w-full">
            <h4 className="text-xs font-semibold">{item.name}</h4>
          </div>

          <div className="flex items-center justify-center w-full gap-4">
            <Image
              src={item.docImg}
              alt="document logo"
              width={500}
              height={500}
              className="w-8 h-auto"
            />
            <div className="flex flex-col items-start justify-start w-full">
              <h4 className="text-xs font-semibold">{item.address}</h4>
              <h4 className="text-xs font-normal text-[#848282]">{item.date}</h4>
            </div>
          </div>
          <Image
            src={item.rectangleImg}
            alt="rectangle logo"
            width={1000}
            height={1000}
            className="w-20 h-auto"
          />
          <div className="flex items-center justify-center w-full gap-1">
            <div className="border-4 rounded border-[#1DA91A]"></div>
            <h4 className="text-xs font-semibold text-[#1DA91A]">{item.verifyText}</h4>
          </div>

          <Image
            src={item.dotsImg}
            alt="dots logo"
            width={1000}
            height={1000}
            className="w-1 h-auto"
          />
        </div>
      ))}
    </div>
  );
}

export default Property_list;
