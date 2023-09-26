import { Chat, MedicalServicesOutlined } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";

const Meet = () => {

    const data =[
     
        {
        name: <p className="m-0">
           Anadulo Medical center 
            <span className="m-0" style={{fontSize:"12px"}}>
              (Hair Transplant)
            </span>
        </p> ,
        chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
        img:
        <img src={require("../assets/blog-card-5.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}}/>,
        price:"($2000 USA-$3,500)"
        
        },
        {
        name:<p className="m-0">
        Anadulo Medical center 
         <span className="m-0" style={{fontSize:"12px"}}>
           (Hair Transplant)
         </span>
     </p>,
        chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
        img:
        <img src={require("../assets/blog-card-5.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}}/>,
        price:"($2000 USA-$3,500)"
        
        },
        
        
        
        
        ]
  return (
    <>
      <div className="bp-img d-flex justify-content-center align-items-center ">
       
      </div>
      <div className="mt-2" style={{}}>
        <div className=" d-md-flex aling-items-center justify-content-between">
          <div className="d-md-flex aling-items-center">
            <div
              style={{
                position: "relative",
                bottom: "70px",
                left: "50px",
                width: "148px",
              }}
            >
              <Avatar src="" sx={{ width: 137, height: 137 }} />
            </div>

            <div className=" ms-5 d-flex aling-items-center gap-3">
              <h4>Patient name</h4>

              <p
         
         style={{ fontSize:"13px" ,marginTop:"7px" }}
       >
         {" "}
         +92838489093
       </p>
              <p  style={{ fontSize:"13px" ,marginTop:"7px"}}>medicalporvider@gamil.com</p>
            

            </div>
           
          </div>

         


        </div>

        <div className="d-flex justify-content-between">
<div className="mt-auto">

        <h3 className="m-0">History</h3>
</div>
<div className="d-flex mt-auto" >
<div className='mb-3mt-auto' >
                        <select class="form-select" aria-label="Default select example"  style={{backgroundColor:"#07A6A9",color:"white"}}>
                        <option selected> send to patient</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
          <div className="mt-auto">


<Button variant="text" style={{color:'#07A6A9'}} ><Chat/></Button>

  </div>
</div>


          </div>
         

          <div className="container my-0  pt-2 " style={{borderRadius:"12px",paddingBottom:"90px"}}>

{
  data.map((e)=>{
    return(

      <div className="">


<div className=" row shadows m-2 p-1 " style={{borderRadius:"12px"}}>






<div className="col-md-2 col-sm-4 col-6 px-0" style={{maxHeight:"130px"}}>


{e.img}
  


</div>
<div className="col-md-7 ">

<div className="d-flex justify-content-between aling-items-center">
  <h6>  {e.name} </h6>
  
  
   
</div>

<div className="">
<p style={{fontSize:"9px"}}>
{e.chat}
</p>

</div>
<div className=" ">

  <div className="m-0">


  <p>price</p>

  </div>

<div className="fw-light" style={{fontSize:"10px"}}>

<p>{e.price}</p>


</div>

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
  );
};

export default Meet;
