import { BorderColorOutlined, Chat } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const BusinessProfile = () => {

  const data =[
    {
    name:"Dr-Herry",
    chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
    img:
    <img src={require("../assets/blog-card-4.png")} width={"100%"} alt="" />
    
    },
    {
    name:"Dr-Herry",
    chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
    img:
    <img src={require("../assets/blog-card-4.png")} width={"100%"} alt="" />
    
    },
    {
    name:"Dr-Herry",
    chat:"         Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma....... Read more",
    img:
    <img src={require("../assets/blog-card-4.png")} width={"100%"} alt="" />
    
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
        <div className=""  style={{}}>
        <div className=" d-md-flex aling-items-center justify-content-between">
          <div className="d-md-flex aling-items-center">



          <div style={{position:"relative",bottom:"60px",left:"50px",width:"148px"}}>

<Avatar src=''  sx={{ width: 137, height: 137}} />
   </div>

<div className="mb-auto ms-5">
 <h5>Rep name here</h5>
 <p style={{fontSize:"13px" }}>medicalporvider@gamil.com</p>
</div>
<p  className='mb-auto ms-0  ' style={{fontSize:"13px"}}>  +92838489093</p> 
          </div>


      <div className="mb-auto mx-5 ">

      <Button variant="outlined">Outlined</Button>
      </div>
        </div>
      
      
        </div>



        <div className="row ">
          <div className="col-lg-6 my-3 shadows pt-3 ps-3 pb-5 pe-5" style={{borderRadius:"20px"}}>
            <h5>summary of your medical praction</h5>
            <p  style={{fontSize:"12px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam fugiat corrupti veniam, impedit praesentium sapiente odio, iure vel alias asperiores hic, reiciendis consectetur magni! Odit ullam dolor optio distinctio.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident impedit omnis itaque cumque earum quod laboriosam, eaque sequi, optio magnam laudantium ratione, iure architecto animi? Esse labore quibusdam quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corporis eius quas reiciendis magnam modi ipsam ipsum doloribus tempora, dicta ea perferendis quo aspernatur fugit, placeat obcaecati sit commodi nesciunt?
            </p>
            
          </div>
          <div className="col-lg-6 my-3">
          <div className="google-map-code y" style={{position:"relative"}}>
  <iframe className='y' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin&disableDefaultUI=1" width="100%"  frameborder="0" style={{border:"0",borderRadius:"20px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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



        <div className="row">

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


        <div className="my-3 shadows pt-3 ps-3 pb-5 pe-5" style={{borderRadius:"20px"}}>
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
  Istant booking  fixed price

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500 to 1000 USA</p>
  
  
  </div>
<div className="d-flex" style={{color:"#07A6A9"}}>
  <div className="me-2">
  <i class="bi bi-1-circle " style={{fontSize:"20px"}}></i>
  </div>
  <p className='my-auto me-auto' >
  All inclusion price range:

  </p>
  <p className='my-auto mx-3' style={{color:"black"}}>500 to 1000 USA</p>
  
  </div>


  

</div>


</div>

               </div>

        </div>










        <div className=" my-5  pt-2 " style={{borderRadius:"12px",paddingBottom:"90px"}}>

{
  data.map((e)=>{
    return(

      <div className="">


<div className=" row shadows m-2 p-1 " style={{borderRadius:"12px"}}>






<div className="col-md-2">
  <div className="m" >

{e.img}
  </div>


</div>
<div className="col-md-10 ">

<div className="d-flex justify-content-between aling-items-center">
  <h6 style={{fontSize:"13px"}}>  {e.name} </h6>
  
  
   <p style={{fontSize:"8px",color:"#07A6A9"}}>          <BorderColorOutlined sx={{color:"#07A6A9"}}/>          </p>
</div>

<div className="">
<p style={{fontSize:"9px"}}>
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


    </>
  )
}
