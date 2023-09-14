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
      title: "Product 1",
      description: "Description for Product 1",
      image: require("../assets/card-1.jpg"),
    },
    {
      title: "Product 2",
      description: "Description for Product 2",
      image: require("../assets/card-2.jpg"),
    },
    // Add more card data as needed
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
            <div className='d-flex justify-content-center  py-3'> 
            <h3 style={{ borderBottom: '2px solid green', display: 'inline-block', paddingBottom: '7px'}}>
                It's Simple
            </h3>
            </div>


            <Box className="test">

     <Container>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 300 }}>
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
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
            <div></div>
          </Grid>
        ))}
      </Grid>
    </Container>
            </Box>
             


        </section>




    </div>
  )
}
