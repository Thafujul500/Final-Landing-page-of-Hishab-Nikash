import React from "react";
import headerMainLogo from "../../assets/images/main_logo.png";

const Header = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-white d-flex justify-content-between">
        <div className="container ps-2 pe-2">
          <div className="">
            <img
              src={headerMainLogo}
              alt="sorry"
              width={"100px"}
              className="img-fluid "
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-center text-center">
              <li className="nav-item">
                <a
                  className="nav-link ms-3 me-3 fw-bold active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3 me-3 fw-bold active" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ms-3 me-3 fw-bold active"
                  aria-current="page"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3 me-3 fw-bold active" href="#">
                  Features Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link ms-3 me-3 fw-bold active"
                  aria-current="page"
                  href="#"
                >
                  Package
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-3 me-3 fw-bold active" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <div className="d-lg-none d-flex flex-row align-items-center mt-2 justify-content-center">
              <button
                type="button"
                style={{ color: "#5698D1" }}
                className="btn btn-white  fw-bold me-2 mb-2"
              >
                LogIn
              </button>
              <button
                style={{ backgroundColor: "#5698D1" }}
                type="button"
                className="btn btn-primary fw-bold"
              >
                SignUp
              </button>
            </div>
            {/* Large screens (including tablets): Buttons outside the collapsible navbar */}
            <div className="d-none d-lg-flex me-3">
              <button
                type="button"
                style={{ color: "#5698D1" }}
                className="btn btn-white  fw-bold me-2"
              >
                LogIn
              </button>
              <button
                type="button"
                style={{ backgroundColor: "#5698D1" }}
                className="btn btn-primary fw-bold me-1"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
