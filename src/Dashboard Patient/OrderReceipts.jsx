import { Box, FormControl, InputLabel, MenuItem, Rating, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button} from 'react-bootstrap'
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const OrderReceipts = () => {
const data=[
{
  name:  <h5 className='fw-bold'>  Hair Transplant  <span  style={{fontSize:"13px"}}> - John Doe</span> </h5>,
  orderno:<h5 className='fw-bold'>  Order number: <span className='fw-light' style={{fontSize:"13px"}}>  0009032023-3</span> </h5>,
  chat:<p>air transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing skin from one part of the
  scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma</p>,
  amount: <h5 className='fw-bold'> Amount  <span  className='fw-light' style={{fontSize:"17px"}}> $20,000</span> </h5>
},
{
  name:  <h5 className='fw-bold'>  Hair Transplant  <span  style={{fontSize:"13px"}}> - John Doe</span> </h5>,
  orderno:<h5 className='fw-bold'>  Order number: <span className='fw-light' style={{fontSize:"13px"}}>  0009032023-3</span> </h5>,
  chat:<p>air transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing skin from one part of the
  scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma</p>,
  amount: <h5 className='fw-bold'> Amount  <span  className='fw-light' style={{fontSize:"17px"}}> $20,000</span> </h5>
},
{
  name:  <h5 className='fw-bold'>  Hair Transplant  <span  style={{fontSize:"13px"}}> - John Doe</span> </h5>,
  orderno:<h5 className='fw-bold'>  Order number: <span className='fw-light' style={{fontSize:"13px"}}>  0009032023-3</span> </h5>,
  chat:<p>air transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing skin from one part of the
  scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma</p>,
  amount: <h5 className='fw-bold'> Amount  <span  className='fw-light' style={{fontSize:"17px"}}> $20,000</span> </h5>
},
{
  name:  <h5 className='fw-bold'>  Hair Transplant  <span  style={{fontSize:"13px"}}> - John Doe</span> </h5>,
  orderno:<h5 className='fw-bold'>  Order number: <span className='fw-light' style={{fontSize:"13px"}}>  0009032023-3</span> </h5>,
  chat:<p>air transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing skin from one part of the
  scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma</p>,
  amount: <h5 className='fw-bold'> Amount  <span  className='fw-light' style={{fontSize:"17px"}}> $20,000</span> </h5>
},


]
const [modalShow, setModalShow] = useState(false);
const [age, setAge] = React.useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};

  return (
    <>
    <h4 className="my-3">Order Receipts</h4>
<div className="mt-4 ms-auto" style={{width:"10rem"}}>
<Box sx={{ minWidth: 120,bgcolor:"white" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Sort By Date</MenuItem>
          <MenuItem value={20}>Sort Alphabetically</MenuItem>
          <MenuItem value={30}>Sort By Price </MenuItem>
        </Select>
      </FormControl>
    </Box>

</div>

<div className=" my-5 p-3 container shadows2 " style={{borderRadius:"14px", backgroundColor:"#ffff"}}>



{
data.map((e)=>{
  return(


<>







  <div className=" m-2 p-3"  style={{backgroundColor:"#F5F5F5",borderRadius:"14px"}}>
  <div className="d-flex aling-items-center justify-content-between">

<div>
  {e.name}
</div>

<div className=''>
 {e.orderno}
 
 </div>
</div>
<div className="fw-light">
{
  e.chat
}
</div>


<div className="d-flex aling-items-center justify-content-between">

<div>
 {e.amount}
</div>

<div className='d-flex aling-items-center justift-content-between'>
  <div className="m-2">
  


<Button onClick={()=>setModalShow(true)} variant="contained" style={{backgroundColor:"transparent",color:"#07A6A9",padding:"6px 27px",fontSize:"10px",border:"1px solid #07A6A9"}}>Add Review</Button>

  </div>
<div className="m-2">
<Link to={"/patient-details"}>


<Button variant="contained" style={{backgroundColor:"#07A6A9",padding:"6px 27px",fontSize:"10px",color:"white"}}>See details</Button>
</Link>
</div>
</div>
</div>

  </div>


{modalShow&& <MohModal
    //  fetchData = {fetchData}
      show={modalShow}
      
      onHide={() => setModalShow(false)}
      />}



</>
  )
})

}


</div>



    </>
  )
}


function MohModal({onHide, show,}) {
const handleSubmit=async(e)=>{
e.preventDefault()
onHide(); 
}
const [users, setUsers] = useState([]);
const [page, setPage] = useState(1);
const [userReponse,setUserResponse]=useState()

// const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?page=${page}`))

// // const {request,data,error,loading}=useApi(()=>apiClient.get(`/visits/?limit=100`))

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
  return (
    <form>
    <Modal className=''
     show={show}
     onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{zIndex:'900000'}}
    >
      <Modal.Header className="" closeButton style={{backgroundColor:"#07A6A9",color:"white"}}>
        <Modal.Title id="contained-modal-title-vcenter">
         Booking
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
      <Modal.Body>
      <div className='row'>
        <div className="col ">
        <h5>This procedure is for <span style={{color:"#07A6A9"}}>Hair Transplant</span></h5>
        <div className=" w-50  mb-2"><input type="text" className='py-2 form-control' placeholder='Name' /></div>
        
        <div className=" w-50 mb-2">
        <div className='form-floating'>
        <select name="" className='form-control form-select' id="packageSelect">
          <option value="0">$10,000</option>
          <option value="1">$20,000</option>
          <option value="2">$30,000</option>
        </select>
        <label htmlFor="packageSelect">Country</label>
        </div>
        </div>
        <div className=""></div>
        <div className=" w-50  mb-2">
        <Rating
        className='py-3 form-control'
        name="simple-controlled"/>
          </div>
        <TextField
            hidden
            type="file"
            id="q"
            label=" Upload Image"
            variant="outlined"
            style={{ width: "100%", backgroundColor: "#DFDFDF" }}
          />
          <label
            className="px-2 w-50 text-center py-3 my-auto"
            htmlFor="q"
            style={{
              
              borderRadius: "9px",
              border: "2px dashed #8B8B8B",
            }}
          >
            Upload image    <i style={{}} class="bi bi-plus"></i>
          
          </label>
          <div className="my-4">
       
          <TextField
            id="outlined-basic"
            label=""
            multiline
            rows={4}
            variant="outlined"
            style={{ width: "100%", }}
          />
        </div>

        </div>
        {/* <div className="col-md-10 mx-auto mb-2"><button type='submit' className='btn btn-primary w-100'>Done</button></div> */}
      </div>
    
      </Modal.Body>
      <Modal.Footer>
        <button type="submit" class="btn btn_green text-white">Save </button>
      </Modal.Footer>
      </form>
    </Modal>
      </form>
  );
}