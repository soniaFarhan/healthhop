import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Link } from 'react-router-dom';

export const Procedures = () => {
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const data = [
        {
            name: "Anadulo Medical Center 1",
            procedure: "Hair Transplant",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam nemo aperiam tenetur, corrupti quia non sit enim unde eos illum doloremque ex eveniet esse incidunt iste? Vero, perspiciatis nulla.",
            price: "$12000 USD - $35000",
            reviews: 5,
            defaultValue: 4
        },
        {
            name: "Anadulo Medical Center 2",
            procedure: "Cosmetic Surgery",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam nemo aperiam tenetur, corrupti quia non sit enim unde eos illum doloremque ex eveniet esse incidunt iste? Vero, perspiciatis nulla.",
            price: "$8000 USD - $25000",
            reviews: 4,
            defaultValue: 3
        },
        {
            name: "Anadulo Medical Center 3",
            procedure: "Dental Implants",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam nemo aperiam tenetur, corrupti quia non sit enim unde eos illum doloremque ex eveniet esse incidunt iste? Vero, perspiciatis nulla.",
            price: "$5000 USD - $15000",
            reviews: 3,
            defaultValue: 5
        },
        {
            name: "Anadulo Medical Center 4",
            procedure: "LASIK Eye Surgery",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam nemo aperiam tenetur, corrupti quia non sit enim unde eos illum doloremque ex eveniet esse incidunt iste? Vero, perspiciatis nulla.",
            price: "$3000 USD - $8000",
            reviews: 5,
            defaultValue: 4
        }
    ]

    const defaultValue = 4;
    return (
        <div>
            <div className='container pt-3'>
                <div className='procedure_background_img d-flex justify-content-center align-items-end'>
                    <h2 className='text-white mb-5'>
                        Procedures
                    </h2>
                </div>

                <div className='py-5'>
                    <h3>
                        Medical Providers Picked for you
                    </h3>
                    <p className='fs_14px me-md-5 pe-md-5 w-75'>
                        We've picked the top medical providers for your procedure. We only work with the best of the best to ensure top-care and safety from
                        the beginning of your journey until the end."
                    </p>

                    <div className='row'>
                        <div className="col-md-8 " style={{ height: "auto" }}>
                            {data.map((data, index) => (
                                <div className='d-flex align-items-center gap-1 justify-content-between flex-column flex-md-row shadow rounded-4 p-2 mb-3'>
                                    <div className='p-2'>
                                        <div style={{ width: "8rem" }}>
                                            <div id={`carouselExampleControls-${index}`} class="carousel slide" data-bs-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active" >
                                                        <div className='d-flex align-items-center gap-1'>
                                                            <div style={{ width: "10rem" }}>
                                                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..." />
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <div className='d-flex align-items-center gap-1'>
                                                            <div style={{ width: "10rem" }}>
                                                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..." />
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <div className='d-flex align-items-center gap-1'>
                                                            <div style={{ width: "10rem" }}>
                                                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..." />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <button style={{left:"7px"}} class="carousel-control-prev text-dark" type="button" data-bs-target={`#carouselExampleControls-${index}`} data-bs-slide="prev">
                                                    <div className='d-flex align-items-center justify-content-center bg-dark rounded-5'><span class="carousel-control-prev-icon" aria-hidden="true"></span></div>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button style={{right:"7px"}} class="carousel-control-next text-dark" type="button" data-bs-target={`#carouselExampleControls-${index}`} data-bs-slide="next">
                                                    <div className='d-flex align-items-center justify-content-center bg-dark rounded-5'><span class="carousel-control-next-icon" aria-hidden="true"></span></div>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <div className='d-flex align-items-center gap-2 flex-column flex-md-row'>
                                                <h5>
                                                    {data.name}
                                                </h5>

                                                <Link>
                                                    <button className='btn_blue btn rounded-pill py-0 fs_10px'>
                                                        {data.procedure}
                                                    </button>
                                                </Link>
                                            </div>

                                            <p className='fs_10px cu-color'>
                                                {data.description}
                                            </p>
                                        </div>

                                        <div className='d-flex justify-content-between flex-column flex-md-row'>
                                            <div>
                                                <p className='fs_14px fw-bold mb-0'>
                                                    Averrage Price
                                                </p>
                                                <p className='fs_14px cu-color'>
                                                    ( {data.price} )
                                                </p>

                                                <div className='d-flex  align-items-center gap-2'>
                                                    <Rating className='mb-0' name="size-medium" defaultValue={defaultValue} />
                                                    <span className='fw-bold'>
                                                        ({data.defaultValue} review) </span>
                                                </div>
                                            </div>

                                            <div>
                                                <div className='mb-3'>
                                                    <Link>
                                                        <button className='btn btn_light rounded-pill border border-dark fs_10px'>
                                                            Instant Quote and booking
                                                        </button>
                                                    </Link>
                                                </div>

                                                <div>
                                                    <Link>
                                                        <button className='btn gradient-btn text-white rounded-pill fs_10px'>
                                                            Learn More and Contact Us
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            ))
                            }
                        </div>


                        <div className="col-md-4">
                            <div className=' shadow p-5 rounded-4'>

                                <h3 className='mb-3'>
                                    Filters
                                </h3>

                                <div className='mb-3'>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Languages</option>
                                        <option value="">Arabic</option>
                                        <option value="">Azerbaijani</option>
                                        <option value="">Dutch</option>
                                        <option value="">English</option>
                                        <option value="">Farsi</option>
                                        <option value="">French</option>
                                        <option value="">German</option>
                                        <option value="">Hindi</option>
                                        <option value="">Italian</option>
                                        <option value="">Pashto</option>
                                        <option value="">Polish</option>
                                        <option value="">Portuguese</option>
                                        <option value="">Russian</option>
                                        <option value="">Spanish</option>
                                        <option value="">Turkish</option>
                                        <option value="">Ukrainian</option>
                                        <option value="">Urdu</option>

                                    </select>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="5star" />
                                    <label class="form-check-label fs_14px" for="5star">
                                        4 & 5 Star Hotel Accommodation
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="3star" />
                                    <label class="form-check-label fs_14px" for="3star">
                                        3 Star Hotel Accommodation
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="tansportation" />
                                    <label class="form-check-label fs_14px text-break" for="tansportation">
                                        Transportation Services(Airport/hotel/clinic)
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="visa" />
                                    <label class="form-check-label fs_14px" for="visa">
                                        Visa Support
                                    </label>
                                </div>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="Lang" />
                                    <label class="form-check-label fs_14px" for="Lang">
                                        Language/ Translation Support
                                    </label>
                                </div>

                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="touristic" />
                                    <label class="form-check-label fs_14px" for="touristic">
                                        Touristic Excursions
                                    </label>
                                </div>

                                <div class="">
                                    <select name="" className='form-control form-select' id="">
                                        <option selected>Any Location</option>
                                        <option value="1">-Istanbul</option>
                                        <option value="2">-Izmir</option>
                                        <option value="3">-Antalya</option>
                                        <option value="4">-Bursa</option>
                                        <option value="5">-Mugla (Fethiye, Marmaris, Bodrum)</option>
                                    </select>
                                </div>

                                <div className='py-3'>
                                    <h5>
                                        Your Budget
                                    </h5>
                                    <p>
                                        Select min and max price range
                                    </p>

                                    <Box className="" >

                                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" style={{ color: "#07A6A9" }} />

                                    </Box>
                                    <div className='my-3'>
                                        <button className='btn btn_green rounded-pill px-4'>
                                            Search
                                        </button>
                                    </div>


                                </div>

                            </div>




                        </div>

                    </div>




                </div>

            </div>
        </div>
    )
}
