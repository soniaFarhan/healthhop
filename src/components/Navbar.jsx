import React from 'react'

export const Navbar = () => {
  return (
    <div>
        {/* <nav
        className=" site navbar navbar-expand-lg navbar-light bg-light fixed-top  w-100 custom-navbar navbar-flow text-black"
        // style={{ backgroundColor: "#000000" }}
      >
        <div className={` container-fluid mx-sm-5 ${"me-sm-0"}`}>
          <Link className="navbar-brand" to="/">
            <div style={{width:"6rem"}}>
            <img
              src={require("../assets/HighRes_Icon-And-Name.jpg")}
              className="img-fluid logo_img_size"
              />
              </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
           <i className="bi bi-list"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarColor01">

            <div class=" my-component d-flex justify-content-around w-100">
              <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-flex gap-5">
                <li style={{ paddingY: "0rem" }} className="nav-item homee ">
                  <NavLink
                    style={{ paddingY: 2,fontSize:'16px' }}
                    className="nav-link "
                    exact
                    activeClassName="active"
                    end="/"
                    to="/"
                    title="Home"
                  >
                    Home
                  </NavLink>
                </li>

                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link"
                    style={{ fontSize:'16px' }}
                    exact
                    activeClassName="active"
                    to="/facilities"
                    title="Facilities"
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li style={{ paddingY: "0rem" }} className="nav-item homee">
                  <NavLink
                    className="nav-link white_space"
                    exact
                    activeClassName="active"
                    to="/profession"
                    title="Healthcare"
                    style={{ fontSize:'16px' }}
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
              </div>
            </div>

            <div className=" row justify-content-end   mx-1">
                  <div
                    className={`col-lg-12 d-flex justify-content-between align-items-center mb-3 mb-lg-0 text-white gap-2`}
                  >
                    <Button
                      // onClick={() => dispatch(logout())}
                      variant="outlined"
                      title="Log out"
                    >
                      <MedicalServicesIcon/>
                      Mediacl Provider
                    </Button>

                    <Button
                      // onClick={() => dispatch(logout())}
                      variant="outlined"
                      title="Log out"
                    >
                      <LoginIcon/>
                      Patient login
                    </Button>
                  </div>
            </div>

          </div>
        </div>
      </nav> */}

      {/* <Navbar/> */}

    </div>
  )
}
