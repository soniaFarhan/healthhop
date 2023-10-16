import { MedicalServices } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {

    const [selectedImages, setSelectedImages] = useState([]);

    function handleImageChange(event) {
      const files = event.target.files;
      const newImages = [];
  
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
  
        reader.onload = () => {
          newImages.push(reader.result);
  
          if (newImages.length === files.length) {
            setSelectedImages([...selectedImages, ...newImages]);
          }
        };
      }
    }
  
   
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
  return (
    <Modal style={{borderRadius:"50px"}}  
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        
      <Modal.Header closeButton style={{backgroundColor:"#07A6A9",color:"white"}}>
         <h4>Add Procedure</h4>
        
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="scroll-container">
      <div class="mb-3 d-grid gap-3 pe-4 px-2 content">
       
        <TextField
          id="outlined-basic"
          label="Choose category"
          variant="outlined"
          className="form-control"
        />
        <TextField
          id="outlined-basic"
          label=" Choose Sub-category"
          variant="outlined"
          className="form-control"
        />
        <textarea
          style={{ fontSize: "12px", height: "150px" }}
          class="form-control"
          placeholder="Add a detailed description of the procedure and why people should choose your clinic over other providers. The more details the better."
          id="exampleFormControlTextarea1"
          rows="29"
        ></textarea>
        <div className="row">
          <div className="">
            {selectedImages.length > 0 && (
              <div className="row">
                {selectedImages.map((image, index) => (
                  <div className="col-4" key={index}>
                    <img
                      src={image}
                      alt={`Selected ${index}`}
                      width={"100%"}
                      height={"100px"}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col text-center">
            <div className="mt-2">
              <input
                onChange={handleImageChange}
                type="file"
                name=""
                id="img"
                hidden
                multiple
              />
               <label  style={{fontSize:"20px", border:"3px dashed #9E9E9E",width:"120px",height:"120px"}} className="text-center px-4 rounded d-flex " htmlFor="img">

                <div className="d-flex alig-items-center justify-content-center m-auto">
                <p style={{fontSize:"9px"}}>Add photos/Video</p>  <i class="bi bi-plus "></i>
                </div>
                
           </label>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="">
            <TextField
              id="outlined-basic"
              label=" Min"
              variant="outlined"
              className="form-control"
            />
          </div>
          <div className="">

            <TextField
              id="outlined-basic"
              label="Max"
              variant="outlined"
              className="form-control"
            />
          </div>
        </div>

        <div className="">

          <TextField
            id="outlined-basic"
            label="All Inclusive Price"
            variant="outlined"
            className="form-control"
          />
        </div>
      
      <div className="d-flex align-items-center ">
        <div className="form-check my-auto">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked1}
            onChange={() => setIsChecked1(!isChecked1)}
            id="1"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Instant booking"
          variant="outlined"
          className={`form-control ${isChecked1 ? '' : 'disabled'}`}
          disabled={!isChecked1}
        />
      </div>

      <div className="d-flex align-items-center">
        <div className="form-check my-auto">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isChecked2}
            onChange={() => setIsChecked2(!isChecked2)}
            id="2"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Instant booking Fixed price for All"
          variant="outlined"
          className={`form-control ${isChecked2 ? '' : 'disabled'}`}
          disabled={!isChecked2}
        />
      </div>
    

       

        <Box  >
         
        </Box>

        <div className="pt-2">
          <Button
            style={{
              backgroundColor: " transparent",
              color: "#07A6A9",
              padding: "16px 80px",
              fontSize: "15px",
              width: "100%",
              border: "1px solid #07A6A9",
            }}
          >
            Save
          </Button>
        </div>
        <div className="pt-2">
          {/* <Button
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
          </Button> */}
          
        </div>
      </div>
    </div>
      </Modal.Body>
      
    </Modal>
  );
}

function Popupprocedure () {
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
          Save Progress and Add More Later
        </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </div>
    </>
  );
}

export default Popupprocedure 