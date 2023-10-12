import React, { useState } from 'react';
import { Box, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Popup3 from './Popup3';

const Login = ({ role, Content }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ text: "", color: "" });
  const [loading, setLoading] = useState(false);
  const searchParams = new URLSearchParams(location.search);

  

  const {from} = location?.state||{}; 

  console.log(location,"klkl")
  // Access specific query parameters
  const method = searchParams.get('method');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrors();
    if (password.length < 6) {
      return setMessage({
        text: "Password should be at least 6 characters",
        color: "danger",
      });
    }
    setLoading(true); // Start loading

    // Simulate API request (replace this with actual API call)
    setTimeout(() => {
      setLoading(false); // Stop loading
      // Handle successful login here
      // ...
      // Redirect user based on role (replace with actual logic)
      navigate('/dashboard'); // Example redirect
    }, 2000); // Simulating a 2-second API request
  };

  const resetErrors = () => {
    setMessage({ text: "", color: "" });
  };

  return (
    <Box className='d-flex justify-content-center align-items-center layout'>
    <Box className=' col-md-5 col-lg-3 rounded-4' elevation={6} component={Paper} sx={{ p: 4 }}>
      <Typography className='text-center' variant="h5"  fontWeight="bold" mb={2}>
        Login
      </Typography>
      <hr style={{width:"100%"}} />
      {/* <Divider sx={{backgroundColor:'black', m:1}}/> */}
      {message.text && (
        <div className={`bg-${message.color} p-1 m-1`}>
          <span>{message.text}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <Grid container  spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Email"
              name="username"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>

            <Link to={"/"}>
            
            <button className='btn btn_green w-100 py-3'>
                Continue
            </button>
            </Link>
          </Grid>

        <Box className='d-flex justify-content-center w-100'>
          <Link className='text-center text_color my-3 fs_25px' to="/singeupstepform"  state={{from}} style={{textDecoration:'none'}}>
           Register
          </Link>
        </Box>

        </Grid>
      </form>
      {!from &&
      <div className="d-flex justify-content-center aling-item-center me-3  mb-1">
                    <div className="">
                      <img src={require("../assets/fb.svg").default} alt="" />
                    </div>
                    <div className="">
                      <img
                        src={require("../assets/google.svg").default}
                        alt=""
                      />
                    </div>
        </div>
      }
    </Box>
   
    </Box>
  );
};

export default Login;
