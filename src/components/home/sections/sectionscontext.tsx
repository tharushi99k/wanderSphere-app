import React from "react";
import SectionContext_1 from "./section_1/sectioncontext_1";
import SectionContext_2 from "./section_2/sectioncontext_2";
import SectionContext_3 from "./section_3/sectioncontext_3";
import SectionContext_4 from "./section_4/sectioncontext_4";
import SectionContext_5 from "./section_5/sectioncontext_5";
import Footer from "@/components/footer/footer";


function SectionsContext() {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <SectionContext_1 />
      <SectionContext_3/>
      <SectionContext_4/>
      <SectionContext_5/>
      <Footer/>

      
    </div>
  );
}

export default SectionsContext;
