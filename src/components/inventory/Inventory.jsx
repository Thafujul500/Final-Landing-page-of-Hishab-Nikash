import React from "react";

const Inventory = () => {
  return (
    <div className="bg-danger p-3 p-md-5">
      <div className="container text-center text-md-start p-3 p-md-5">
        <h6 className="mt-4 mt-md-5 text-warning fw-bold">
          WITH YOU EVERYWHERE
        </h6>
        <h1 className="text-white">
          Inventory apps to <br className="d-none d-md-block" />
          close deals on the go
        </h1>

        <div className="mt-3 d-flex justify-content-center justify-content-md-start">
          <img
            className="w-25 img-fluid me-3 mb-2"
            src="public/IMG/playstore-badge.svg"
            alt="Playstore"
          />
          <img
            className="w-25   img-fluid mb-2"
            src="public/IMG/appstore.svg"
            alt="Appstore"
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
