import React from 'react'
import SendIcon from '@mui/icons-material/Send';
export const ContactUs = () => {
  return (
    <div>
        <div className='container pt-3'>
        <div className='contact_background_img d-flex justify-content-center align-items-center'>
            <h2 className='text-white'>
                Contact Us
            </h2>
        </div>

        <div className='custom_padding'>
            <p className='text-muted fs_14px'>
                Contact Us
            </p>
            <div className='row'>
                <div className="col-md-6">
                    <h1>
                    Contact our Health <br />
                    Tourism Experts.
                    </h1>
                    <p className='text-muted fs_14px'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, deserunt repellat numquam nisi ex voluptatum tempora vitae accusamus reprehenderit ducimus in, quia quidem? Libero, impedit porro ex illum amet quod?
                    </p>

                    <div className='d-flex align-items-center gap-2 flex-wrap mt-5'>
                    <div className='d-flex align-items-center gap-2 '>
                        <div style={{width:"2rem"}}>
                        <img className='img-fluid' src={require("../icons/call.png")} alt="" />
                        </div>
                        <div>
                            <h6 className='mb-0'>
                                090078601
                            </h6>
                            <p className='mb-0'>
                                Info@fabtechsol.com
                            </p>
                        </div>
                    </div>

                    <div className='d-flex align-items-center gap-2'>
                        <div style={{width:"2rem"}}>
                        <img className='img-fluid' src={require("../icons/loaction.png")} alt="" />
                        </div>
                        <div>
                            <h6 className='mb-0'>
                                First Floor Akbar Plaza near rescue  
                            </h6>
                            <p className='mb-0'>
                                Info@fabtechsol.com
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <form action="">

                    <div className="row">
                        <div className='col-md-6'>
                           <input className='form-control' type="text" name="" id="" placeholder='Your Name' />
                        </div>
                        <div className='col-md-6'>
                             <input className='form-control' type="email" name="" id="" placeholder='Your Email' />
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className='col-md-6'>
                           <input className='form-control' type="text" name="" id="" placeholder='Your Name' />
                        </div>
                        <div className='col-md-6'>
                             <input className='form-control' type="email" name="" id="" placeholder='Your Email' />
                        </div>
                    </div>

                    <div class="mb-3">
                    <textarea placeholder='Message'  class="form-control" id="" rows="3"></textarea>
                    </div>

                    <button className='btn btn_green'>
                        Send Message <SendIcon/>
                    </button>

                    </form>
                </div>
            </div>
        </div>

        <div className='custom_padding' style={{backgroundColor:"#F8F8F8"}}>
            <div className='d-flex justify-content-center py-3'>
            <div style={{width:"10rem"}}>
                <img width={'100%'} src={require("../assets/High-res.jpg")} alt="" />
            </div>
            </div>
            <div className='d-flex justify-content-center'>
            <p className='text-center col-md-6'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse tempora ab repellendus hic totam. Consequuntur omnis optio in libero quia blanditiis, molestiae provident dolore. Atque consequuntur reiciendis neque animi blanditiis?
            </p>
            </div>

                <div class="input-group d-flex justify-content-center">
                <div class="form-outline col-md-4">
                    <input type="search" id="form1" class="form-control" placeholder='ENTER YOUR EMAIL ADDRESS' />
                    {/* <label class="form-label" for="form1">Search</label> */}
                </div>
                <button type="button" class="btn btn_green">
                    SUBSCRIBE
                </button>
                </div>            
        </div>

        </div>
    </div>
  )
}
