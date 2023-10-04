import React from 'react'
import { useState } from 'react'
import ProgressMobileStepper from './Steper';
import { ArrowBack } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const SingeupStepForm = () => {
    const [step, setStep]=useState(1)

    const nextStep = () => {
        setStep(step===6?step: step + 1) ;
      };
    console.log(step)
      const prevStep = () => {
        setStep(step===1?step: step - 1);
      };


  return (
    <>
<div className=""style={{}}>


    <div className="d-flex justify-content-center align-items-center layout" style={{background:"white",}}>
        <div className=" rounded-4 shadows " style={{backgroundColor:"shadows",width:"510px"}}>
       <div className="head d-flex  justify-content-between aling-items-ceneter">

       {step === 1 &&
             
           
             <img
          src={require("../assets/WhatsApp Image 2023-09-13 at 4.49.49 PM.png")}
          alt=""
          style={{ width: "100%" }}
        />
           }

          <div className="my-4" >

         
          <button className='btn py-3' onClick={prevStep}> <ArrowBack /></button>



          </div>

        

          

          {step === 1 ||
             
           
             <ProgressMobileStepper activeStep={step} />
           }
         

          <div className="my-auto me-5">

          {step === 1 ||
             <div className="">
                 <img
             src={require("../assets/Flag_of_Turkey.png")}
             alt=""
             width={"60px"}
           />
             </div>
          
             
           }
         
        </div>
        


       </div>
       <hr />
       <div className="body m-4 " >

       {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
      {step === 6 && <Step6 />}
       </div>
       


       <div className="footer m-4">
      
       <div className="pt-2">
          {step < 8 ? (
            <Button
              onClick={() => nextStep()}
              style={{
                backgroundColor: "#07A6A9",
                color: "white",
                padding: "16px 80px",
                fontSize: "15px",
                width: "100%",
              }}
            >
              {step == 1 ? "Start Setup" : "continue"}
            </Button>
          ) : (
            <Link to="/inquiries">
              <Button
                onClick={() => nextStep()}
                style={{
                  backgroundColor: "#07A6A9",
                  color: "white",
                  padding: "16px 80px",
                  fontSize: "12px",
                  width: "100%",
                }}
              >
                {step == 1 ? "Start Setup" : "continue"}
              </Button>
            </Link>
            



          )}


{ step===2 &&
           <div className="d-flex justify-content-center aling-item-center mt-4 mb-1">
          <div className="">
            <img src={require("../assets/fb.svg").default} alt="" />
      
          </div>
          <div className="">
            <img src={require("../assets/google.svg").default} alt="" />
          </div>
        </div>
}

        </div>


          
       </div>
       
       
          </div>
    </div>
    </div>
      
    </>
  )
}

export default SingeupStepForm



 
const Step1=()=>{
return(1)
    
};
const Step2=()=>{

    return(
    <>
       <h3 className="text-center mb-2">About You </h3>
    <p className="text-center" style={{ fontSize: "10px" }}>
          Tell us more about yourself and you business
        </p>
    
    <div className="mb-5">

      
    <TextField className="my-2"
      id="outlined-basic"
      label=" Busniness name"
      variant="outlined"
      style={{ width: "100%" }}
    />
  

    <TextField  className="my-2"
      id="outlined-basic"
      label=" Your name"
      variant="outlined"
      style={{ width: "100%" }}
    />
  
  
    <TextField  className="my-2"
      id="outlined-basic"
      label="  Busniness  email eddress"
      variant="outlined"
      style={{ width: "100%" }}
    />
  </div>
  </>
  )
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
