import { MedicalServices } from '@mui/icons-material';
import { Avatar, Rating, TextField } from '@mui/material';
import React from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal style={{borderRadius:"50px"}}  
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor:"#F0F2F2",color:"black"}}>
        
        
        <Modal.Title id="contained-modal-title-vcenter">
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
   <div className="d-flex">
    <div className="me-3">
<img className='rounded-5' src={props.image} width={"500px"} height={"100%"} alt="" />
        
    </div>

    <div className="" style={{width:"",height:"460px"}}>
<div className="scroll-container3"  >
<div className="content">
<div className="d-flex aling-items-center">
    <Avatar src={require("../assets/Group 49507.png")}/>
    <p className='ms-2 my-auto'>ghjhgj</p>
</div>
   <div className="d-flex">
    
   <div className=""><Rating name="read-only" value={5} readOnly /></div>  <h5>hjgjghghg</h5>
    </div> 
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
</p>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
</p>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
</p>
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolor, praesentium exercitationem, ipsam fugit non aut expedita id nulla iure quisquam, debitis voluptatem! Vero, illum? Provident numquam amet rem at.
</p>
</div>




</div>

  

    </div>
   </div>
      </Modal.Body>
      
    </Modal>
  );
}



export default MyVerticallyCenteredModal 