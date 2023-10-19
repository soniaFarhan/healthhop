import React, { useState } from "react";
import {IoIosArrowDown} from "react-icons/io"
import {
  Outlet,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

import { Navbar } from "./Navbar";
import Popup from "./Popup";
import Popup2 from "./Popup2";
import { Login, MedicalServices, MedicalServicesOutlined } from "@mui/icons-material";
import Popup3 from "./Popup3";



export const Layout = () => {


  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Access specific query parameters
  const method = searchParams.get('method');

  const [role, setRole] = useState('defaultRole');

  const handleButtonClick = (newRole) => {
    setRole(newRole);
  };

  return (
    <div className="layout zoom">
     
  <nav className="navbar navbar-expand-lg navbar-light navbg  "  style={{backgroundColor:"#012837",color:"white",zIndex:"999"}}>
  <div className="container-fluid  shrink2">
   

    <Link className=" ms-2" to="/">
      {/* <div style={{ width: "10rem" }}>
        <img width="100%"
          src={require("../assets/HealthHop logo reverse on dark background (1).png" )}
        />
      </div> */}
      <div className="" style={{width:"7rem"}}>
      <img width={"100%"} src={require("../assets/HealthHop logo reverse on dark background (1).png")} alt="" />
      </div>
    </Link>
    
    <button
      className="navbar-toggler navbar-togl-btn"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className=" navbar-toggler-icon text-white"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
            style={{ padding:"9px 30px", fontSize: '16px', maxWidth:"fit-content" }}
            className="nav-link"
            exact
            activeClassName="active"
            end="/"
            to="/"
            title="Home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item  dropdown">
          <NavLink
            className="nav-link white_space"
            exact
            activeClassName="active"
            to="/procedure"
            title="Procedure"
            style={{ fontSize: '16px', padding:"9px 30px", maxWidth:"fit-content"}}
           
          >
            Procedures
          </NavLink>
          <div className="" style={{backgroundColor:"red",width:"100%"}} >



          <div class="dropdown-content " >
          <div class=" accordion mt-lg-4 mt-1" id="accordionExample" style={{backgroundColor:"white"}}>
  <div class="accordion-item ">
    <h2 class="accordion-header" >
      <button class="fs-6 p-3 collapsed border-0 w-100 bg-white d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Hair Transplants/ Hair Plugs
      <IoIosArrowDown className="drop-btn rotate-90"/>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse  drop-align accordion-body"  data-bs-parent="#accordionExample">
    
      <ul>
      <li><Link>-Hair Transplants/ Hair Plugs</Link></li>
      <li><Link>-Beard Transplant</Link></li>
      <li><Link>-Hair Transplant for Men</Link></li>
      <li><Link>-Hair Transplant for Women</Link></li>
    </ul>
    
       
    </div>
  </div>
  <div class="accordion-item ">
    <h2 class="accordion-header" >
      <button class="fs-6 p-3 collapsed border-0 w-100 bg-white d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Dentistry
      <IoIosArrowDown className="drop-btn"/>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse  drop-align accordion-body"  data-bs-parent="#accordionExample">
      
      <ul className="">
      <li><Link>-Cosmetic Dentistry “Hollywood Smile”</Link></li>
      <li><Link>-Dental Implants</Link></li>
      <li><Link>-Crowns</Link></li>
      <li><Link>-Veneers</Link></li>
      <li><Link>-Teeth Whitening</Link></li>
      <li><Link>-Orthodontics - Braces/Invisalign, Corrective Jaw Surgery</Link></li>
      <li><Link>-Endodontics - Root Treatments</Link></li>
      <li><Link>-Oral Surgery</Link></li>
      <li><Link>-Prosthodontics - Full Mouth Reconstruction, Dental Crowns & Bridges, Dentures</Link></li>
      <li><Link>-Periodontal - Gum Surgeries, Gum Cleaning, Gum Depigmentation</Link></li>
      <li><Link>-General dentistry - Fillings, Cleanings</Link></li>
      <li><Link>-Implantology - Dental Implants</Link></li>
    </ul>
     
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="fs-6 p-3 collapsed border-0 w-100 bg-white d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Plastic Surgery and Aesthetic Surgeries
      <IoIosArrowDown className="drop-btn"/>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse  drop-align accordion-body" data-bs-parent="#accordionExample">
      
      <ul className="">
      <li><Link>-Liposuction</Link></li>
      <li><Link>-Breast Lift and Augmentation</Link></li>
      <li><Link>-Abdominoplasty (Tummy Tuck)</Link></li>
      <li><Link>-Rhinoplasty (Nose Job)</Link></li>
      <li><Link>-Facelift</Link></li>
      <li><Link>-Lips Aesthetic - lip operations</Link></li>
      <li><Link>-Mommy Makeover (Labiaplasty, Vaginoplasty)</Link></li>
      <li><Link>-Eye lift</Link></li>
      <li><Link>-Neck Lift</Link></li>
      <li><Link>-Brow/ Forehead lift</Link></li>
      <li><Link>-Otoplasty (Ear Pinning)</Link></li>
      <li><Link>-Reconstructive (other surgery)</Link></li>
    </ul>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="fs-6 p-3 collapsed border-0 w-100 bg-white d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <span>Aesthetic Procedures <small>(Non-Surgical) </small></span> 
      <IoIosArrowDown className="drop-btn"/>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse  drop-align accordion-body" data-bs-parent="#accordionExample">
     
      <ul className="">
      <li><Link>-Botox and Fillers</Link></li>
      <li><Link>-Chemical Peel</Link></li>
      <li><Link>-Laser Hair Removal</Link></li>
      <li><Link>-Microdermabrasion</Link></li>
      <li><Link>-Intense Pulsed Light (IPL) Treatment</Link></li>
      <li><Link>-Cellulite Laser and Cream Treatments</Link></li>
    </ul>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="fs-6 p-3 collapsed border-0 w-100 bg-white d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
<span>      Bariatric Surgery <small>(Obesity Surgery) </small> 
</span>     
 <IoIosArrowDown className="drop-btn"/>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse  drop-align accordion-body" data-bs-parent="#accordionExample">
     
      <ul className="">
      <li><Link>-Gastric Bypass</Link></li>
      <li><Link>-Gastric Sleeve</Link></li>
      <li><Link>-Stomach Balloon</Link></li>
      <li><Link>-Stomach Band</Link></li>
    </ul>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="fs-6 p-3 collapsed border-0 w-100 bg-white d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <span>Ophthalmology <small>(Eye Procedures and Surgeries) </small></span> 
      <IoIosArrowDown className="drop-btn"/>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse drop-align accordion-body" data-bs-parent="#accordionExample">
      
      <ul className="">
      <li><Link>-Eye Procedures and Surgeries</Link></li>
    </ul>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="fs-6 p-3 collapsed border-0 w-100 bg-white d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      Fertility & IVF
      <IoIosArrowDown className="drop-btn"/>
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse drop-align accordion-body" data-bs-parent="#accordionExample">
     
      <ul className="">
      <li><Link>-Invitro Fertilization IVF/ICSI</Link></li>
      <li><Link>-Egg (embryo) & Sperm Freezing</Link></li>
      <li><Link>-Intrauterine Insemination (IUI)</Link></li>
      <li><Link>-Other Fertility Procedures and Diagnosis</Link></li>
    </ul>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="fs-6 p-3 collapsed border-0 w-100 bg-white d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      <span>Orthopedics <small>(All) </small></span> 
      <IoIosArrowDown className="drop-btn"/>
      </button>
    </h2>
    <div id="collapseEight" class="accordion-collapse collapse drop-align accordion-body" data-bs-parent="#accordionExample">
      
      <ul className="">
      <li><Link>-Spine Surgeries</Link></li>
      <li><Link>-Sports Injuries</Link></li>
      <li><Link>-Knee, Hip, Shoulder Surgeries</Link></li>
      <li><Link>-Carpal Tunnel</Link></li>
      <li><Link>-And more</Link></li>
    </ul>
    </div>
  </div>
</div>
          

           
  
</div>


          </div>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link white_space"
            exact
            activeClassName="active"
            to="/blogs"
            title="Articles"
            style={{ fontSize: '16px' , padding:"9px 30px", maxWidth:"fit-content"}}
           
          >
            Articles
          </NavLink>
         
  
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            style={{ fontSize: '16px' , padding:"9px 30px", maxWidth:"fit-content"}}
            exact
            activeClassName="active"
            to="/contact-us"
            title="Contact-us"
          >
            Contact Us
          </NavLink>
        </li>

        {/* <li className="nav-item">
          <NavLink
            className="nav-link white_space"
            exact
            activeClassName="active"
            to="/blogs"
            title="Articles"
            style={{ fontSize: '16px' , padding:"9px 30px",}}
           
          >
           About Us
          </NavLink>
         
  
        </li> */}
        
      </ul>
      <div className=" justify-content-end mx-1 me-md-5">
        <div className="col-lg-12 d-flex justify-content-between align-items-center mb-3 mb-lg-0 text-white gap-2">
          
        <Link to="/login" state={{from:"dr"}}>
          
        <button 
        className="btn btn_light rounded-pill fs_14px  white_space"
       
      >
        <MedicalServicesOutlined
          fontSize="small"
          className="my-auto"
          style={{ marginRight: "5px" }}
        />
        Medical Provider
      </button>
      </Link>


      <Link to="/login">

      <button    
       className="btn btn_light fs_14px rounded-pill white_space "
     >
       <Login fontSize="small"  style={{marginRight:"7px"}}/>
       Patient
     </button>
     </Link>

      
       
        </div>
      </div>
    </div>
  </div>
</nav>

         <main className=''>
                <div className=''>
                    <Outlet />
                </div>
            </main>


      <footer
        class=" text-dark p-md-4 p-2"
       
        style={{ background: "linear-gradient(90deg, #757BBB, #0CA5A8)" }}
      >
        <div class=" container py-3 ">
          <div class="row d-flex justify-content-around py-3">
        
            <div class=" col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-between gap-3">
              <div style={{width:"11rem"}}>
                <img
                  src={require("../assets/HealthHop logo reverse on dark background (1).png")}
                  className="img-fluid"
                />
              </div>
              <div>
              <h4 class="mb-2 text-white" title="Services">
                Medical tourisum
              </h4>
              <p p class="text-upper_case mt-2 text-white fs_14px opacity_custom" >
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.
              </p>
              </div>
              {/* <div>
                <div className="text-white text-upper_case mt-3 fs_14px">
                  © 2022 all rights reserved developed and maintain by{" "}
                  <a href="https://www.fabtechsol.com/" target="_blank">
                    Fabtechsol
                  </a>
                </div>
              </div> */}
            </div>
            
            <div class=" col-12 col-lg-8  mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0">
              <div className="row d-flex justify-content-end">
                
                <div className="col-6 col-sm-3 style-none">
                  <h4 class="mb-2 text-white " title="Services">
                    Helpful Links
                  </h4>
                  <Link to={"/jobs"} className="decoration-none ">
                    <p className="mb-1 text-white fs_14px opacity_custom" title="Job Search">
                    Reviews
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-white fs_14px opacity_custom" title="Travel">
                      Bookmarks
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-white fs_14px opacity_custom" title="Per Diem">
                      Bookings
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-white fs_14px opacity_custom" title="Placement">
                     Contact
                    </p>
                  </Link>
                </div>

                <div className="col-6 col-sm-3 style-none">
                  <h4 class="mb-2 text-white " title="Resources">
                    Contact Us
                  </h4>
                  <Link to={"/jobs"} className="decoration-none text-white">
                    <p className="mb-1  text-white fs_14px opacity_custom" title="Job Search">
                    12345 Little Lonsdale St, Melbourne 
                    
                    </p>
                  </Link>
                  <Link  className="decoration-none text-white" >
                    <p className="mb-1 text-white fs_14px opacity_custom" title="Clients">
                     Phone: (123) 123-456
                    </p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
        
    </div>
  )
}
