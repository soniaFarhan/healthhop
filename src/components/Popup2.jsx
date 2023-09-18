import { ArrowBack, Login, MedicalServices } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import ProgressMobileStepper from "./Steper";

function MyVerticallyCenteredModal(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep<6){

        setActiveStep( activeStep + 1   );
    }else
    {setActiveStep(6) }
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
      img: <img src={require("../assets/WhatsApp Image 2023-09-13 at 4.49.49 PM.png")} alt="" style={{width:"100%"}} />,
      heading: <h3 >Set  up your Patient profile</h3> ,
      text: <p className="text-center" style={{fontSize:"10px"}}>In publishing and graphic  design . lorem ipsum is placeholder text commonly <br /> to demonstrate  the visual form of</p>
    },
    { id: 2,
      
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
            label="  Busniness  email eddress"
            variant="outlined"
            style={{ width: "100%" }}
          />
        ),
      input4: (
          <TextField
            id="outlined-basic"
            label=" Enter phone number"
            variant="outlined"
            style={{ width: "100%" }}
          />
        ),
        text: <p className="text-center" style={{fontSize:"10px"}}>Tell us more about yourself and you business</p>,
        logo: <div className="my-4" ><img src={require("../assets/Flag_of_Turkey.png")} alt="" width={"40px"} /></div>  
   },

   { id: 3,
    stepper: <ProgressMobileStepper activeStep={activeStep} />,
    logo:<div className="my-4" ><img src={require("../assets/Flag_of_Turkey.png")} alt="" width={"40px"} /></div>,
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


 {
  id: 4,
  logo:<div className="my-4" ><img src={require("../assets/Flag_of_Turkey.png")} alt="" width={"40px"} /></div>,
  heading: <h6 >Which of these exter  Services dose your Busniness <br /> provide your medical tourism Patients</h6> ,
  checkbox:
  <div className="scroll-container" >


  <div  className="content">
  <div class="form-check my-4 ">
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
    4&3  star Hotel Accomodation 
  </label>
</div>
   <hr />
  <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                     3  star Hotel Accomodation 
  </label>
</div>
<hr />
  <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                     Travel Excursions
  </label>
</div>
<hr />
  <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                     Transportation to and from Airport/Clinic/Hotel
  </label>
</div>
<hr />
  <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                    Vise Suppert
  </label>
</div>
<hr />
  <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                   Sightseeing Support Booking
  </label>
</div>
<hr />
  <div class="form-check">
                       <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                     <label class="form-check-label" for="flexCheckDefault">
                  Medical Complication Insurance/Travel Insurance
  </label>
</div>
<hr />
  </div>
  </div>
},

{
  logo:<div className="my-4" ><img src={require("../assets/Flag_of_Turkey.png")} alt="" width={"40px"} /></div>,

 
 
    
 input:
 <div className="scroll-container">


 
 <div class="mb-3 d-grid gap-3 content">


<h6> Let's set up the Procedures your  clinic  provides! We  will add these  one at a time. so let's  add the first  procedure here </h6> ,
  
    
        <TextField
          id="outlined-basic"
          label=" Upload Image"
          variant="outlined"
          style={{ width: "100%" }}
        />
     
        <TextField
          id="outlined-basic"
          label="Mesical Staff Frist Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label=" Categroy name"
          variant="outlined"
          style={{ width: "100%" }}
        />
      
  <textarea style={{fontSize:"9px"}} class="form-control" placeholder=  "Discription " id="exampleFormControlTextarea1" rows="10"></textarea>
</div>

</div>
},


{
  logo:<div className="my-4" ><img src={require("../assets/Flag_of_Turkey.png")} alt="" width={"40px"} /></div>,

  heading: <h4> Summary of your Medical <br /> Practice: </h4> ,
  input: <div class="mb-3">
  
  <textarea style={{fontSize:"9px"}} class="form-control" placeholder=  "Tell People How great you are qualifications and why  they should chose your clinic " id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
},
{
  logo:<div className="my-4" ><img src={require("../assets/Flag_of_Turkey.png")} alt="" width={"40px"} /></div>,
  heading: <h4>Brief Description</h4> ,
  input: <div class="mb-3">
  
  <textarea style={{fontSize:"9px"}} class="form-control" placeholder=  "Tell People How great you are qualifications and why  they should chose your clinic " id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
},
{
  logo:<div className="my-4" ><img src={require("../assets/Flag_of_Turkey.png")} alt="" width={"40px"} /></div>,
  heading: <h4>Add Medical Staff</h4> ,
  input: <div class="mb-3 d-grid gap-3">
     <div className=""></div>
  
    
        <TextField
          id="outlined-basic"
          label=" Upload Image"
          variant="outlined"
          style={{ width: "100%" }}
        />
     
        <TextField
          id="outlined-basic"
          label="Mesical Staff Frist Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
        <TextField
          id="outlined-basic"
          label=" Categroy name"
          variant="outlined"
          style={{ width: "100%" }}
        />
      
  <textarea style={{fontSize:"9px"}} class="form-control" placeholder=  "Discription " id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
},{
heading: <h5>Your Address</h5>,

text :" where can"
}


  ]);


  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{position:"relative", padding:"0px"}}> 

      { data[activeStep]?.img }
        <Button style={{}} onClick={ handleback}  variant="text">

         
          {" "}
          <ArrowBack />
        </Button>
        {}
        <Modal.Title
          className="text-center"
          style={{ width: "100%" }}
          id="contained-modal-title-vcenter"
        >
          <div style={{
            
          }} className="text-center d-flex ms-5  ps-5">
            

             {data[activeStep]===data[0] ? "":<ProgressMobileStepper activeStep={activeStep} />  } 
           
        

          <div className="me-5">

          {data[activeStep].logo}
          </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-5 my-2">
        <h3 className="text-center mb-2">{data[activeStep].heading}</h3>
        <p>  {data[activeStep].text} </p>

          {data[activeStep].checkbox}


        
        <div className="my-2" style={{ width: "100%" }}>
          {data[activeStep]?.input}
        </div>
        <div className="my-2" style={{ width: "100%" }}>
          {data[activeStep]?.input2}
        </div>
        <div className="my-2" style={{ width: "100%" }}>
          {data[activeStep]?.input3}
        </div>
{data[activeStep] === data[6] || data[activeStep] === data[4] ?
          <div className="pt-2">
        <Button
     
      style={{
        backgroundColor: " transparent",
        color: "#07A6A9",
        padding: "16px 80px",
        fontSize: "10px",
        width: "100%",
        border:"1px solid #07A6A9"
      }}
    >
   Add
    </Button>
        </div>:""
}


        <div className="pt-2">
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
    {
      data[activeStep]==data[0]?"Start Setup":"continue"
    }
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
