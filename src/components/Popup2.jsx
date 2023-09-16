import { ArrowBack, Login, MedicalServices } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import ProgressMobileStepper from "./Steper";

function MyVerticallyCenteredModal(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep<3){

        setActiveStep( activeStep + 1   );
    }else
    {setActiveStep(3) }
  };
  const handleback = () => {
    if(activeStep>0){

        setActiveStep( activeStep - 1   );
    }else
    {setActiveStep(0) }
  };

  const [data, setData] = useState([
    {
      id: 1,
      stepper: <ProgressMobileStepper activeStep={activeStep} />,
      heading:   <p className="mb-5">What is Your email <br /> adress?</p> ,
      input: (
        <TextField
          id="outlined-basic"
          label="E-mail address"
          variant="outlined"
          style={{ width: "100%" }}
        />
      ),

      login: (
        <Button
          onClick={() => handleback()}
          className="text-center mx-auto"
          variant="text"
        >
          {" "}
          <h3 className="text-center my-2 mt-5" style={{ color: "#07A6A9" }}>
            Login
          </h3>
        </Button>
      ),
      

    },

    {
      id: 2,
      img:'',
      heading: <h3 >Set  up your Patient profile</h3> ,
      text: <p className="text-center" style={{fontSize:"10px"}}>In publishing and graphic  design . lorem ipsum is placeholder text commonly <br /> to demonstrate  the visual form of</p>
    },
    { id: 3,
        stepper: <ProgressMobileStepper activeStep={activeStep} />,
        text: "Data 3" , 
        heading: "About You",
        input: (
            <TextField
              id="outlined-basic"
              label=" Busniness name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          ),
        input2: (
            <TextField
              id="outlined-basic"
              label=" Your name"
              variant="outlined"
              style={{ width: "100%" }}
            />
          ),
        input3: (
            <TextField
              id="outlined-basic"
              label=" Enter phone number"
              variant="outlined"
              style={{ width: "100%" }}
            />
          ),
          text: <p className="text-center" style={{fontSize:"10px"}}>Tell us more about yourself and you business</p>
     },
    { id: 4,
        stepper: <ProgressMobileStepper activeStep={activeStep} />,
        text: "Data 3" , 
        heading: "Password",
        input: (
            <TextField
              id="outlined-basic"
              label=" Password"
              variant="outlined"
              style={{ width: "100%" }}
            />
          ),
        input2: (
            <TextField
              id="outlined-basic"
              label=" Re-enter   password"
              variant="outlined"
              style={{ width: "100%" }}
            />
          ),
      
          text: <p className="text-center" style={{fontSize:"10px"}}> Enter your password for business frofile</p>
     },

  ]);


  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Button onClick={ handleback} variant="text">
          {" "}
          <ArrowBack />
        </Button>
        {}
        <Modal.Title
          className="text-center"
          style={{ width: "100%" }}
          id="contained-modal-title-vcenter"
        >
          <div className="text-center d-flex ms-5 ps-5">
          <ProgressMobileStepper  activeStep={activeStep} />

          <img src={require("../assets/Flag_of_Turkey.png")} alt="" width={"40px"} />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-5 my-2">
        <h3 className="text-center mb-2">{data[activeStep].heading}</h3>
        <p>  {data[activeStep].text} </p>
        <div className="my-2" style={{ width: "100%" }}>
          {data[activeStep]?.input}
        </div>
        <div className="my-2" style={{ width: "100%" }}>
          {data[activeStep]?.input2}
        </div>
        <div className="pt-5">
        <Button
      onClick={() => handleNext()}
      style={{
        backgroundColor: "#07A6A9",
        color: "white",
        padding: "16px 80px",
        fontSize: "10px",
        width: "100%",
      }}
    >
     continue
    </Button>
        </div>

        <div className="text-center">
        {data[activeStep].login}
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Popup2() {
  const [modalShow, setModalShow] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <button
        onClick={() => setModalShow(true)}
        className="btn btn_light rounded-pill"
      >
        <Login />
        Patient login
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Popup2;
