import Image from "next/image";
import React from "react";
import Highlights from "../highlights/highlights";
import CardBuy from "./property_details/cardBuy";

function BentleyAvenuecontext() {
  return (
    <div className="flex flex-col items-start justify-center w-full px-4 py-5 gap-8">
      {/* image and card */}
      <div className="flex items-center justify-start w-full gap-5">
        <Image
          src={"/assets/images/property_details/property.png"}
          alt="tokenized property icon 1"
          width={1000}
          height={1000}
          className="w-4/5 h-auto"
        />
        <CardBuy />
      </div>

      {/* T3D */}
      <div className="flex items-start justify-between w-[71%] ">
        <div className="">
          <h4 className="text-xl font-bold">T3D – 3-Bedroom with River View</h4>
        </div>
        <div className="">
          <h3 className="text-xl font-bold text-[#008BEC]">$ 1, 600, 000</h3>
        </div>
      </div>

      {/* parag and images */}
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start justify-center w-[71%] gap-3">
          <h4 className="text-base font-semibold">Overview</h4>
          <h4 className="text-sm font-normal">
            Scheduled to open in 2023, Martinhal Residences will introduce a
            collection of contemporary apartments in the vibrant Park of Nations
            neighborhood, at the heart of Lisbon. Developed by the renowned
            Elegant Group, creators of the luxury Martinhal brand, these 3 to 5
            bedroom residences are meticulously designed to the highest
            standards, offering a sophisticated living experience. Tailored for
            multi-generational living, these exceptional apartments will grant
            access to unique Martinhal services. The facilities include an
            indoor swimming pool with bath and changing rooms, parking for cars
            and bicycles, a restaurant, gymnasium, kids club, babysitting
            services, business center with meeting rooms and offices, a shop,
            laundry and dry-cleaning services, and event services. Martinhal
            Residences epitomizes comfort and style, featuring high-end
            materials and products such as Bulthaup kitchens, Margres Prestige
            Calacata tiles in the bathrooms, and Iroko wooden floors. This
            development sets a new standard for luxury living in Lisbon,
            combining modern elegance with family-friendly amenities.
          </h4>
        </div>
        <div className="flex flex-col gap-1 w-1/4">
          <Image
            src={"/assets/images/property_details/pro1_img.png"}
            alt="tokenized property icon 1"
            width={1000}
            height={1000}
            className="w-64 h-auto"
          />
          <Image
            src={"/assets/images/property_details/pro2_img.png"}
            alt="tokenized property icon 1"
            width={1000}
            height={1000}
            className="w-64 h-auto"
          />
        </div>
      </div>

      {/* highlights */}
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start justify-center w-[71%] border-t gap-3 py-6">
          <h3 className="text-lg font-semibold">Highlights</h3>
          <Highlights />
        </div>
        <div className=" w-1/4">
          <Image
            src={"/assets/images/property_details/pro3_img.png"}
            alt="tokenized property icon 1"
            width={1000}
            height={1000}
            className="w-64 h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default BentleyAvenuecontext;
