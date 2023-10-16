import { AppBar ,Avatar,Button,Hidden,IconButton,Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'
import { ArrowForward, NotificationAdd } from '@mui/icons-material';
import { Link } from 'react-router-dom';

  function Navbar({handleDrawerToggle}) {

    return (
    <Box class="" sx={{ flexGrow: 1 }}>
       
              
           <AppBar className='' position="fixed" sx={{ background: "black" }}>
            <Toolbar variant="dense" style={{display:'flex',
              justifyContent:'flex-end',minHeight:'65px'}} >
               
    <Box className=''>
      <div className='d-flex align-items-center'>
        <div className='me-5'>
           {/* <Button
          style={{ background: "white" }}
          variant="contained"
          href="#contained-buttons"
        >
         < NotificationAdd style={{ color: "red" }}/>
        </Button> */}
        </div>
<div className="d-flex">



      <div className='m-1'>
      <Link to={"/business-profile"}>
      <Avatar alt="Travis Howard" src={require("../assets/logo.png")} />
      
      </Link>  
        </div>
    {/* <div style={{color:"black"}}><h5 className='m-1' style={{fontSize:"14px"}}>Ola Boluwatife</h5><p className='m-0' style={{fontSize:"12px"}}>PANTENT</p></div> */}
    </div>

<Hidden
mdUp
>
  <IconButton onClick={handleDrawerToggle}>
    <MenuIcon style={{color:"white"}} />
  </IconButton>
  </Hidden>
  </div>
  

</Box>
  </Toolbar>
</AppBar>
        </Box>
    );
}

export default Navbar;
