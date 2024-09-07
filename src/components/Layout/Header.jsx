import React from "react";

const Header = () => {
  return (
    <div className="ms-5">
      <nav className="navbar navbar-expand-lg bg-white d-flex justify-content-between">
        <div className="container-fluid">
          <img
            className="img-fluid me-3"
            src="public\IMG\logo-white.png"
            alt="sorry"
          />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

              <li class="nav-item dropdown">
                <a
                  class="nav-link fw-bold ms-3 me-3 active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Training
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex me-3 ">
          <button
            type="button"
            className="btn btn-light text-danger fw-bolder me-2"
          >
            LogIn
          </button>
          <button type="button" className="btn btn-danger fw-bolder me-1">
            SignUp
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
