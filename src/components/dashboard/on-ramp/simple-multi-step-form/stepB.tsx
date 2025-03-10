"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/buttons/button";

interface StepProps {
    handleNextStep: () => void;
    
}

const StepB: React.FC<StepProps> = ({ handleNextStep }) => {
  

  const {
    register,
    formState: { errors },
  } = useForm();

  
  return (
    <div className="flex flex-col w-full items-start justify-start gap-8">
      <div className="flex flex-col w-full">
        <h3 className="text-xl font-medium">Step 2 - Property Docs</h3>
        <h4 className="text-sm font-light">
        Enter your property information: it will be used to setup your digital asset
        </h4>
      </div>

      {/* form */}
      <div className="grid grid-cols-1 gap-8 w-full">
        {/* image */}
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="flex items-center justify-start w-full gap-1">
            <h4 className="text-base font-normal">Upload Your Property Deed *</h4>
            <h4 className="text-sm font-normal">Only PDF</h4>
          </div>
          <div className="w-full  ">
            <input
              id="pdf"
              type="text"
              placeholder=""
              className="  w-full bg-[#E6F6FF] h-20 border border-[#80BDFF] rounded-lg"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required.</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="errorMsg">Email is not valid.</p>
            )}
          </div>
        </div>
        {/* button */}
        <div className="flex items-center justify-center w-full">
        <Button onClick={handleNextStep}  label="Next"/>
        </div>
      </div>
    </div>
  );
}

export default StepB;

