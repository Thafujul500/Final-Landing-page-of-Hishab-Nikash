import React from "react";

const Header = () => {
  return (
    <div className="ms-md-5">
      <nav className="navbar navbar-expand-lg bg-white d-flex justify-content-between">
        <div className="container-fluid">
          <div>
            <img
              className="img-fluid ms-3"
              src="public/IMG/logo-white.png"
              alt="sorry"
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

              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-bold ms-3 me-3 active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Training
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Add buttons inside the navbar for mobile view */}
            <div className="d-lg-none d-flex flex-row align-items-center mt-2 justify-content-center">
              <button
                type="button"
                className="btn btn-light text-danger fw-bolder me-2 mb-2"
              >
                LogIn
              </button>
              <button type="button" className="btn btn-danger fw-bolder">
                SignUp
              </button>
            </div>
          </div>
        </div>

        {/* Keep buttons visible for large screens */}
        <div className="d-none d-lg-flex me-3">
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
