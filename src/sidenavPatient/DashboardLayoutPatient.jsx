import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// import AuthContext from '../../auth/auth-context';
import Header from './Header';
import Navbar from './Navbar';
import SideNav from './SideNav';




const DashboardLayoutPatient = ({type}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const {userType,debugMode} = useSelector((state) => state.auth)
  
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };
  // const auth = useContext(AuthContext);
  const navigate=useNavigate()
  // useEffect(()=>{
  //  if(!auth.isLoggedIn)
  //         navigate('/')

  // },[])
  if(debugMode)
  if(userType!==type)
  return <Navigate to={userType=="HO"&&"hospitals"||userType=="AD"&&"/manager"}/>
return (

  <Box sx={{ display: "flex",backgroundColor:"#EFF3F4",height:"100vh" }}>
  <CssBaseline />
  <Header />
  <Box className='px-1 px-md-3 pt-5 pb-2' style={{backgroundColor:"#EFF3F4"}}
    component="main"
    sx={{
      flexGrow: 1,
   
      width: { md: `calc(100% - ${240}px)`, overflow: "auto" },
    }}
  >
    <Toolbar />




      <Outlet context={{type}} />


      </Box>
      </Box>
)
};

export default DashboardLayoutPatient;
