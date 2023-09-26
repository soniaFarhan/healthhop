import { BorderColorOutlined, Chat, LocationOnOutlined, MedicalServicesOutlined } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const BusinessProfile = () => {

  const data =[
    {
    name:"Herry",
    chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair tran",
    img:
    <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}} />
    
    },
    {
    name:"Herry",
    chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair tran",
    img:
    <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}}/>
    
    },
    {
    name:"Herry",
    chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair tran",
    img:
    <img src={require("../assets/blog-card-4.png")} width={"100%"} height={"100%"} alt="" style={{objectFit:"contain"}}/>
    
    },
    
    
    
    
    ]

  return (
    <>
    <div className="">

       <div className='bp-img d-flex justify-content-center align-items-center '>
            <h2 className='text-white'>
              Medical Business name
            </h2>
            
   
        </div>
        <div className="mt-2"  style={{}}>
        <div className=" d-md-flex aling-items-center justify-content-between">
          <div className="d-md-flex aling-items-center">



          <div style={{position:"relative",bottom:"70px",left:"50px",width:"148px"}}>

<Avatar src=''  sx={{ width: 137, height: 137}} />
   </div>

<div className="mb-auto ms-5">
 <h5>Rep name here</h5>
 <p style={{fontSize:"13px" }}>medicalporvider@gamil.com</p>
</div>
<p  className=' ms-3  ' style={{fontSize:"13px",marginTop:'32px'}}>  +92838489093</p> 
          </div>


      <div className=" mx-5 " style={{marginTop:"15px"}}>
          <Link to={"/Updateprofile"}>
          <Button className='text_color fw-bold' variant="outlined" sx={{color:"red",border:"1px solid #39B7BA",borderRadius:"25px" ,fontSize:"9px"}}> <MedicalServicesOutlined style={{ fontSize: "19px",marginRight:"6px" }} /> Upload profile</Button>
          </Link>
      
      </div>
        </div>
      
      
        </div>



        <div className="row ">
          <div className="col-lg-6 my-3 shadows pt-3 ps-3 pe-5" style={{borderRadius:"20px",paddingBottom:"100px"}}>
            <h5>summary of your medical praction</h5>
            <p  style={{fontSize:"12px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam fugiat corrupti veniam, impedit praesentium sapiente odio, iure vel alias asperiores hic, reiciendis consectetur magni! Odit ullam dolor optio distinctio.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident impedit omnis itaque cumque earum quod laboriosam, eaque sequi, optio magnam laudantium ratione, iure architecto animi? Esse labore quibusdam quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corporis eius quas reiciendis magnam modi ipsam ipsum doloribus tempora, dicta ea perferendis quo aspernatur fugit, placeat obcaecati sit commodi nesciunt?
            </p>
            
          </div>
          <div className="col-lg-6 my-3">

            <div className=" d-flex aling-items-center">

            < LocationOnOutlined sx={{color:"#39B7BA"}}/> <p>Address of medical provider here</p>
            </div>
          <div className="google-map-code y" >

            
  <iframe className='y' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin&disableDefaultUI=1" width="100%"  frameborder="0" style={{border:"0",borderRadius:"20px"}} allowfullscreen="" aria-hidden="false" tabindex="999"></iframe>
</div>
          </div>
        </div>


        <div className="my-3 shadows pt-3 ps-3 pb-5 pe-5" style={{borderRadius:"20px"}}>
        <div className="d-flex justify-content-between aling-items-center">

        <h4> details Description:</h4>
        <BorderColorOutlined sx={{color:"#07A6A9"}}/>
         </div>

         <p className='pe-md-5 me-md-5' style={{fontSize:"12px"}}>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quasi quibusdam voluptate voluptatibus suscipit dolores iste incidunt enim sunt pariatur ullam, modi similique quis rem nostrum inventore iusto. Repellendus facere odio libero explicabo, corporis sunt ducimus cumque labore quo impedit quibusdam placeat neque tempora quam, tenetur adipisci asperiores, beatae animi mollitia vitae nam rerum nulla dolorum. Officiis nihil, corrupti molestiae exercitationem quisquam excepturi repellendus, cupiditate officia delectus ipsum consequuntur. Atque iusto porro illo accusantium a, aperiam saepe sit aspernatur, temporibus iure distinctio. Tenetur maxime labore totam laborum obcaecati optio nulla soluta deleniti, consectetur sed, omnis distinctio accusantium harum molestias. Consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur accusamus, debitis nam perspiciatis impedit labore repudiandae tenetur? Quibusdam accusamus aut a. Recusandae aliquid perspiciatis rem ipsa eius at dolor cum.        </p>

        </div>



        <div className="row ">

          <div className="col-md-6">
          <div className="my-3 shadows pt-3 ps-3 pb-5 pe-5" style={{borderRadius:"20px"}}>
        <div className="d-flex justify-content-between aling-items-center">

        <h5>   Your Business Offers the Following Services:</h5>
        <BorderColorOutlined sx={{color:"#07A6A9"}}/>
         </div>

         <p className=' links'>   
         <ul>
          <li><Link>485 Star Hotel Accomodation</Link></li>
          <li><Link>3 Star Hotel Accomodation</Link></li>
          <li><Link>Transportation To and From Airport/Clinic/Hotel</Link></li>
          <li><Link>Visa Support</Link></li>
          <li><Link>Travel Health Insurance or Medical Tourism Health Insurance</Link></li>
          <li><Link>Sightseeing Support Bookings</Link></li>
          <li><Link> Other Language and Translation Support</Link></li>
          
         </ul>      </p>

       



        </div>
          </div>
          <div className="col-md-6">
          <div className="my-3 shadows pt-3 ps-3 pb-5 pe-5" style={{borderRadius:"20px"}}>
        <div className="d-flex justify-content-between aling-items-center">

        <h5> Your Business Offers Care in the Following Languages:</h5>
        <BorderColorOutlined sx={{color:"#07A6A9"}}/>
         </div>

         <p className='pe-md-5 me-md-5 links'> 
         <ul>
          <li><Link>English</Link></li>
          <li><Link>Spenish</Link></li>
          <li><Link>Turkish</Link></li>
          <li><Link>Arabic</Link></li>
          <li><Link>Urdu</Link></li>
          <li><Link>Hindi</Link></li>
          <li><Link>Persian</Link></li>
          
         </ul>



             </p>

        </div>
          </div>
        </div>

       <h4 className='ms-2 mt-3'>Procedures:</h4>
        <div className="mt-3 shadows pt-3 ps-3 pb-5 pe-5" style={{borderRadius:"20px"}}>
        <div className="d-flex justify-content-between aling-items-center">

        <h5>Hair Transplant</h5>
 
        <BorderColorOutlined sx={{color:"#07A6A9"}}/>
         </div>
         <h5 style={{color:"#07A6A9"}}> Sub-category name</h5>
         <div className='pe-md-5 me-md-5' style={{fontSize:"12px"}}>  
         <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quasi doloremque dolorum non magnam. Exercitationem, voluptatibus accusamus, itaque animi voluptatem consequatur esse illo illum molestias neque aspernatur, quas tempore autem.
         </p>
<div className="d-flex me-auto" >
<div className="me-2">

<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-1-circle " style={{fontSize:"20px"}}></i>
  </div>
  <p className='my-auto me-auto'>
  Average price range for the procedure:

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500 to 1000 USA</p>
  
  
  </div>
<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-2-circle " style={{fontSize:"20px"}}></i>
  </div>
  <div className="">
  <p className='my-auto me-auto' >
  All inclusion price range:

  </p>

  </div>
  <p className='my-auto ms-auto' style={{color:"black"}}>500 to 1000 USA</p>
  
  
  </div>
<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-3-circle " style={{fontSize:"20px"}}></i>
  </div>
  <p className='my-auto me-auto'>
  Istant booking  fixed price for procedure only:

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500  USA</p>
  
  
  </div>
<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-4-circle " style={{fontSize:"20px"}}></i>
  </div>
  <p className='my-auto me-auto' >
  Istant booking  fixed price for All-inclusive:

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500 USA</p>
  
  </div>


  

</div>


</div>
    <div className="d-flex flex-wrap aling-items-center ">
   <div className=""><img src={require("../assets/blog-card-1.png")} width={"100px"} height={"100px"} alt="" /></div>
   <div className=""><img src={require("../assets/blog-card-2.png")} width={"100px"} height={"100px"} alt="" /></div>
   <div className=""><img src={require("../assets/blog-card-3.png")} width={"100px"} height={"100px"} alt="" /></div>
   <div className=""><img src={require("../assets/blog-card-4.png")} width={"100px"} height={"100px"} alt="" /></div>
   <div className=""><img src={require("../assets/blog-card-5.png")} width={"100px"} height={"100px"} alt="" /></div>

    </div>
               </div>
    <hr/>
        <div className="d-flex justify-content-between aling-items-center">

        <h5>Hair Transplant</h5>
 
        <BorderColorOutlined sx={{color:"#07A6A9"}}/>
         </div>
         <h5 style={{color:"#07A6A9"}}> Sub-category name</h5>
         <div className='pe-md-5 me-md-5' style={{fontSize:"12px"}}>  
         <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quasi doloremque dolorum non magnam. Exercitationem, voluptatibus accusamus, itaque animi voluptatem consequatur esse illo illum molestias neque aspernatur, quas tempore autem.
         </p>
<div className="d-flex me-auto" >
<div className="me-2">

<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-1-circle " style={{fontSize:"20px"}}></i>
  </div>
  <p className='my-auto me-auto'>
  Average price range for the procedure:

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500 to 1000 USA</p>
  
  
  </div>
<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-2-circle " style={{fontSize:"20px"}}></i>
  </div>
  <p className='my-auto me-auto'>
  All inclusion price range:

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500 to 1000 USA</p>
  
  
  </div>
<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-3-circle " style={{fontSize:"20px"}}></i>
  </div>
  <p className='my-auto me-auto'>
  Istant booking  fixed price for procedure only:

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500  USA</p>
  
  
  </div>
<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-1-circle " style={{fontSize:"20px"}}></i>
  </div>
  <p className='my-auto me-auto' >
  Istant booking  fixed price for All-inclusive:

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500 USA</p>
  
  </div>


  

</div>


</div>
    <div className="d-flex flex-wrap aling-items-center">
   <div className=""><img src={require("../assets/blog-card-1.png")} width={"100px"} height={"100px"} alt="" /></div>
   <div className=""><img src={require("../assets/blog-card-2.png")} width={"100px"} height={"100px"} alt="" /></div>
   <div className=""><img src={require("../assets/blog-card-3.png")} width={"100px"} height={"100px"} alt="" /></div>
   <div className=""><img src={require("../assets/blog-card-4.png")} width={"100px"} height={"100px"} alt="" /></div>
   <div className=""><img src={require("../assets/blog-card-5.png")} width={"100px"} height={"100px"} alt="" /></div>

    </div>
               </div>
    <hr/>

        </div>










    <div className=" my-5 row  pt-2 " style={{borderRadius:"12px",paddingBottom:"90px"}}>
    <div className="col-md-9 " style={{height:"auto"}}>
      <h4 className='ms-1'>  Medical Staff   </h4>

{
  data.map((e)=>{
    return(

      <div className='d-flex align-items-center gap-1 justify-content-between flex-column flex-md-row shadow rounded-4 p-2 mb-3'>
      <div className='p-2'>
      <div style={{width:"8rem"}}>
      <img className='img-fluid' src={require("../assets/h-card.png")} alt="" />
      </div>
      </div>

      <div>
      <div>
        <div className="d-flex justify-content-between">
           <h5> {e.name} </h5>
           <BorderColorOutlined sx={{color:"#07A6A9"}}/>

        </div>

      <div className='d-flex align-items-center gap-2 flex-column flex-md-row'>
          <p style={{fontSize:"12px"}}>
          {e.chat}
          </p>
         
      </div>

     
      </div>

      
      
      </div>

      </div>

    )
  })
}



    </div>


    </div>
    </div>


    </>
  )
}
