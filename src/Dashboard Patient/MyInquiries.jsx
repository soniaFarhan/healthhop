import { Chat } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const MyInquiries = () => {

const data =[
{
name:"Herry",
chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
img:
<img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}} />

},
{
name:"Herry",
chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
img:
<img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}}/>

},
{
name:"Herry",
chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
img:
<img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}}/>

},




]


  return (
    <>
    <div className="container my-5  pt-2 shadows" style={{borderRadius:"12px",paddingBottom:"90px"}}>
    <div className=" row   m-2 p-2 " >
      <div className="col"></div>
{
  data.map((e)=>{
    return(

      <div className="d-md-flex my-3 m-2 p-1 shadows" style={{borderRadius:"12px"}}>









<div className='p-1 me-2'>
      <div style={{width:"8rem"}}>
      <img className='img-fluid' src={require("../assets/h-card.png")} alt="" />
      </div>
      </div>
<div className=" ">

<div className="d-flex justify-content-between aling-items-center p-2">
  <h6 style={{fontSize:"13px"}}>  {e.name} </h6>
  
  
   <p style={{fontSize:"8px",color:"#07A6A9"}}>Quote offered</p>
</div>

<div className="">
<p style={{fontSize:"11px"}}>
{e.chat}
</p>

</div>
<div className="d-flex aling-items-center justify-content-end">

  <div className="m-2">
<Link to={"/message"}>

<Button variant="text" style={{color:'#07A6A9'}} ><Chat/></Button>
</Link>
  </div>

<div className="m-2">
<Link to={"/meet"}>

<Button variant="contained" style={{backgroundColor:"#07A6A9",padding:"6px 27px",fontSize:"10px"}}>Meet</Button>
</Link>

</div>

</div>

</div>


</div>
     

    )
  })
}


</div>
    </div>
    
    
    </>
  )
}
