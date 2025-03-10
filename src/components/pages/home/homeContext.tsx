import ClientReviewSection from "@/components/home/client_review/clientReviewContext";
import DiscoverContext from "@/components/home/discover/discoverContext";
import NewsLetter from "@/components/home/newsletter/NewsLetter";
import SectionContext_2 from "@/components/home/sections/section_2/sectioncontext_2";
import Video_Wrap from "@/components/home/sections/video_section/video_wrap";
import React from "react";

function HomeContext() {
  return (
    <div className="flex flex-col items-center justify-between w-full ">
      <Video_Wrap />
      <SectionContext_2 />
      <DiscoverContext />
      <ClientReviewSection />
      <NewsLetter />
    </div>
  );
}

export default HomeContext;
