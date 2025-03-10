'use client';
import React, { useEffect, useState } from 'react';
import StepA from './stepA';
import StepB from './stepB';
import StepC from './stepC';
import Step1 from './images/step1';
import Step2 from '../multiplestepForm/images/step2';
import Step3 from '../multiplestepForm/images/step3';
import Step1Active from './images/step1active';
import Step2Active from './images/step2active';
import Step3Active from './images/step3active';

interface FormData {
  name: string;
  description: string;
  country: string;
  state: string;
  city: string;
  email: string;
  latitude: string;
  acres: string;
  holdingEntity: string;
  usd: string;
  pdf:String;
}

const initialFormData: FormData = {
  name: '',
  description: '',
  country: '',
  state: '',
  city: '',
  email: '',
  latitude: '',
  acres: '',
  holdingEntity: '',
  usd: '',
  pdf: '',
};

const stepsArray = [<Step1 key={1}/>, <Step2 key={2}/>, <Step3 key={3}/>];
const stepsArray1 = [<Step1Active key={1}/>, <Step2Active key={2}/>, <Step3Active key={3}/>];

interface SimpleMultiStepFormProps {
  showStepNumber: boolean;
}

const SimpleMultiStepForm: React.FC<SimpleMultiStepFormProps> = ({ showStepNumber }) => {
  const [step, setStep] = useState(stepsArray[0]);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleNextStep = () => {
    if (step === <Step1/>) setStep(<Step2/>);
    else if (step === <Step2/>) setStep(<Step3/>);
  };

 

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderTopStepNumbers = () => {
    return (
      <div className="flex justify-center py-10">
        <section className='mt-2 mb-4 flex items-center justify-between w-3/4 max-w-lg'>
            
          {stepsArray.map((item , index) => (
            <div
              key={index}
              className={`w-[3.25rem] h-[3.25rem] flex justify-center items-center border   rounded-full cursor-pointer ${item === step ? 'bg-[#E6F6FF] border-[#80BDFF]' : 'bg-[#E5E5E5] border-[#D1D1D1]'}`}
              onClick={() => setStep(item)}
              
            >
             {item}
            </div>
          ))}
        </section>
      </div>
    );
  };

  return (
    <div className='w-full'>
      {renderTopStepNumbers()} 

      {/* Render Steps */}
      {step === stepsArray[0] && (
        <StepA
          handleNextStep={handleNextStep}
        />
      )}
      {step === stepsArray[1] && (
        <StepB
          handleNextStep={handleNextStep}
        />
      )}
      {step === stepsArray[2] && (
        <StepC 
          handleNextStep={handleNextStep}
        />
      )}
    </div>
  );
};

export default SimpleMultiStepForm;
