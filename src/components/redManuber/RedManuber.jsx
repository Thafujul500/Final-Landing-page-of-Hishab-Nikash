import React from "react";
const RedManuber = () => {
  return (
    <div style={{ backgroundColor: "#E02A65" }} className="parent pt-5 pb-5 ">
      <div>
        <div className="row container m-auto w-75  pb-5">
          <div className="col-lg-6 mb-5  pb-5">
            <h6 className="mt-md-5 text-warning fw-bold">AT YOUR FINGERTIPS</h6>
            <h1 className="text-white">
              Know your inventory and <br /> grow your business
            </h1>
          </div>

          <div className="col-lg-6 mt-md-5">
            <div className="d-md-flex flex-md-row flex-sm-column">
              <button
                type="button"
                className="btn  btn-light bg-dark text-white p-3 border-0 mt-3 w-100 fw-bolder me-md-2 "
                style={{ fontSize: "16px" }}
              >
                SIGN UP FOR FREE
              </button>
              <button
                type="button"
                className="btn btn-danger text-dark bg-white p-3 fw-bolder mt-3 w-100"
                style={{ fontSize: "16px" }}
              >
                EXPLORE DEMO ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedManuber;
