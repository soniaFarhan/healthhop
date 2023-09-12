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
              <i class="bi bi-list"></i>
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

         <main className='py-4 mt-5'>
                <div className=''>
                    <Outlet />
                </div>
            </main>


      <footer
        class=" text-white p-md-4 p-2"
        style={{ backgroundColor: "#000000" }}
      >
        <div class=" container">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div>
                {/* <img
                  src={require("../assets/isent.png")}
                  className="img-fluid logo_img_size"
                /> */}
              </div>
            </div>
          </div>
          <hr className="text-white"></hr>
          {/* <div class=""><img src={require('../assets/logo.png')}  className="img-fluid" style={{ borderRadius: '8px', width: '13rem' }} alt="Nav"/></div> */}
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 ps-lg-5">
              <p class="text-upper_case mt-2 text-white">
                We make job finding very easy. We are best job provider company
                where any user can apply for different jobs created by our
                admin.
              </p>
              <div>
                <div className="text-white text-upper_case mt-3">
                  © 2022 all rights reserved developed and maintain by{" "}
                  <a href="https://www.fabtechsol.com/" target="_blank">
                    Fabtechsol
                  </a>{" "}
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-8  mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0">
              <div className="row justify-sm-content-center">
                <div className="col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-white" title="Company">
                    Company
                  </h5>
                  <Link to={"/about-us"} className="decoration-none text-white">
                    <p className="mb-1" title="About us">
                      About Us
                    </p>
                  </Link>
                  <Link to={"/blogs"} className="decoration-none text-white">
                    <p className="mb-1" title="Blog">
                      Blog
                    </p>
                  </Link>
                  <a href="#">
                    <p className="mb-1" title="Careers">
                      Corporate Careers
                    </p>
                  </a>
                </div>
                <div className="col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-white" title="Services">
                    Services
                  </h5>
                  <Link to={"/jobs"} className="decoration-none">
                    <p className="mb-1 text-white" title="Job Search">
                      Job Search
                    </p>
                  </Link>
                  <a href="#">
                    <p className="mb-1 text-white" title="Travel">
                      Travel
                    </p>
                  </a>
                  <a href="#">
                    <p className="mb-1 text-white" title="Per Diem">
                      Per Diem
                    </p>
                  </a>
                  <a href="#">
                    <p className="mb-1 text-white" title="Placement">
                      Permanent Placement
                    </p>
                  </a>
                  <a href="#">
                    <p className="mb-1 text-white" title="Allied">
                      Allied
                    </p>
                  </a>
                </div>
                <div className="col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-white" title="Resources">
                    Resources
                  </h5>
                  <Link to={"/jobs"} className="decoration-none text-white">
                    <p className="mb-1  text-white" title="Job Search">
                      Job Search
                    </p>
                  </Link>
                  <a href="#">
                    <p className="mb-1 text-white" title="Clients">
                      Our clients
                    </p>
                  </a>
                  {/* <a href="#"><p>Heading</p></a> */}
                </div>
                <div className=" col-6 col-sm-3 style-none">
                  <h5 class="mb-2 text-white">Social</h5>
                  <div className="">
                    <a
                      // href={`${socialLogin?.twitter || "www.twitter.com"}`}
                      target="_blank"
                      className="decoration-none"
                    >
                      {/* <img src={require("../assets/twetter.png")}  className="img-fluid img_size" title='Twitter'/> */}
                      <TwitterIcon style={{ color: "white" }} />
                    </a>
                    <a
                      // href={`${socialLogin?.facebook || "www.facebook.com"}`}
                      target="_blank"
                      className="decoration-none"
                    >
                      {/* <img src={require("../assets/facebook.png")}  className="img-fluid mx-3 img_size" title='Facebook'/> */}
                      <FacebookIcon style={{ color: "white" }} />
                    </a>
                    {/* <a href={`${socialLogin?.linkedin||"www.linkedin.com"}`} target='_blank' className='decoration-none'>
            <img src={require("../assets/linkedin.png")}  className="img-fluid  img_size" title='Linkedin'/>
            </a> */}
                    {/* <a href={`${socialLogin?.instagram||"www.instagram.com"}`} target='_blank' className='decoration-none'>
            <img src={require("../assets/instagram.png")}  className="img-fluid ms-2 img_size" title='Instagram'/>
          </a> */}
                  </div>
                </div>
                <div class="col-sm-6  my-auto gx-0 style-none">
                  {/* <form>
              <div class="d-flex">
                <input class="form-control email_color email_width" type="email" name="" placeholder="Email" required/>
                <button class="btn email_color" type="submit" value="Submit"><img src={require("../assets/send.png")} className="img-fluid"/></button>
              </div>
            </form> */}
                  {/* <div class="d-flex mt-4">
              <img src={require("../assets/phone_icon.png")} style={{ height:'40px', width:'40px'}} className="img-fluid"/>
              <div style={{ fontSize: '12px'}} class="ms-2 text-dark">
                <label for="">+1 3218 232 232 3</label>
                <p>Call to Expert</p>
              </div>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        
    </div>
  )
}
