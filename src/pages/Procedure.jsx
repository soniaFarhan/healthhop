import React from 'react'
import SellIcon from '@mui/icons-material/Sell';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Rating } from '@mui/material';
import ReactSlider from '../components/ReactSLider';
import HelpIcon from '@mui/icons-material/Help';

export const Procedure = () => {
    const commentData =[
        {
            name: 'John Doe',
            date: 'July 2, 2023 at 12:30pm',
            comment: 'Nice Service',
            rating: 2,
          },
          {
            name: 'Jane Smith',
            date: 'July 3, 2023 at 1:45pm',
            comment: 'Great experience!',
            rating: 5,
          },
          {
            name: 'Bob Johnson',
            date: 'July 4, 2023 at 3:20pm',
            comment: 'Could be better.',
            rating: 3,
          },
          {
            name: 'Emily Davis',
            date: 'July 5, 2023 at 4:10pm',
            comment: 'Not bad at all.',
            rating: 4,
          },
          {
            name: 'Michael Brown',
            date: 'July 6, 2023 at 5:55pm',
            comment: 'Disappointing service.',
            rating: 1,
          },
          {
            name: 'Samantha Taylor',
            date: 'July 7, 2023 at 6:45pm',
            comment: 'Outstanding!',
            rating: 5,
          },
    ]

    const doctorData = [
        {
          name: "Dr. Smith",
          procedure: "Facial Rejuvenation",
          description: "Dr. Smith is a highly skilled surgeon with a passion for helping patients achieve their desired look through facial rejuvenation procedures.",
          imageSrc: require("../assets/md-1.jpg")
        },
        {
          name: "Dr. Johnson",
          procedure: "Breast Augmentation",
          description: "Dr. Johnson specializes in breast augmentation procedures, providing personalized care to help patients enhance their confidence and appearance.",
          imageSrc: require("../assets/md-2.jpg")
        },
        {
          name: "Dr. Davis",
          procedure: "Liposuction",
          description: "With years of experience, Dr. Davis is known for delivering outstanding results in liposuction, helping patients achieve a more sculpted physique.",
          imageSrc: require("../assets/md-3.png")
        },
        {
          name: "Dr. Williams",
          procedure: "Rhinoplasty",
          description: "Dr. Williams is dedicated to perfecting the art of rhinoplasty, ensuring that patients achieve a harmonious and balanced facial appearance.",
          imageSrc: require("../assets/md-4.jpg")
        },
        {
          name: "Dr. Brown",
          procedure: "Tummy Tuck",
          description: "Specializing in tummy tuck procedures, Dr. Brown focuses on helping patients regain confidence and achieve a more contoured abdominal area.",
          imageSrc: require("../assets/md-5.jpg")
        }
      ];
      
      
    
    const defaultValue = 4;
  return (
    <div>
        <div className='container py-5'>
        <div className='row'>
            <div className="col-md-6 ">
                <div className='d-flex gap-2'>
                <button className='btn btn_green rounded-pill'>
                    Hair Transplant
                </button>

                <button className='btn btn_green rounded-pill'>
                    <SellIcon/> Content Provider
                </button>
                </div>

                <div className='py-3'>
                    <h4 >
                        Anadulo Medical Center
                    </h4>
                    <p className=''>
                      <LocationOnIcon/>  Turkey- 31 Specialties
                    </p>

                    <div className='d-flex  align-items-center gap-2'>
                            <Rating className='mb-0' name="size-medium" defaultValue = {defaultValue} /> 
                            <span className='fw-bold'>  
                            ({defaultValue} review) </span>
                     </div>
                </div>

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" >
                            <div className='d-flex align-items-center gap-1'>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className='d-flex align-items-center gap-1'>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className='d-flex align-items-center gap-1'>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={require("../assets/h-card.png")} class="d-block w-100" alt="..."/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>

                    <div className='d-flex justify-content-between mt-4' style={{borderBottom:"2px solid"}}>
                        <p>
                            Overview
                        </p>
                        <p>
                            Price 
                        </p>
                        <p>
                            Location 
                        </p>
                        <p>
                            Reviews
                        </p>

                        <p>
                            Medical Staff
                        </p>

                        <p>
                            Photo & Videos
                        </p>

                    </div>

                    <div className='py-5'>
                        <h3>
                            Pricing
                        </h3>

                        <div className='d-flex justify-content-between p-3 rounded my-4' style={{backgroundColor:"#D8F1F2"}}>
                            <p className='mb-0'>
                                Medical procedure average range
                            </p>
                            <p className='mb-0'>
                                $3000-$4000 USD
                            </p>
                        </div>

                        <div className='d-flex justify-content-between p-3 rounded my-4' style={{backgroundColor:"#D8F1F2"}}>
                            <p className='mb-0'>
                                Medical procedure average range
                            </p>
                            <p className='mb-0'>
                                $3000-$4000 USD
                            </p>
                        </div>

                        <div className='d-flex gap-3'>
                            <button className='btn btn_light border py-3 fs_14px'>
                                Get My Package Quote
                            </button>

                            <button className='btn btn_green border fs_14px'>
                               Instant Boooking 20% off <br /> an average
                            </button>
                        </div>

                    </div>

                    <div className='py-5'>

                        <h3>
                            Location
                        </h3>

                        <div className='my-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6727.52478126572!2d74.44625339223997!3d32.53249249043371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ee8df4221562b%3A0xfa3bd1b74369b63f!2sKapurowali%2C%20Sialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695019725799!5m2!1sen!2s" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                        
                    </div>

                    <div className='py-5'>

                        <h3>
                            Review  
                        </h3>

                        <div className='shadow p-3 rounded'>
                        { commentData.map((comment, index) => (
                                <div key={index}>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex gap-2'>
                                    <HelpIcon sx={{color:'#07A6A9', fontSize:"2.8rem"}} />
                                    <div>
                                        <h6>
                                        {comment.name}
                                        </h6>
                                    <p className='fs_10px'>
                                    {comment.date}
                                    </p>
                                    <p className='fs_14px'>
                                    {comment.comment}
                                    </p>
                                </div>
                                </div>
                                <div className='d-flex  align-items-center gap-2'>
                                <Rating className='mb-0' name="size-medium" defaultValue={comment.rating} /> 
                                </div>
                            </div>
                            {index !== commentData.length - 1 && <hr />} {/* Add this line */}
                            </div>
                        ))
                        } 

                       
                        </div>

                        
                    </div>

                    <div className='py-5'>                       
                    <h3>
                    Medical Staff
                     </h3>

                     {
                        doctorData.map((doctor, index) => (
                            <div key={index} className='d-flex gap-2 align-items-center p-2 rounded my-2' style={{backgroundColor:"#F9F9F9"}}>
                            <div style={{width:"10rem"}}>
                                <img className='img-fluid' src={doctor.imageSrc} alt="imge" />
                            </div>
                            <div>
                                <h4>{doctor.name}</h4>
                                <p className='mb-0 fs_10px text-muted'>{doctor.procedure}</p>
                                <p className='mb-0 fs_14px'>{doctor.description}</p>
                            </div>
                            </div>
                        ))
                        }

                    </div>

                    <div className='py-5'>

                    <h3>
                        photos & Videos
                    </h3>

                    <div className='my-4 '>
                        <div className='d-flex gap-2'>
                        <div style={{width:"10rem"}}>
                        <img className='img-fluid' src={require("../assets/video-1.jpg")} alt="" />
                        </div>

                        <div style={{width:"10rem"}}>
                        <img className='img-fluid' src={require("../assets/video-2.jpg")} alt="" />
                        </div>
                        </div>

                        <div className='d-flex gap-2 px-3 my-3'>
                        <div style={{width:"10rem"}}>
                        <img className='img-fluid' src={require("../assets/video-3.jpg")} alt="" />
                        </div>

                        <div style={{width:"10rem"}}>
                        <img className='img-fluid' src={require("../assets/blog-card-2.png")} alt="" />
                        </div>
                        </div>
                    </div>

                    </div>


            </div>


            <div className="col-md-6">
                <div className="col-md-6 ">
                <div >
                    <img className='img-fluid' src={require("../assets/consulation.png")} alt="" />
                </div>
                <h6 className='text-center py-3'>
                    Book My Free Consultation
                </h6>
                <hr />

                <div className='px-3'>
                <div className='my-3'>
                    <input className='form-control' type="text" name="" id="" placeholder='First & Last Name' />
                </div>

                <div className='my-3'>
                    <input className='form-control' type="email" name="" id="" placeholder='Email' />
                </div>
                <div className='my-3'>
                    <input className='form-control' type="number" name="" id="" placeholder='Phone' />
                </div>

                </div>

                <div className='my-3 px-3'>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="4star"/>
                <label class="form-check-label fs_10px" for="4star">
                4 & 5 Star Hotel Accommodation 
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="3star"/>
                <label class="form-check-label fs_10px" for="3star">
                3 Star Hotel Accommodation 
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="service"/>
                <label class="form-check-label fs_10px" for="service">
                Transportation Services (Airport/hotel/clinic)
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="visa"/>
                <label class="form-check-label fs_10px" for="visa">
                Visa Support 
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="language"/>
                <label class="form-check-label fs_10px" for="language">
                Language/Translation Support 
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tour"/>
                <label class="form-check-label fs_10px" for="tour">
                Touristic 
                </label>
                </div>

                <div className='my-2'>
                    <p className='fs_10px'>
                        What time frame would you like to do the procedure?
                    </p>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="1month"/>
                <label class="form-check-label fs_10px" for="1month">
                 0 -1 month 
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="2month"/>
                <label class="form-check-label fs_10px" for="2month">
                 1-3 months
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="3month"/>
                <label class="form-check-label fs_10px" for="3month">
                 3-6 months
                </label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="4month"/>
                <label class="form-check-label fs_10px" for="4month">
                 Other/I'm Unsure
                </label>
                </div>

                <div class="my-3">
                <textarea class="form-control" id="" placeholder='Message' rows="3"></textarea>
                </div>

                <div className='my-3'>
                    <h6 className='text-center'>
                        Prefferred contact method
                    </h6>
                    <div className='d-flex justify-content-center gap-3'>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label class="form-check-label" for="exampleRadios1">
                       Email
                    </label>
                    </div>

                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                        Phone
                    </label>
                    </div>
                    </div>

                    <div className='d-flex justify-content-center my-3'>
                    <button className='btn btn_green rounded-pill'>
                        Contact Provider
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
