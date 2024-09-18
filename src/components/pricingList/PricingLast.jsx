import React from "react";

const PricingList = () => {
  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-lg-4 h-25 bg-danger-subtle">
          <img
            style={{ width: "100%", height: "200px" }}
            className="img-fluid"
            src="public\IMG\sheeping.png"
            alt="sorry"
          />
        </div>
        <div className="col-lg-8 ps-5">
          <div className="row pt-5">
            <div className="col-lg-4">
              <h4 className="text-black">FREE</h4>
              <h2 className="text-black fs-1 fw-bold">$ 0</h2>
              <p>per organization / month</p>
            </div>
            <div className="col-lg-4">
              <p>50 orders / month</p>
              <p>1 user</p>
              <p>1 warehouse</p>
            </div>
            <div className="col-lg-4">
              <button className="btn btn-outline-danger mt-5 mb-1 text-capitalize fw-bold">
                get started
              </button>
            </div>
          </div>
        </div>
        <a href="#" className="text-decoration-none text-center mt-5 mb-5">
          Check out our pricing page for complete details ...
        </a>
      </div>
    </div>
  );
};

export default PricingList;
