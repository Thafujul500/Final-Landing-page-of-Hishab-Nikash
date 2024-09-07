import React from "react";

const Pricing = () => {
  return (
    <div className="bg-body-tertiary">
      <div className="container p-5">
        <h6 className="mt-5 text-danger fw-bold">GET STARTED</h6>

        <div className="d-flex justify-content-between">
          <h1 className="text-black fw-bold">Simple pricing. No surprises.</h1>
          <div className="form-check form-switch d-flex justify-content-center align-items-center ">
            <label
              className="form-check-label text-danger fs-5 fw-bold"
              for="flexSwitchCheckChecked"
            >
              Monthly
            </label>
            <input
              className="form-check-input fs-3 me-3 ms-3 "
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

        <div className="row container m-auto mt-5 ">
          <div className="col-lg-3">
            <div className="card h-100 p-3">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">STANDARD</h5>
                <h1 className="card-title fw-bold">$ 39</h1>
                <p className="card-text">
                  per organization / month billed monthly
                </p>
                <button className="btn btn-outline-danger  mb-1 text-capitalize fw-bold">
                  get started
                </button>
                <p>500 orders / month</p>
                <p>2 users</p>
                <p>1 warehouse</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100 p-3">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">PROFESSIONAL</h5>
                <h1 className="card-title fw-bold">$ 99</h1>
                <p className="card-text">
                  per organization / month billed monthly
                </p>
                <button className="btn btn-outline-danger  mb-1 text-capitalize fw-bold">
                  get started
                </button>
                <p>3000 orders / month</p>
                <p>2 users</p>
                <p>2 warehouses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card bg-dark text-white h-100 p-3">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">PREMIUM</h5>
                <h1 className="card-title fw-bold">$ 159</h1>
                <p className="card-text">
                  per organization / month billed monthly
                </p>
                <button className="btn btn-outline-danger  mb-1 text-capitalize fw-bold">
                  get started
                </button>
                <p>7500 orders / month</p>
                <p>2 users</p>
                <p>3 warehouses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card h-100 p-3">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">ENTERPRISE</h5>
                <h1 className="card-title fw-bold">$ 299</h1>
                <p className="card-text">
                  per organization / month billed monthly
                </p>
                <button className="btn btn-outline-danger  mb-1 text-capitalize fw-bold">
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
  );
};

export default Pricing;
