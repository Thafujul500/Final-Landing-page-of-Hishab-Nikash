import React from "react";

const Manuber = () => {
  return (
    <div className="d-flex justify-content-end bg-danger-subtle ">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid d-flex justify-content-end">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mt-2">
              <li className="nav-item ">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
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
              <li className="nav-item me-3 ms-3">
                <a className="nav-link me-3 ms-3 active" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-3 ms-3 active" href="#">
                  Customers
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link active me-3 ms-3 dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Integrations
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

              <li className="nav-item">
                <a className="nav-link me-3 ms-3 active" href="#">
                  Resources
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link active  me-3 ms-3 dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Manuber;
