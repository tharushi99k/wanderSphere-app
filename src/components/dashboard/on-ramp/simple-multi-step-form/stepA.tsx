
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/buttons/button";

interface StepProps {
    handleNextStep: () => void;
    
    
}


const StepA: React.FC<StepProps> = ({handleNextStep}) =>  {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    if (handleNextStep) handleNextStep();
  };

  
  return (
    <div className="flex flex-col w-full items-start justify-start gap-8">
      <div className="flex flex-col w-full">
        <h3 className="text-xl font-medium">Step 1 - Property Information</h3>
        <h4 className="text-sm font-light">
          Enter your property information: it will be used to setup your digital
          asset
        </h4>
      </div>

      {/* form */}
      <div className="grid grid-cols-1 gap-8 w-full">
        {/* image */}
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="flex items-center justify-start w-full gap-1">
            <h4 className="text-base font-normal">Upload Property Images *</h4>
            <h4 className="text-sm font-normal">PNG , JPEG</h4>
          </div>
          <div className="w-full  ">
            <input
              id="image"
              type="text"
              placeholder=""
              className="  w-full bg-[#E6F6FF] h-20 border border-[#80BDFF] rounded-lg"
              {...register("image", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.image && errors.image.type === "required" && (
              <p className="errorMsg">Property Image is required.</p>
            )}
            {errors.image && errors.image.type === "pattern" && (
              <p className="errorMsg">Property Image is not valid.</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="flex items-center justify-start w-full gap-1">
            <h4 className="text-base font-normal">Property Name *</h4>
          </div>
          <div className="w-full  ">
            <input
              id="name"
              type="text"
              placeholder=""
              className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
              {...register("name", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg">Name is required.</p>
            )}
            {errors.name && errors.name.type === "pattern" && (
              <p className="errorMsg">Name is not valid.</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="flex items-center justify-start w-full gap-1">
            <h4 className="text-base font-normal">Property Description *</h4>
          </div>
          <div className="w-full  ">
            <input
              id="description"
              type="text"
              placeholder=""
              className="  w-full bg-[#E6F6FF] h-20 border border-[#80BDFF] rounded-lg"
              {...register("description", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.description && errors.description.type === "required" && (
              <p className="errorMsg">Description is required.</p>
            )}
            {errors.description && errors.description.type === "pattern" && (
              <p className="errorMsg">Description is not valid.</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="flex flex-col items-center justify-start w-full gap-1">
            <div className="flex items-center justify-start w-full">
              <h4 className="text-base font-normal">Counrty *</h4>
            </div>

            <div className="w-full  ">
              <input
                id="counrty"
                type="text"
                placeholder=""
                className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
                {...register("counrty", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.counrty && errors.counrty.type === "required" && (
                <p className="errorMsg">Counrty is required.</p>
              )}
              {errors.counrty && errors.counrty.type === "pattern" && (
                <p className="errorMsg">Counrty is not valid.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-1">
            <div className="flex items-center justify-start w-full">
              <h4 className="text-base font-normal">Province / State *</h4>
            </div>

            <div className="w-full  ">
              <input
                id="state"
                type="text"
                placeholder=""
                className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
                {...register("state", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.state && errors.state.type === "required" && (
                <p className="errorMsg">Province / State is required.</p>
              )}
              {errors.state && errors.state.type === "pattern" && (
                <p className="errorMsg">Province / State is not valid.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-1">
            <div className="flex items-center justify-start w-full">
              <h4 className="text-base font-normal">City *</h4>
            </div>

            <div className="w-full  ">
              <input
                id="city"
                type="text"
                placeholder=""
                className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
                {...register("city", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.city && errors.city.type === "required" && (
                <p className="errorMsg">City is required.</p>
              )}
              {errors.city && errors.city.type === "pattern" && (
                <p className="errorMsg">City is not valid.</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="flex items-center justify-start w-full gap-1">
            <h4 className="text-base font-normal">Property Type *</h4>
          </div>
          <div className="w-full  ">
            <input
              id="email"
              type="text"
              placeholder=""
              className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
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

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center justify-start w-full gap-1">
            <div className="flex items-center justify-start w-full">
              <h4 className="text-base font-normal">Latitude *</h4>
            </div>

            <div className="w-full  ">
              <input
                id="latitude"
                type="text"
                placeholder=""
                className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
                {...register("latitude", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.latitude && errors.latitude.type === "required" && (
                <p className="errorMsg">Latitude is required.</p>
              )}
              {errors.latitude && errors.latitude.type === "pattern" && (
                <p className="errorMsg">Latitude is not valid.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-1">
            <div className="flex items-center justify-start w-full">
              <h4 className="text-base font-normal">Longitude *</h4>
            </div>

            <div className="w-full  ">
              <input
                id="latitude"
                type="text"
                placeholder=""
                className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
                {...register("latitude", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.latitude && errors.latitude.type === "required" && (
                <p className="errorMsg">Latitude is required.</p>
              )}
              {errors.latitude && errors.latitude.type === "pattern" && (
                <p className="errorMsg">Latitude is not valid.</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center justify-start w-full gap-1">
            <div className="flex items-center justify-start w-full">
              <h4 className="text-base font-normal">Acres  *</h4>
            </div>

            <div className="w-full  ">
              <input
                id="acres "
                type="text"
                placeholder=""
                className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
                {...register("acres ", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.acres  && errors.acres .type === "required" && (
                <p className="errorMsg">Acres  is required.</p>
              )}
              {errors.acres  && errors.acres .type === "pattern" && (
                <p className="errorMsg">Acres  is not valid.</p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-1">
            <div className="flex items-center justify-start w-full">
              <h4 className="text-base font-normal">Holding entity *</h4>
            </div>

            <div className="w-full  ">
              <input
                id="holdingentity"
                type="text"
                placeholder=""
                className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
                {...register("holdingentity", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                })}
              />
              {errors.holdingentity && errors.holdingentity.type === "required" && (
                <p className="errorMsg">Email is required.</p>
              )}
              {errors.holdingentity && errors.holdingentity.type === "pattern" && (
                <p className="errorMsg">Email is not valid.</p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="flex items-center justify-start w-full gap-1">
            <h4 className="text-base font-normal">Estimated value in USD *</h4>
          </div>
          <div className="w-full  ">
            <input
              id="usd"
              type="text"
              placeholder=""
              className="  w-full bg-[#E6F6FF] h-12 border border-[#80BDFF] rounded-lg"
              {...register("usd", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.usd && errors.usd.type === "required" && (
              <p className="errorMsg">Estimated value in USD is required.</p>
            )}
            {errors.usd && errors.usd.type === "pattern" && (
              <p className="errorMsg">Estimated value in USD is not valid.</p>
            )}
          </div>
        </div>
        {/* button */}
        <div className="flex items-center justify-center w-full">
        <Button onClick={handleSubmit(onSubmit)} label="Create" />
        </div>
      </div>
    </div>
  );
}
 export default StepA;
