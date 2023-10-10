import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const InquiryPatientProfile = (props) => {
  const { state } = useLocation();
  useEffect(() => {
    setData(state.ele);
  }, [state]);
  const [data, setData] = useState([]);
  return (
    <>
      <div
        className=" mt-3 container px-0 w-100"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <div className="px-4" style={{ backgroundColor: "#91D7D8" }}>
          <h2 className="py-3 " style={{ color: "white" }}>
            {data.name} Profile Detail
          </h2>
        </div>
        <div className="col d-flex justify-content-start px-4">
          <div className="mt-2">
            <label
              style={{ fontSize: "60px", border: "3px dashed #9E9E9E" }}
              className="text-center px-4 rounded"
              htmlFor="img"
            >
              <img src={data.img} className="img-fluid w-50" alt="" />
            </label>
          </div>
        </div>

        <div className="row mt-2 py-2 px-3">
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Full |Name
            </label>
            {/* <input
              type="text"
              className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3"
              placeholder="Name"
            /> */}

            <p className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3">
              {data.name}
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Age
            </label>
            <p className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3">
              {data.age}
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Date of Birth
            </label>
            <p className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3">
              {data.dob}
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Gender
            </label>
            <p className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3">
              {data.gender}
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Height
            </label>
            <p className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3">
              {data.height}
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Current Weight
            </label>
            <p className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3">
              {data.weight}
            </p>
          </div>
          <div className="col-md-6 mt-3">
            <label htmlFor="" className="fw-bold">
              Current Medication
            </label>
            <p className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3">
              {data.medication}
            </p>
          </div>

          <div className="col-md-12 mt-3">
            <label htmlFor="" className="fw-bold">
              Country
            </label>
            <p className="form-control rounded-4 mt-1 border border-1 border-dark fs_14px p-3">
              {data.country}
            </p>
          </div>
        </div>
        <div className="col mt-4 px-4">
          <label htmlFor="" className="fw-bold">
            Any photos to uplaod for your medical provider, please upload them
            here?(upload photos to their profile page)
          </label>
          <div className="mt-2">
            <label
              style={{ fontSize: "90px", border: "3px dashed #9E9E9E" }}
              className="text-center px-4 rounded"
              htmlFor="img"
            >
              <img src={data.refImg1} className="w-25 img-fluid" alt="" />
              <img src={data.refImg2} className="w-25 img-fluid" alt="" />
              <img src={data.refImg3} className="w-25 img-fluid" alt="" />
            </label>
          </div>
        </div>
        <div className=" mt-2 py-2 px-3">
          <Button style={{ backgroundColor: "#07A6A9", border: "none" }}>
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default InquiryPatientProfile;
