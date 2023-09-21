import { Avatar } from '@mui/material'
import React from 'react'

export const Message = () => {

 const data =[
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
  {
    avater:<Avatar  sx={{ width: 55, height: 55 }}/>,
    name:"Farnky Schmid",
    chat:"Me: what does This Dimmy",
    date:"30.2.2021"

  },
 ]
  return (
    <>

<div className="container shadows " style={{borderRadius:"10px",height:"83vh"}}>
    <h4 className='p-3'>MESSAGE THREADS</h4>

<div className="row ">
<div className="col-md-4 ">

<div className="mb-4 mx-2" >
<input type="text" class="form-control" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{borderRadius:"20px",backgroundColor:"transparent",border:"1px solid black"}}/>

</div>
<div className="scroll-container2">
  <div className="content2">

{
  data.map((e)=>{
    return(



<div className="d-flex aling-items-center justify-content-between   shadows m-2" style={{borderRadius:"10px"}}>
<div className="d-flex py-2">
  <div className='mx-2 my-auto'>
{e.avater}
  </div>
  <div className="my-auto">
<p className='m-0 fw-bold 'style={{fontSize:"12px"}}>{e.name}</p>
<p className='m-0 fw-light'style={{fontSize:"12px"}}> {e.chat} </p>
</div>
</div>

<div>
  <p className='m-0 fw-light pt-2' style={{fontSize:"9px"}}>New Inquiry</p>
  <p className='m-0 fw-light my-auto p-2' style={{fontSize:"9px"}}>{e.date}</p>
 
</div>

</div>
 


    )
  })
}
  </div>
</div>






</div>
<div className="col-md-8  " >

<div className="shadows mx-2 py-5 px-3"style={{height:"67vh",borderRadius:"12px" }}>
  <div className="scroll-container1">
    <div className="content1">
    <div className="d-flex justify-content-end ">
<div className="word" >
  <div>
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99",fontSize:"14px"}}>Hello Franky!</p>
  </div>
  
  <p className='mt-2 p-2 fw-light word' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu5jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj4outo4</p>
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>
<div className="d-flex justify-content- ">
<div className="word" >
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu54outo4</p>
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu54outo4</p>
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>
<div className="d-flex justify-content-end ">
<div className="word" style={{width:"40%"}} >

  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99",fontSize:"14px"}}>Hello Frankyffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff!</p>

  
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>
    <div className="d-flex justify-content-end ">
<div className="word" >
  <div>
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99",fontSize:"14px"}}>Hello Franky!</p>
  </div>
  
  <p className='mt-2 p-2 fw-light word' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu5jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj4outo4</p>
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>
<div className="d-flex justify-content- ">
<div className="word" >
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu54outo4</p>
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu54outo4</p>
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>
<div className="d-flex justify-content-end ">
<div className="word" style={{width:"40%"}} >

  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99",fontSize:"14px"}}>Hello Frankyffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff!</p>

  
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>
    <div className="d-flex justify-content-end ">
<div className="word" >
  <div>
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99",fontSize:"14px"}}>Hello Franky!</p>
  </div>
  
  <p className='mt-2 p-2 fw-light word' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu5jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj4outo4</p>
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>
<div className="d-flex justify-content- ">
<div className="word" >
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu54outo4</p>
  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99"}}>uioutiu54iotu54outo4</p>
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>
<div className="d-flex justify-content-end ">
<div className="word" style={{width:"40%"}} >

  <p className='mt-2 p-2 fw-light' style={{backgroundColor:"#F7F7F7",borderRadius:"10px",color:"#999A99",fontSize:"14px"}}>Hello Frankyffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff!</p>

  
  


</div>
<div className='mx-2 '>

<Avatar  sx={{ width: 40, height: 40}}/>
  </div>


</div>

    </div>
  </div>
  <input type="text" class="form-control" placeholder="Enter your message here" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{borderRadius:"20px",backgroundColor:"transparent",fontSize:"12px",padding:"16px"}}  ewwe/>
  </div>



</div>



</div>

</div>
    
    </>
  )
}
