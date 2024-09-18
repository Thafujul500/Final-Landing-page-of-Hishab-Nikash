import React from "react";

const Logo = () => {
  return (
    <div className="container text-center mt-4 mb-4">
      <p className="text-center text-dark fw-bold mt-5">AS RECOGNIZED BY</p>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card">
            <img
              src="public/IMG/logo_1.png"
              className="card-img-top"
              alt="Logo 1"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card">
            <img
              src="public/IMG/logo_2.png"
              className="card-img-top"
              alt="Logo 2"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card">
            <img
              src="public/IMG/logo_3.png"
              className="card-img-top"
              alt="Logo 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
