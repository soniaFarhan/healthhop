import React from 'react'

export const PaymentMethod = () => {
  return (
    <div>
        <div className='container py-5'>
            <h2 className='fw-bold'>
                Payment Method
            </h2>
            <p className='fw-semibold'>
            Pay your deposit with HealthHop to secure your booking and price" Deposits are fully refundable if you decide to cancel your plans up until 3 days before your procedure." The rest of the payment is due at the discretion of the medical provider. Some will take the payment the day of the procedure and some upon completion.
            </p>

            <div className='d-flex align-items-center gap-5 rounded p-3' style={{backgroundColor:"#E0F3D2"}}>

            <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
               <img src={require("../assets/paypal.png")} alt="" />
            </label>
            </div>

            <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label class="form-check-label" for="flexRadioDefault2">
                <img src={require("../assets/credit-card.png")} alt="" />
            </label>
            </div>

            </div>

            <div>

            <div class="my-4 col-md-7">
            <label for="" class="form-label">
                <h4>
                Amount
                </h4>
                </label>
            <input type="email" class="form-control form-control-lg" id="" placeholder="$15,000"/>
            </div>

            <div class="my-4 col-md-7">
            <label for="" class="form-label">
                <h4>
                Pay with Card
                </h4>
                </label>
            <input type="email" class="form-control form-control-lg" id="" placeholder="$15,000"/>
            </div>

            <div class="my-4 col-md-7">
            <label for="" class="form-label">
                <h4>
                Card Information
                </h4>
                </label>
            <input type="number" class="form-control form-control-lg" id="" placeholder="Card number"/>
            </div>

            <div class="my-4 col-md-7">
            <input type="date" class="form-control form-control-lg" id="" placeholder=""/>
            </div>

            <div class="my-4 col-md-7">
            <input type="number" class="form-control form-control-lg" id="" placeholder="Cvc"/>
            </div>


            <div class="my-4 col-md-7">
            <label for="" class="form-label">
                <h4>
               Name On Card
                </h4>
                </label>
            <input type="number" class="form-control form-control-lg" id="" placeholder="Name"/>
            </div>

            <div class="my-4 col-md-7">
            <label for="" class="form-label">
                <h4>
              Country/Region
                </h4>
                </label>
            <input type="number" class="form-control form-control-lg" id="" placeholder="Card number"/>
            </div>

            <div>
                <button className=' btn btn_green px-5 rounded-pill'>
                        Pay
                </button>
            </div>

            </div>

        </div>
        </div>
  )
}
