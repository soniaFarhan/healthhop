








import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
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

const [age, setAge] = React.useState('');

const handleChange = (event) => {
  setAge(event.target.value);
};

  return (
    <>
<div className="mt-4 ms-auto" style={{width:"10rem"}}>
<Box sx={{ minWidth: 120,bgcolor:"white" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">In Progress</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
  <Link to={"/Invoice-details"}>


<Button variant="contained" style={{backgroundColor:"transparent",color:'black',padding:"6px 27px",fontSize:"10px",border:"1px solid #07A6A9"}}>see details</Button>
</Link>
  </div>
<div className="m-2">
<Link to={"/Invoice-details"}>


<Button variant="contained" style={{backgroundColor:"#07A6A9",padding:"6px 27px",fontSize:"10px"}}>see details</Button>
</Link>
</div>
</div>
</div>

  </div>






</>
  )
})

}


</div>



    </>
  )
}
