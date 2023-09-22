import { Chat } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

export const Inquiries = () => {

const data =[
{
name:"Herry",
chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
img:
<img src={require("../assets/blog-card-4.png")} width={"100%"} alt="" />

},
{
name:"Herry",
chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
img:
<img src={require("../assets/blog-card-4.png")} width={"100%"} alt="" />

},
{
name:"Herry",
chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
img:
<img src={require("../assets/blog-card-4.png")} width={"100%"} alt="" />

},




]


  return (
    <>
    <div className="container my-5  pt-2 shadows" style={{borderRadius:"12px",paddingBottom:"90px"}}>

{
  data.map((e)=>{
    return(

      <div className="">


<div className=" row shadows m-2 p-1 " style={{borderRadius:"12px"}}>






<div className="col-md-2">
  <div className="" style={{width:"8rem"}}>

{e.img}
  </div>


</div>
<div className="col-md-10 ">

<div className="d-flex justify-content-between aling-items-center">
  <h6 style={{fontSize:"13px"}}>  {e.name} </h6>
  
  
   <p style={{fontSize:"8px",color:"#07A6A9"}}>Quote offered</p>
</div>

<div className="">
<p style={{fontSize:"9px"}}>
{e.chat}
</p>

</div>
<div className="d-flex aling-items-center justify-content-end">

  <div className="m-2">

<Button variant="text" style={{color:'#07A6A9'}} ><Chat/></Button>
  </div>

<div className="m-2">

<Button variant="contained" style={{backgroundColor:"#07A6A9",padding:"6px 27px",fontSize:"10px"}}>Meet</Button>
</div>

</div>

</div>


</div>
      </div>

    )
  })
}



    </div>
    
    
    </>
  )
}
