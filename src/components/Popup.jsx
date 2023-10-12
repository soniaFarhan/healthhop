import { MedicalServices } from '@mui/icons-material';
import { TextField } from '@mui/material';
import React from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal style={{borderRadius:"50px"}}  
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor:"#07A6A9",color:"white"}}>
         <h4>Add Packages</h4>
        
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

function Popup () {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
   <div className=" d-flex justify-content-between aling-items-center">

   
      <button className='btn my-auto ' style={{backgroundColor:"#07A6A9",color:"white"}}  onClick={() => setModalShow(true)} >Add Package</button>
            
        

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </div>
    </>
  );
}

export default Popup 