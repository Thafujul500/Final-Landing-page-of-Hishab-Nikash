import React from "react";

const Schedule = () => {
  return (
    <div className="container text-center pb-5 pt-5 mb-5">
      <div className="mb-5">
        <h6 style={{ color: "#E02A65" }} className="fw-bold">
          FOR A FULFILLING EXPERIENCE
        </h6>
        <h1 className="text-black fs-4 fs-md-5">
          Choose from the best shipping carriers <br /> around the globe
        </h1>
      </div>

      <div className="bg-danger-subtle text-center rounded-3 p-4 p-md-5">
        <h1 className="text-black fs-3 fs-md-1 mt-3 mt-md-5">
          Start growing with <br /> Zoho Inventory today
        </h1>
        <button
          style={{ backgroundColor: "#E02A65" }}
          className="btn btn-danger mt-4 mt-md-5 fs-6 text-uppercase fw-bold"
        >
          Schedule a Demo
        </button>
        <div className="row d-flex flex-column flex-md-row justify-content-center mt-4 mt-md-5">
          <div className="col-12 col-md-auto text-center">
            <p className="m-2 m-md-3 fw-bold">14-day free trial.</p>
          </div>
          <div className="col-12 col-md-auto text-center">
            <p className="m-2 m-md-3 fw-bold">No credit card required.</p>
          </div>
          <div className="col-12 col-md-auto text-center">
            <p className="m-2 m-md-3 fw-bold">Cancel anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
