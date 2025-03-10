"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image"; 
import { RiDoubleQuotesL } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for reviews
type ReviewType = {
  des: string;
  title: string;
  URL: string;
  profession: string;
};


const clientReviews: ReviewType[] = [
  {
    des: "An unforgettable trip! The itinerary was well-planned, and everything was seamless from start to finish and awesome.",
    title: "Sarah Johnson",
    URL: "/assets/images/home/clientReview/Sarah.jpg",
    profession: "Travel Blogger",
  },
  {
    des: "The best vacation experience I've ever had! The team took care of every detail, making it stress-free and enjoyable.",
    title: "Mark Thompson",
    URL:  "/assets/images/home/clientReview/Mark.jpg",
    profession: "Photographer",
  },
  {
    des: "Highly recommended for anyone looking for a hassle-free adventure. The accommodations and excursions were top-notch!",
    title: "Emily Carter",
    URL: "/assets/images/home/clientReview/Emily.jpg",
    profession: "Event Planner",
  },
  {
    des: "Exceptional service and well-organized tours. The guides were knowledgeable, and we got to explore hidden gems!",
    title: "Daniel Lee",
    URL: "/assets/images/home/clientReview/Daniel.jpg",
    profession: "Business Consultant",
  },
  {
    des: "A dream vacation made possible! The agency curated a perfect itinerary that matched our preferences and budget.",
    title: "Olivia Martinez",
    URL: "/assets/images/home/clientReview/Olivia.jpg",
    profession: "Freelance Writer",
  },
];


const Review: React.FC<ReviewType> = ({ title, profession, URL, des }) => {
  return (
    <div className="mx-4 my-12 relative px-8 py-12 rounded-md bg-white z-10 shadow-lg  ">
      <span className="text-slate-100 text-6xl absolute top-4 -right-4 z-10">
        <RiDoubleQuotesL />
      </span>
      <p className="text-gray-700 text-center">{des}</p>
      <div className="flex items-center justify-center gap-4 mt-8">
        <Image
          src={URL}
          alt={title}
          height={100}
          width={100}
          className="rounded-full w-[100px] h-[100px] object-cover"
        />
        <div>
          <div className="font-medium text-lg">{title}</div>
          <div className="text-gray-500 text-sm">{profession}</div>
        </div>
      </div>
    </div>
  );
};

const ClientReviewSection: React.FC = () => {
  // Slick slider 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: false, 
  };

  return (
    <section className="  pt-16 bg-[#FBFFF5] relative w-full h-screen">
      <h3 className="text-center text-sm md:text-base lg:text-lg   font-semibold text-[#657A41] ">Client Reviews</h3>
      <p className="text-center text-[1.65rem] md:text-[2.375rem] lg:text-4xl font-bold leading-[4.43rem] ">
        Our Valuble Customers Awesome Feedbacks
      </p>

      <div className="w-[80%] mx-auto ">
        <Slider {...settings}>
          {clientReviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientReviewSection;
