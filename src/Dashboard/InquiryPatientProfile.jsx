import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { TextField } from "@mui/material";
const InquiryPatientProfile = (props) => {
  const navigate=useNavigate()
  const [modalShow, setModalShow] = React.useState(false);
  const { state } = useLocation();
  useEffect(() => {
    setData(state.ele);
  }, [state]);
  const [data, setData] = useState([]);
  return (
    <>
      <div
        className=" mt-3 container px-0 w-100"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <div className="px-4" style={{ backgroundColor: "#91D7D8" }}>
          <h2 className="py-3 text-darks" style={{ color: "white" }}>
            {data.name}'s Profile Details
          </h2>
        </div>
        <div className="col d-flex justify-content-start px-4">
          <div className="mt-2">
            <label
              style={{ fontSize: "60px", border: "3px dashed #9E9E9E" }}
              className="text-center px-4 rounded"
              htmlFor="img"
            >
              <img src={data.img} className="img-fluid w-50" alt="" />
            </label>
          </div>
        </div>

        <div className="row mt-2 py-2 px-3">
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Full Name
            </label>
            {/* <input
              type="text"
              className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"
              placeholder="Name"
            /> */}

            <input className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"/>
             
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Age
            </label>
            <input className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"/>
             
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Date of Birth
            </label>
            <input className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"/>
              
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Gender
            </label>
            <input className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"/>
             
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Height
            </label>
            <input className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"/>
             
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Current Weight
            </label>
            <input className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"/>
              
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Current Medication
            </label>
            <input className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"/>
             
          </div>

          <div className="col-md-12 mt-3">
            <label htmlFor="" className="fw-bold">
              Country
            </label>
            <input className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"/>
            
          </div>
        </div>
        <div className="col mt-4 px-4">
          <label htmlFor="" className="fw-bold">
          Gallery
          </label>
          <div className="mt-2">
            <label
              style={{ fontSize: "90px", border: "3px dashed #9E9E9E" }}
              className="text-center px-4 rounded"
              htmlFor="img"
            >
              <img src={data.refImg1} className="w-25 img-fluid" alt="" />
              <img src={data.refImg2} className="w-25 img-fluid" alt="" />
              <img src={data.refImg3} className="w-25 img-fluid" alt="" />
            </label>
          </div>
        </div>
        <div className="d-flex mt-2 gap-4 py-2 px-3">
          
          <div className="dropdown" style={{width:"300px"}}>
          <Button className=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: "#07A6A9", border: "none" }}>
            Send Offer To This Patient
          </Button>
          <ul style={{ backgroundColor: "#07A6A9", border: "none" }} className="dropdown-menu px-3" aria-labelledby="dropdownMenuButton1">
            <li><button onClick={() => setModalShow(true)} className="mb-0 " style={{cursor:"pointer",backgroundColor: "#07A6A9", border: "none" ,color:"white"}} >Create Custom Order</button></li>
            <li><button  className="mb-0 " style={{cursor:"pointer",backgroundColor: "#07A6A9", border: "none" ,color:"white"}} >Already Existing Package</button></li>
          </ul>
          </div>

          <Button onClick={()=>navigate("/message")} style={{ backgroundColor: "#07A6A9", border: "none" }}>
           Open Chat
          </Button>
        </div>
      </div>
     {modalShow && <CustomPakage
        show={modalShow}
        onHide={() => setModalShow(false)}
        />}
    </>
  );
};

export default InquiryPatientProfile;


function CustomPakage(props) {
  return (
    <Modal style={{borderRadius:"50px",zIndex:99999}}  
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton style={{backgroundColor:"#07A6A9",color:"white"}}>
         <h4>Custom Packages</h4>
        
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="mb-2">
        
        <TextField className="my-2"
          id="outlined-basic"
          label=" Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
  
  <textarea
              style={{ height:"120px" }}
              class="form-control"
              placeholder="Description "
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>

        <TextField className="my-2"
          id="outlined-basic"
          label=" Price"
          variant="outlined"
          style={{ width: "100%" }}
        />
  


      </div>
      <div className="pt-2">
          <Button
           onClick={()=>props.onHide()}
            style={{
              backgroundColor: "#07A6A9",
              color: "white",
              padding: "16px 80px",
              fontSize: "10px",
              width: "100%",
            }}
          >
           Done
          </Button>
        </div>
      </Modal.Body>
      
    </Modal>
  );
}