import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function ProgressMobileStepper({ activeStep }) {
  const theme = useTheme();

  const stepperStyles = {
    "& .MuiMobileStepper-dot": {
      backgroundColor: "green", // Change to your desired green color for dots
    },
    "& .MuiButtonBase-root": {
      color: "green", // Change to your desired green color for buttons
    },
    "& .MuiSvgIcon-root": {
      fill: "green", // Change to your desired green color for icons
    },
  };

  return (
    <MobileStepper
      variant="progress"
      steps={7}
      position="static"
      activeStep={activeStep}
      
      
      sx={{ maxWidth: "100%", color:"red",  flexGrow: 1, padding: "0px", ...stepperStyles }}
    />
  );
}
