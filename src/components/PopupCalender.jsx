import { MedicalServices } from '@mui/icons-material';
import { TextField } from '@mui/material';
import React from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import { SlCalender } from 'react-icons/sl';
import Calender from '../Dashboard/Calender/Calender';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal style={{borderRadius:"50px", zIndex:"1100"}}  
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton style={{backgroundColor:"#07A6A9",color:"white"}}>
         <h4>Add Packages</h4>
        
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body style={{height:"90vh", overflow:"auto"}}>
      <Calender/>
      <div className='row'>
        <div className="col-md-10 mx-auto mb-2"><input type="text" className='form-control' placeholder='Name' /></div>
        <div className="col-md-10 mx-auto mb-2"><textarea name="" className='form-control' placeholder='Description' id="" cols="30" rows="10"></textarea></div>
        <div className="col-md-10 mx-auto mb-2">
        <div className='form-floating'>
        <select name="" className='form-control form-select' id="packageSelect">
          <option value="0">$10,000</option>
          <option value="1">$20,000</option>
          <option value="2">$30,000</option>
        </select>
        <label htmlFor="packageSelect">Package</label>
        </div>
        </div>
        <div className="col-md-10 mx-auto mb-2"><button type='submit' className='btn btn-primary w-100'>Done</button></div>
      </div>
      </Modal.Body>
      
    </Modal>
  );
}

function PopupCalender () {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
   <div className=" d-flex justify-content-between align-items-center">

   
   <button className='btn text-white fs-4 m-auto p-0' onClick={() => setModalShow(true)} ><SlCalender /></button>
            
        

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        </div>
    </>
  );
}

export default PopupCalender