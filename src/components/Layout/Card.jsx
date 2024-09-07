import React from "react";

const Card = () => {
  return (
    <div className="bg-body-secondary pb-5  pt-5">
      <p className="text-center mt-5 fw-bold text-danger">
        IT'S TIME TO START RIGHT
      </p>
      <h1 className="text-center text-black mb-5">
        Transform the way you manage <br /> your inventory
      </h1>
      <div className="row container m-auto w-75 ">
        <div className="col-lg-4">
          <div style={{ height: "300px" }} className="card p-3">
            <div className="card-body">
              <i className="bi bi-pencil-square fw-bold fs-1"></i>
              <h5 className="card-title fw-bold">Sell more with bundlest</h5>
              <p className="card-text">
                Sort items, create appealing price offers, and manage your
                production line with item groups and product bundles.
              </p>
              <a className="text-decoration-none fs-5" href="#">
                Learn More...
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ height: "300px" }} className="card p-3">
            <div className="card-body">
              <i className="bi bi-bar-chart-line-fill fw-bold fs-1"></i>
              <h5 className="card-title fw-bold">Handle sales spikes</h5>
              <p className="card-text">
                From dropshipping to backordering, handle product shortages,
                maintain a healthy cash flow, and never lose out on a sale.
              </p>
              <a className="text-decoration-none fs-5" href="#">
                Learn More...
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div style={{ height: "300px" }} className="card p-3">
            <div className="card-body">
              <i className="bi bi-house-fill fw-bold fs-1"></i>
              <h5 className="card-title fw-bold">Control warehouses</h5>
              <p className="card-text">
                Manage your stock across multiple warehouse locations, transfer
                items within warehouses, and generate warehouse-specific
                reports.
              </p>
              <a className="text-decoration-none fs-5" href="#">
                Learn More...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
