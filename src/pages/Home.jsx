import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Container, Grid } from '@mui/material';

export const Home = () => {
    const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardData = [
    {
      title: "Select the Procedure",
      description: "You Need",
      image: require("../assets/card-1.jpg"),
      step: "1",
    },
    {
      title: "Consult with medical providers",
      description: "until you find the right one for you",
      image: require("../assets/card-2.jpg"),
      step: "2",
    },
    {
      title: "Receive a package offer",
      description: "Procedure, transportation, hotel, visa, and more. Aceept. Travel, Become a better you.",
      image: require("../assets/card-3.jpg"),
      step: "3",
    },
    {
      title: "Extra time?",
      description: "Sightsee !",
      image: require("../assets/card-4.jpg"),
      step: "4",
    },
  ];

  return (
    <div>
      <div className='home_background_img'>
        <div className="h-100">
         <div className='row gx-0 '>  
                    <div className='col-md-4 d-flex justify-content-center mt-5' style={{height:"70vh"}}>
                        <div className='col-md-7 bg-light rounded px-4 py-4'>
                        <h6 className='text-dark text-center fw-bold'>
                        Book Your Medical Procedure
                        </h6>
                        <p className='text-center'>
                            Find the top providers in Turkey
                        </p>

                        <div className='mb-3'>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Chose Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                        </div>

                        <div>
                        <select class="form-select" aria-label="Default select example">
                        <option selected>Chose Location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                        </div>


                        <h6 className='py-4'>
                            Your Budget
                        </h6>
                        <p>
                            Select min and max price range 
                        </p>


                        <Box sx={{ width: 250 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            // getAriaValueText={valuetext}
                        />
                        </Box>



                        <div className='pt-5'>
                        <button className='btn btn_green w-100 rounded-pill'>
                            Start your Health Journey
                        </button>
                        </div>

                        </div>
                    </div>
                 
                    <div className='col-md-8  h-100 mt-5'>
                        <div className='col-md-9'>
                            <h1 style={{color:'white'}}>
                                Discover Medical Tourism <br />
                                with HealthHop
                            </h1>
                            <p className='text-white'>
                            HealthHop was founded in San Francisco, CA. Our mission is to make medical <br />
                            tourism more safe and accessible than ever. We only work with the best medical <br />
                            practitioners and hospitals in the area, so that you are in good hands
                            </p>
                        </div>
                    </div>

        </div>
        </div>
      </div>


{/* simple section  */}

        <section className='py-5'>
            <div className='d-flex justify-content-center mb-5'> 
              <h3 style={{ borderBottom: '2px solid green', display: 'inline-block', paddingBottom: '7px'}}>
                  It's Simple
              </h3>
            </div>

    <Box className="">

     <Container>
        <Box className=" d-flex justify-content-center">
          <Grid container className=' d-flex justify-content-center' md={8} xs={12} >
           
          <Grid className=' d-flex justify-content-center' container spacing={3} >
            {cardData.map((card, index) => (
              <Grid item key={index} xs={12} md={6} lg={5} sx={{ position:"relative"}}>
                <Card className='' sx={{ maxWidth: 300, minHeight:300 }}>
                  <CardMedia
                    component="img"
                    alt={card.title}
                    height="140"
                    image={card.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{color:"#07A6A9"}}>
                      {card.title}
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
                  <div className='d-flex justify-content-center align-items-center text-white px-2 py-2 white_space' 
                  style={{
                    width:"45px", 
                    height:"45px", 
                    borderRadius:"50%", 
                    backgroundColor:"#07A6A9", 
                    position:"absolute", 
                    top:"3px",
                    zIndex:"2000", 
                    left:"150px", 
                    fontSize:"11px"
                  }}>
          Step {card.step}
        </div>
              </Grid>
            ))}
          </Grid>
           
          </Grid>
        </Box>
    </Container>
            </Box>
             
        </section>



{/* Access to World class medical providers  */}
        <section className='py-5'>
        <div className='d-flex justify-content-center mb-5'> 
              <h3 style={{ borderBottom: '2px solid green', display: 'inline-block', paddingBottom: '7px'}}>
              Access to World class medical providers
              </h3>
            </div>

            <div className='d-flex justify-content-center'>
            <div className='row container'>

              <div className='col-md-4'>
              Get the Best Medical
              Care for
              Your Needs

              </div>

              <div className='col-md-8'>
              HealthHop is a centralized, all-in-one medical tourism application that allows you to book your medical procedures, transportation, and accommodation logistics in
              ather city, country or overseas. Our app is easy to use and provides a personalized experience to make your medical journey as stress-free as possible. Download the app today and start exploring your options.

              </div>

            </div>
            </div>


        </section>




    </div>
  )
}
