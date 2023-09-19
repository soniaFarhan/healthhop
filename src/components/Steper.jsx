import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function ProgressMobileStepper({ activeStep }) {
  const theme = useTheme();

  return (
    <MobileStepper
      variant="progress"
      steps={7}
      position="static"
      color="black"
      activeStep={activeStep}
      sx={{ maxWidth: 2000, flexGrow: 2 }}
    />
  );
}
