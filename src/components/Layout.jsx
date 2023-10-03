import React from "react";
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
import { Login, MedicalServices } from "@mui/icons-material";
import Popup3 from "./Popup3";



export const Layout = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Access specific query parameters
  const method = searchParams.get('method');

  return (
    <div className="layout">
     
  <nav className="navbar navbar-expand-lg navbar-light navbg"  style={{backgroundColor:"#012837",color:"white"}}>
  <div className="container-fluid">
   

    <Link className="navbar-brand ms-5" to="/">
      <div style={{ width: "6rem" }}>
        <img style={{backgroundColor:"transparent"}}
          src={require("../assets/navberlogo.png" )}
          className="img-fluid logo_img_size"
        />
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
            style={{ padding:"9px 30px", fontSize: '16px' }}
            className="nav-link"
            exact
            activeClassName="active"
            end="/"
            to="/Home"
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
            style={{ fontSize: '16px', padding:"9px 30px", }}
           
          >
            Procedures
          </NavLink>
          <div className="h">

          <div class="dropdown-content  ">
            <div className=" main d-flex  p-5" style={{backgroundColor:"#07A6A9",borderRadius:"29px"}}>

            <ul className="pb-5 p-2" style={{listStyleType: ""}} >
              <li className="custom-list-style text-white">

              Hair Transpland
              </li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      </ul>

                    <ul  className="pb-md-5 p-2"> 
                    <li className="custom-list-style text-white">

                            Canser
              </li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      </ul>
                    <ul className="pb-5 p-2">
                    <li className="custom-list-style text-white">
                    ETC
</li>
                    <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      </ul>
                    <ul  className="pb-5 p-2">
                    <li className="custom-list-style text-white">

                         ETC
</li>
                    <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      </ul>
                    <ul  className="pb--md5 p-2">
                    <li className="custom-list-style text-white">

              ETC
              </li>
                    <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      <li><Link>-Hair Transpland</Link></li>
                      </ul>
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
            style={{ fontSize: '16px' , padding:"9px 30px",}}
           
          >
            Articles
          </NavLink>
         
  
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            style={{ fontSize: '16px' , padding:"9px 30px",}}
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
      <div className="row justify-content-end mx-1 me-5">
        <div className="col-lg-12 d-flex justify-content-between align-items-center mb-3 mb-lg-0 text-white gap-2">
          
          
       <Popup2 show={method==="patient"}/>
       <Popup3/>


      
       
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
        style={{ backgroundColor: "#E3E2E2" }}
      >
        <div class=" container py-3">
          <div class="row d-flex justify-content-around py-3">
        
            <div class=" col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-between gap-3">
              <div style={{width:"10rem"}}>
                <img
                  src={require("../assets/HighRes_Icon-And-Name.jpg")}
                  className="img-fluid"
                />
              </div>
              <div>
              <h4 class="mb-2 text-dark" title="Services">
                Medical tourisum
              </h4>
              <p p class="text-upper_case mt-2 text-dark fs_14px opacity_custom" >
              Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.
              </p>
              </div>
              {/* <div>
                <div className="text-dark text-upper_case mt-3 fs_14px">
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
                  <h4 class="mb-2 text-dark " title="Services">
                    Helpful Links
                  </h4>
                  <Link to={"/jobs"} className="decoration-none ">
                    <p className="mb-1 text-dark fs_14px opacity_custom" title="Job Search">
                    Reviews
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-dark fs_14px opacity_custom" title="Travel">
                      Bookmarks
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-dark fs_14px opacity_custom" title="Per Diem">
                      Bookings
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-dark fs_14px opacity_custom" title="Placement">
                     Contact
                    </p>
                  </Link>
                </div>

                <div className="col-6 col-sm-3 style-none">
                  <h4 class="mb-2 text-dark " title="Resources">
                    Contact Us
                  </h4>
                  <Link to={"/jobs"} className="decoration-none text-dark">
                    <p className="mb-1  text-dark fs_14px opacity_custom" title="Job Search">
                    12345 Little Lonsdale St, Melbourne 
                    
                    </p>
                  </Link>
                  <Link  className="decoration-none text-dark" >
                    <p className="mb-1 text-dark fs_14px opacity_custom" title="Clients">
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
