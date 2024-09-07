import React from "react";

const RedManuber = () => {
  return (
    <div className="bg-danger parent pt-5 pb-5 ">
      <div>
        <div className="row container m-auto w-75  pb-5">
          <div className="col-lg-6 mb-5  pb-5">
            <h6 className="mt-5 text-warning fw-bold">AT YOUR FINGERTIPS</h6>
            <h1 className="text-white">
              Know your inventory and <br /> grow your business
            </h1>
          </div>
          <div className="col-lg-6 mt-5">
            <button
              type="button"
              className="btn btn-light bg-dark text-white p-3 border-0 mt-5 fw-bolder me-2"
            >
              SIGN UP FOR FREE
            </button>
            <button
              type="button"
              className="btn btn-danger text-dark bg-white p-3 fw-bolder me-1 mt-5"
            >
              EXPLORE DEMO ACCOUNT
            </button>
          </div>
        </div>
      </div>

      {/* clild */}
    </div>
  );
};

export default RedManuber;
