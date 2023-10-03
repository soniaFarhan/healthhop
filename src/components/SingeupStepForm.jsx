import React from 'react'
import { useState } from 'react'

const SingeupStepForm = () => {
    const [step, setStep]=useState(1)

    const nextStep = () => {
        setStep(step===6?step: step + 1) ;
      };
    console.log(step)
      const prevStep = () => {
        setStep(step===6?step: step - 1);
      };


  return (
    <>
     {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
      {step === 6 && <Step6 />}
     
      
          <button className='btn' onClick={prevStep}>Previous</button>
       
       
          <button className='btn' onClick={nextStep}>Next</button>
       
    </>
  )
}

export default SingeupStepForm



 
const Step1=()=>{
return(1)
    
};
const Step2=()=>{

    return(2)
};
const Step3=()=>{
    return(3)

};
const Step4=()=>{

    return(4)
};
const Step5=()=>{
    return(5)

};
const Step6=()=>{

    return(6)
};
