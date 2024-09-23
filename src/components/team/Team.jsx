import React from "react";

const Team = () => {
  return (
    <div className="bg-body-secondary pb-5 pt-5">
      <p style={{ color: "#E02A65" }} className="text-center mt-5 fw-bold">
        IT'S TIME TO START RIGHT
      </p>
      <h1 className="text-center text-black mb-5">
        Transform the way you manage <br /> your inventory
      </h1>

      <div className="row container m-auto">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 d-flex flex-column">
            <div className="card-body p-5">
              <i className="bi bi-pencil-square fw-bold fs-1"></i>
              <h5 className="card-title fw-bold">Sell more with bundles</h5>
              <p className="card-text flex-grow-1">
                Sort items, create appealing price offers, and manage your
                production line with item groups and product bundles.
              </p>
              <a className="text-decoration-none fs-5 mt-auto" href="#">
                Learn More...
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 d-flex flex-column">
            <div className="card-body p-5">
              <i className="bi bi-bar-chart-line-fill fw-bold fs-1"></i>
              <h5 className="card-title fw-bold">Handle sales spikes</h5>
              <p className="card-text flex-grow-1">
                From dropshipping to backordering, handle product shortages,
                maintain a healthy cash flow, and never lose out on a sale.
              </p>
              <a className="text-decoration-none fs-5 mt-auto" href="#">
                Learn More...
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 d-flex flex-column">
            <div className="card-body p-5">
              <i className="bi bi-house-fill fw-bold fs-1"></i>
              <h5 className="card-title fw-bold">Control warehouses</h5>
              <p className="card-text flex-grow-1">
                Manage your stock across multiple warehouse locations, transfer
                items within warehouses, and generate warehouse-specific
                reports.
              </p>
              <a className="text-decoration-none fs-5 mt-auto" href="#">
                Learn More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
