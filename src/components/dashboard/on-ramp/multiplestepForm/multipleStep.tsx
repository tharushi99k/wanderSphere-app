'use client';

import { SetStateAction, useState } from "react";
import Step1 from "./images/step1";
import Step2 from "./images/step2";
import Step3 from "./images/step3";
import Step1Active from "./images/step1Active";

const MultipleStepForm: React.FC = () => {
  const steps = ["Create Password", "Secure Wallet", "Confirm Code"];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [complete, setComplete] = useState<boolean>(false);

  const handleStepClick = (step: SetStateAction<number>) => {
    if (!complete) {
      setCurrentStep(step);
    }
  };

  const icons = [<Step1 key="step1" />, <Step2 key="step2" />, <Step3 key="step3" />];
  const icons2 = [<Step1Active key="step1Active" />, <Step2 key="step2Active" />, <Step3 key="step3Active" />];

  return (
    <>
      <div className="flex items-center justify-center w-4/5">
        {steps.map((step, i) => (
          <div
            key={i}
            onClick={() => handleStepClick(i + 1)}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div
              className={`border rounded-full w-[3.25rem] h-[3.25rem] bg-white overflow-hidden z-[2] flex items-center justify-center ${
                i === 0 &&
                currentStep === 1 &&
                "!bg-[#E6F6FF] border-1 border-[#80BDFF]"
              } ${
                i + 1 < currentStep || complete
                  ? "!bg-[#E5E5E5] !text-white"
                  : ""
              } ${(i !== 0 || currentStep !== 1) && ""}`}
            >
              {i + 1 < currentStep || complete ? icons2[i] : icons[i]}
            </div>
            <p className="text-black text-sm font-bold mt-3">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Complete" : "Next"}
        </button>
      )}
    </>
  );
};

export default MultipleStepForm;

