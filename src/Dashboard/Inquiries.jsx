import { Chat } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Inquiries = () => {
  const [expandedPosts, setExpandedPosts] = useState([]);

  const toggleExpand = (index) => {
    setExpandedPosts((prevExpandedPosts) => {
      const newExpandedPosts = [...prevExpandedPosts];
      newExpandedPosts[index] = !newExpandedPosts[index];
      return newExpandedPosts;
    });
  };
  const data = [
    {
      name: "James",
      chat: "Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma",
      img: require("../assets/blog-card-1.png"),
      dob: "18/7/2000",
      gender: "Male",
      country: "Spain",
      age: "90",
      height: "8ft 1'",
      weight: "190kg",
      medication: "none",
      refImg1: require("../assets/Group 16902.png"),
      refImg2: require("../assets/High-res.jpg"),
      refImg3: require("../assets/altumcode-dC6Pb2JdAqs-unsplash - Copy.png"),
    },
    {
      name: "Mia",
      chat: "Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma",
      img: require("../assets/blog-card-2.png"),
      dob: "18/4/2006",
      gender: "Female",
      country: "United States",
      age: "15",
      height: "8ft 1'",
      weight: "90kg",
      medication: "none",
      refImg1: require("../assets/Ellipse 1.png"),
      refImg2: require("../assets/Group 16902.png"),
      refImg3: require("../assets/HealthHop logo reverse on dark background (1).png"),
    },
    {
      name: "Herry",
      chat: "Hair transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma transplant surgery is a procedure used to treat hair loss. Various techniques are available, but all hair transplants involve taking hair-bearing No comments on this screen skin from one part of the scalp and grafting these pieces of skin onto bald or thinning areas of the scalp or areas of trauma",
      img: require("../assets/blog-card-4.png"),
      dob: "18/7/2000",
      gender: "Male",
      country: "London",
      age: "10",
      height: "6ft 1'",
      weight: "60kg",
      medication: "none",
      refImg1: require("../assets/Image 5.png"),
      refImg2: require("../assets/Transparent-Icon.png"),
    },
  ];

  return (
    <>
      <div
        className="container my-2  p-3 bg-white"
        style={{ borderRadius: "12px", paddingBottom: "90px" }}
      >
        <div className=" row m-1">
          <div className="col"></div>
          {data.map((ele, index) => {
            return (
              <div
                key={index}
                className="d-md-flex  bg-white shadows4 mb-2 p-1"
                style={{ borderRadius: "12px" }}
              >
                <div className="p-1 me-2">
                  <div style={{ width: "8rem", height: "100%" }}>
                    <img
                      className="img-fluid w-100 h-100"
                      src={ele.img}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className=" "
                  style={{ width: "100%", whiteSpace: "pre-wrap" }}
                >
                  <div className="d-flex justify-content-between aling-items-center pt-2">
                    <Link
                      // to={{
                      //   pathname: "/inquiryPatient",
                      //   state: ele,
                      // }}
                      to={"/inquiries/inquiryPatient"}
                      state={{ ele }}
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="" style={{ fontSize: "16px" }}>
                        {ele.name}
                      </h6>
                    </Link>

                    <Link style={{ textDecoration: "none" }} to={"/inquiries/meet"}>
                      <p style={{ fontSize: "10px", color: "#07A6A9" }}>
                        Quote offered
                      </p>
                    </Link>
                  </div>

                  <div className="me-4">
                    <p style={{ fontSize: "11px" }}>
                      {expandedPosts[index] ? (
                        ele.chat
                      ) : (
                        <>{ele.chat.slice(0, 250)}...</>
                      )}
                      <span
                        className="h-color fw-bold ms-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedPosts[index] ? "Read Less" : "Read More"}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex aling-items-center justify-content-end">
                    <div className="m-2">
                      <Link to={"/message"}>
                        <Button variant="text" style={{ color: "#07A6A9" }}>
                          <Chat />
                        </Button>
                      </Link>
                    </div>

                    <div className="m-2">
                      <Link to={"/calendar"}>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#07A6A9",
                            padding: "6px",
                            fontSize: "10px",
                          }}
                        >
                          Meet
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
