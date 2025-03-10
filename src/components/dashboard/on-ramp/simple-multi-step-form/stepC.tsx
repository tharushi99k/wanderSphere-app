// import React from 'react';


// interface StepBProps {
//   formData: {
//     incomePerMonth: string;
//     taxPercantage: string;
   
//   };
//   handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   handlePrevStep: () => void;
//   handleNextStep: () => void;
// }

// const StepC: React.FC<StepBProps> = ({ formData, handleChangeInput, handlePrevStep, handleNextStep }) => {
//     return (
//       <div>
//         <h1 className='mt-2 text-xl font-bold text-blue-900'>
//           Step C: Customer Financial Info
//         </h1>
  
//         <div className='my-2'>
//           <label>Income Per Month</label>
//           <input
//             type='number'
//             name='incomePerMonth'
//             value={formData.incomePerMonth}
//             onChange={(e) => handleChangeInput(e)}
//             className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
//           />
//         </div>
//         <div className='my-2'>
//           <label>Tax Percantage</label>
//           <input
//             type='number'
//             name='taxPercantage'
//             value={formData.taxPercantage}
//             onChange={(e) => handleChangeInput(e)}
//             className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
//           />
//         </div>
  
//         <div className='my-2 flex justify-between items-center'>
//           <button
//             className='bg-yellow-400 px-4 py-2 rounded-xl'
//             onClick={handlePrevStep}
//           >
//             Prev
//           </button>
//           <button
//             className='bg-green-400 px-4 py-2 rounded-xl'
//             onClick={handleNextStep}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default StepC;

import Button from '@/components/buttons/button'
import TokenProperty from '@/components/dashboard/on-ramp/tokenProperty'
import React from 'react'

interface StepProps {
    handleNextStep: () => void;
}
const StepC: React.FC<StepProps> = ({ handleNextStep }) =>{
  return (
    <div className="flex flex-col w-full items-start justify-start gap-8">
    <div className="flex flex-col w-full">
      <h3 className="text-xl font-medium">Step 3 - Property Preview</h3>
      <h4 className="text-sm font-light">
      Enter your property information: it will be used to setup your digital asset
      </h4>
    </div>
  
    {/* form */}
    
      {/* button */}
      <div className="flex flex-col items-center justify-center w-full gap-5">
       
        <TokenProperty/>
        <Button onClick={handleNextStep}  label="Tokenize Property" />
      </div>
    
  </div>
  )
}
export default StepC;
