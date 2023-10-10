import { MedicalServices } from '@mui/icons-material';
import { TextField } from '@mui/material';
import React from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal style={{borderRadius:"50px"}}  
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor:"#07A6A9",color:"white"}}>
         <h4>Add Medical Staff</h4>
        
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="mb-2">
        
        <TextField className="my-2"
          id="outlined-basic"
          label=" Medical Practitioner's Name"
          variant="outlined"
          style={{ width: "100%" }}
        />


<select class="form-select" aria-label="Default select example">
  <option disabled selected>Choose one</option>
  <option value="1">Orthopedics</option>
  <option value="2">Gynecology</option>
  <option value="3">Orthopedics</option>
</select>
  


      </div>
        
  <textarea
              style={{ height:"120px" }}
              class="form-control"
              placeholder="Brief Bio "
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
      <div className="pt-2">
          <Button
        
            style={{
              backgroundColor: "#07A6A9",
              color: "white",
              padding: "16px 80px",
              fontSize: "10px",
              width: "100%",
            }}
          >
           Add
          </Button>
        </div>
      </Modal.Body>
      
    </Modal>
  );
}

function Popupmedical () {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
   <div className=" d-flex justify-content-between aling-items-center">

   
     
            
      <Button  onClick={() => setModalShow(true)}
          style={{
            backgroundColor: " transparent",
            color: "#07A6A9",
            padding: "16px 80px",
            fontSize: "15px",
            width: "100%",
            border: "1px solid #07A6A9",
          }}
        >
          Add
        </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </div>
    </>
  );
}

export default Popupmedical 