import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Avatar, Container, Grid } from "@mui/material";
import { MedicalServicesOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

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

  const cardchatData = [
   

    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel harum ullam quod repellendus quas officia eum molestias voluptas animi corporis quasi nemo debitis, enim saepe deleniti odio dolore facilis!",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel harum ullam quod repellendus quas officia eum molestias voluptas animi corporis quasi nemo debitis, enim saepe deleniti odio dolore facilis!",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel harum ullam quod repellendus quas officia eum molestias voluptas animi corporis quasi nemo debitis, enim saepe deleniti odio dolore facilis!",
    },
  ];

  const cardketData = [
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title:"cancer Treatment" ,
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
  ];

 

  return (
    <div>
      <div className="home_background_img">
        <div className="h-100">
          <div className="row gx-0 ">
            <div
              className="col-md-4 d-flex justify-content-center mt-5"
              style={{ height: "70vh" }}
            >
              <div className="col-md-7 bg-light rounded px-4 py-4">
                <h6 className="text-dark text-center fw-bold">
                  Book Your Medical Procedure
                </h6>
                <p className="text-center">Find the top providers in Turkey</p>

                <div className="mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Chose Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Chose Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <h6 className="py-4">Your Budget</h6>
                <p>Select min and max price range</p>

                <Box sx={{ width: 250 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                  />
                </Box>

                <div className="pt-5">
                  <button className="btn btn_green w-100 rounded-pill">
                    Start your Health Journey
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-8  h-100 mt-5">
              <div className="col-md-9">
                <h1 style={{ color: "white" }}>
                  Discover Medical Tourism <br />
                  with HealthHop
                </h1>
                <p className="text-white">
                  HealthHop was founded in San Francisco, CA. Our mission is to
                  make medical <br />
                  tourism more safe and accessible than ever. We only work with
                  the best medical <br />
                  practitioners and hospitals in the area, so that you are in
                  good hands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* simple section  */}

      <section className="py-5">
        <div className="d-flex justify-content-center  py-3">
          <h3
            style={{
              borderBottom: "2px solid green",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
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

   <section className="">

   <div className="d-flex justify-content-center  py-5">
          <h3
            style={{
              borderBottom: "2px solid green",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            Access to World Class medical providers
          </h3>
        </div>
<div className="container">

        <div className="mx-md-5">

        <div className="p-3 bg">
<div className=" px-md-5 d-md-flex" style={{paddingBottom:"140px",paddingTop:"50px" }}>
<div className="me-5" style={{width:"30%"}}>
<h3 style={{color:'white'}}>Loremaccus consequatur recusandae. Quis corporis .</h3>
 
</div>
<div className="" style={{width:"70%"}}>
<p style={{color:'white'}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam quam sequi, consequuntur amet sapiente doloremque dolor, nam, ea doloribus harum ipsum maiores suscipit distinctio fugit possimus obcaecati quas laborum.

</p>

</div>

</div>

</div>

        </div>
</div>



   </section>









      <section className="py-5">
        <div className="d-flex justify-content-center  py-3">
          <h2
            style={{
              borderBottom: "2px solid green",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            Top Specialties
          </h2>
        </div>

        <Box>
          <Container>
            <Grid className="mx-auto"
              container
              spacing={2}
              alignItems={"center"}
            justifyContent={"center"}
            >
              {cardketData.map((e, index) => (
                <Grid className="" item key={index}>
                  <div
                    className="ket mx-auto"
                    style={{
                      backgroundColor: "#F9F9F9",
                      height: "150px",
                      width: "140px",
                      borderRadius: "10px",
                      color: "#939393",
                    }}
                  >
                    <div className="text-center  pt-4">
                      <div className="pb-5">{e.icon}</div>

                      <p className="mb-0 pb-4" style={{ fontSize: "12px" }}>
                        {e.title}
                      </p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <p className="text-center mt-4 decoration-none">
          <Link className="decoration-none" style={{ color: "#6C6C6C" }}>
            {`see more >>`}{" "}
          </Link>
        </p>
      </section>
      <section className="py-5">
        <div className="d-flex justify-content-center  py-3">
          <h2
            style={{
              borderBottom: "2px solid green",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
            What Our Users Say
          </h2>
        </div>
        <div className="text-center" style={{ color: "#939393",fontSize:"11px"}}>
          <p >We collect reviews from our usersso you can get an honest opinion of what </p>
          <p></p>
        </div>

        <Box>
          <Container>
            <Grid className=" mx-auto"
              container
              spacing={3}
              alignItems={"center"}
             
            >
              {cardchatData.map((e, index) => (
                <Grid  className="mx-auto p-0" item key={index}>
                  <div
                    className="chat my-4"
                    style={{
                      backgroundColor: "#F9F9F9",
                     
                      width: "300px",
                      borderRadius: "10px",
                      color: "#939393",
                    }}
                  >
                    <div className="  d-flex   p-4">
                      <div className="px-2 py-5 card-content">{e.icon}</div>

                      <p className="mb-0 p-3 card-content p-3 py-3 " style={{ fontSize: "12px" }}>
                       {e.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Avatar
                      className="mx-auto my-4"
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </section>


      <section className="mx-5">
        <div className="mx-5">

<div className="bg1 ">
<div className="d-flex justify-content-center  py-3">
          <h2
            style={{
              borderBottom: "2px solid green",
              display: "inline-block",
              paddingBottom: "7px",
            }}
          >
           How HealthHop Works
          </h2>
        </div>
        <div className="text-center" style={{ color: "#939393",fontSize:"11px"}}>
          <p >We collect reviews from our usersso you can get an honest opinion of what </p>
          <p></p>
        </div>


   <div className="container">
<div className="row">
<div className="col-md-7">
  <div className="" style={{backgroundColor:"#07A6A9",width:'50px',borderRadius:"13px"}}>
<h4 className="p-2 text-center" style={{color:"white",}}>
  01
</h4>

  </div>
  <h2>
    Book Your Procedure
  </h2>
<p className="" style={{ fontSize: "12px" }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates molestias magnam inventore quas nobis deserunt necessitatibus dolor quae quisquam. Minus exercitationem doloribus nam omnis labore dolores amet consequatur consectetur!

</p>
</div>

<div className="col-md-5">

</div>
  
</div>

   </div>
      





</div>
        </div>

      
      </section>



    </div>
  );
};
