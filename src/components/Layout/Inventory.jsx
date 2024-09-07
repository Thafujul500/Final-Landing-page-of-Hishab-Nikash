import React from "react";

const Inventory = () => {
  return (
    <div className="bg-danger p-5 ">
      <div className="container p-5">
        <h6 className="mt-5 text-warning fw-bold">WITH YOU EVERYWHERE</h6>
        <h1 className="text-white">
          Inventory apps to <br /> close deals on the go
        </h1>
        <div className="mt-3 w-25 h-25">
          <img
            className="w-50 h-50 img-fluid"
            src="public\IMG\playstore-badge.svg"
            alt="sorry"
          />
          <img
            className="w-50 h-50 img-fluid"
            src="public\IMG\appstore.svg"
            alt="sorry"
          />
        </div>
        <div className="mt-4 mb-4">
          <a className="text-decoration-none text-white" href="#">
            Check out our mobile apps ...
          </a>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
