import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function ProgressMobileStepper({ activeStep }) {
  const theme = useTheme();



  return (

   
   <div className="my-auto ms-5 ps-5" style={{width:"300px"}}>

  
    <MobileStepper className=""
      variant="progress"
      steps={10}
      position="static"
      activeStep={activeStep}
      
      
      sx={{ maxWidth: "100%",   flexGrow: 1, padding: "0px", marginX:"auto"  }}
    />
      </div>
  );
}
