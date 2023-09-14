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
  ],
  
  const cardketData = [
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
    {
      icon: <MedicalServicesOutlined style={{ fontSize: "35px" }} />,
      title: "cancer Treatment",
    },
  ],

  const cardchatData = [
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
  const cardketData = [
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
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#07A6A9" }}
                      >
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
            <Grid
              container
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {cardketData.map((e, index) => (
                <Grid item key={index}>
                  <div
                    className="ket"
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

        <Box>
          <Container>
            <Grid className=" mx-auto"
              container
              spacing={3}
              alignItems={"center"}
             
            >
              {cardchatData.map((e, index) => (
                <Grid  className="mx-auto" item key={index}>
                  <div
                    className="chat chatcard my-4"
                    style={{
                      backgroundColor: "#F9F9F9",
                      height: "220px",
                      width: "300px",
                      borderRadius: "10px",
                      color: "#939393",
                    }}
                  >
                    <div className=" card-content d-flex   p-4">
                      <div className="p-3">dede</div>

                      <p className="mb-0 p-3" style={{ fontSize: "12px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corrupti repellendus eveniet alias sunt delectus vitae
                        eligendi natus possimus iste deserunt laudantium itaque,
                        laboriosam officia quod, cumque quos ratione distinctio
                        dolorem.
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
    </div>
  );
};
