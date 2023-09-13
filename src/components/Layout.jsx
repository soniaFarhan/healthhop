import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  Outlet,
  Link,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect } from "react";
import LoginIcon from '@mui/icons-material/Login';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

export const Layout = () => {
  return (
    <div className="layout">
      <nav
        className=" site navbar navbar-expand-lg navbar-light bg-light fixed-top  w-100 custom-navbar navbar-flow text-black"
        // style={{ backgroundColor: "#000000" }}
      >
        <div className={` container-fluid mx-sm-5 ${"me-sm-0"}`}>
          <Link className="navbar-brand" to="/">
            <div style={{width:"6rem"}}>
            <img
              src={require("../assets/HighRes_Icon-And-Name.jpg")}
              className="img-fluid logo_img_size"
              />
              </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
           <i className="bi bi-list"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarColor01">

            <div class=" my-component d-flex justify-content-around w-100">
              <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex gap-5">
                <li style={{ paddingY: "0rem" }} className="nav-item homee ">
                  <NavLink
                    style={{ paddingY: 2,fontSize:'16px' }}
                    className="nav-link "
                    exact
                    activeClassName="active"
                    end="/"
                    to="/"
                    title="Home"
                  >
                    Home
                  </NavLink>
                </li>

                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link"
                    style={{ fontSize:'16px' }}
                    exact
                    activeClassName="active"
                    to="/facilities"
                    title="Facilities"
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link white_space"
                    exact
                    activeClassName="active"
                    to="/profession"
                    title="Healthcare"
                    style={{ fontSize:'16px' }}
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
              </div>
            </div>

            <div className=" row justify-content-end   mx-1">
                  <div
                    className={`col-lg-12 d-flex justify-content-between align-items-center mb-3 mb-lg-0 text-white gap-2`}
                  >
                    <Button
                      // onClick={() => dispatch(logout())}
                      variant="outlined"
                      title="Log out"
                    >
                      <MedicalServicesIcon/>
                      Mediacl Provider
                    </Button>

                    <Button
                      // onClick={() => dispatch(logout())}
                      variant="outlined"
                      title="Log out"
                    >
                      <LoginIcon/>
                      Patient login
                    </Button>
                  </div>
            </div>

          </div>
        </div>
      </nav>

         <main className='pt-4 mt-5'>
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
              <h5 class="mb-2 text-dark" title="Services">
                Medical tourisum
              </h5>
              <p class="text-upper_case mt-2 text-dark fs_14px">
                We make job finding very easy. We are best job provider company
                where any user can apply for different jobs created by our
                admin.
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
                  <h5 class="mb-2 text-dark" title="Services">
                    Helpful Links
                  </h5>
                  <Link to={"/jobs"} className="decoration-none">
                    <p className="mb-1 text-dark fs_14px" title="Job Search">
                    Reviews
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-dark fs_14px" title="Travel">
                      Bookmarks
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-dark fs_14px" title="Per Diem">
                      Bookings
                    </p>
                  </Link>
                  <Link className="decoration-none">
                    <p className="mb-1 text-dark fs_14px" title="Placement">
                     Contact
                    </p>
                  </Link>
                </div>

                <div className="col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-dark" title="Resources">
                    Contact Us
                  </h5>
                  <Link to={"/jobs"} className="decoration-none text-dark">
                    <p className="mb-1  text-dark fs_14px" title="Job Search">
                    Street: 123 Main Street Springfield
                    </p>
                  </Link>
                  <Link  className="decoration-none text-dark" >
                    <p className="mb-1 text-dark fs_14px" title="Clients">
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
