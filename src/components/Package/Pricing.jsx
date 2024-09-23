import React from "react";

const Package = () => {
  return (
    <div className="bg-body-tertiary">
      <div className="container p-3">
        <h6
          style={{ color: "#E02A65" }}
          className="mt-5 text-center text-md-start text-lg-start fw-bold"
        >
          GET STARTED
        </h6>

        <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <h1 className="text-black fw-bold text-center text-sm-start">
            Simple pricing. No surprises.
          </h1>
          <div className="form-check form-switch d-flex justify-content-center align-items-center mt-3 mt-sm-0">
            <label
              className="form-check-label fs-5 fw-bold"
              for="flexSwitchCheckChecked"
              style={{ color: "#E02A65" }}
            >
              Monthly
            </label>
            <input
              className="form-check-input fs-3 me-3 ms-3"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label
              className="form-check-label text-dark fs-5 fw-bold"
              for="flexSwitchCheckChecked"
            >
              Yearly
            </label>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="cards h-100 p-3">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">STANDARD</h5>
                  <h1 className="card-title fw-bold">$ 39</h1>
                  <p className="card-text">
                    per organization / month billed monthly
                  </p>
                  <button className="btn btn-outline-danger mb-2 text-capitalize fw-bold">
                    get started
                  </button>
                  <p>500 orders / month</p>
                  <p>2 users</p>
                  <p>1 warehouse</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="cards h-100 p-3">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">PROFESSIONAL</h5>
                  <h1 className="card-title fw-bold">$ 99</h1>
                  <p className="card-text">
                    per organization / month billed monthly
                  </p>
                  <button className="btn btn-outline-danger mb-2 text-capitalize fw-bold">
                    get started
                  </button>
                  <p>3000 orders / month</p>
                  <p>2 users</p>
                  <p>2 warehouses</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="cards bg-dark text-white h-100 p-4">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">PREMIUM</h5>
                  <h1 className="card-title fw-bold">$ 159</h1>
                  <p className="card-text">
                    per organization / month billed monthly
                  </p>
                  <button className="btn btn-outline-danger mb-2 text-capitalize fw-bold">
                    get started
                  </button>
                  <p>7500 orders / month</p>
                  <p>2 users</p>
                  <p>3 warehouses</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-4">
              <div className="cards h-100 p-3">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">ENTERPRISE</h5>
                  <h1 className="card-title fw-bold">$ 299</h1>
                  <p className="card-text">
                    per organization / month billed monthly
                  </p>
                  <button className="btn btn-outline-danger mb-2 text-capitalize fw-bold">
                    get started
                  </button>
                  <p>15000 orders / month</p>
                  <p>7 users</p>
                  <p>7 warehouses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
