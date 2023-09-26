import { Chat } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Inquiries = () => {

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

{
  data.map((e)=>{
    return(

      <div className="">


<div className=" row shadows m-2 p-1 " style={{borderRadius:"12px"}}>






<div className="col-md-2 col-sm-4 col-6 px-0" style={{maxHeight:"130px"}}>


{e.img}
  


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
      </div>

    )
  })
}



    </div>
    
    
    </>
  )
}
