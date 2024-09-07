import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary-subtle pt-5">
      <div className="container ">
        <div className="row pt-5 pb-5">
          <div className="col-lg-3">
            <h1 className="fs-5 mb-4 fw-bold text-uppercase">About</h1>
            <p>About</p>
            <p>Features</p>
            <p>Package</p>
            <p>Features Details</p>
          </div>
          <div className="col-lg-3">
            <h1 className="fs-5 mb-4 fw-bold text-uppercase">
              More <span className="text-primary">information</span>{" "}
            </h1>
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Delivery Policy</p>
            <p>Terms & Conditions</p>
            <p>Return and Refund Policy</p>
            <p className="bg-warning-subtle d-inline p-1 fw-bold">
              Make A Payment
            </p>
          </div>
          <div className="col-lg-3">
            <h1 className="fs-5 fw-bold text-uppercase mb-4">Contact Us</h1>
            <p>Email: siliconisp@gmail.com</p>
            <p>Mobile: 01896488498</p>
            <p>
              Address: House# 105, Road# 13A, Banani, Dhaka, Bangladesh Branch:
              Holding - 569 , Kobi Golam Mostofa Road , Talaimari , Kazla ,
              Boalia, Rajshahi - 6204
            </p>
          </div>
          <div className="col-lg-3">
            <h1 className="fs-5 fw-bold mb-4 text-uppercase">
              silicon <span className="text-primary">isp</span>{" "}
            </h1>
            <p>
              Your Complete ISP Billing and <br /> Management Software
            </p>

            <div className="d-flex justify-content-center">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-envelope"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="You Email Address"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="img-fluid mb-5"
          src="public\IMG\payment.png"
          alt="sorry"
        />
      </div>
    </div>
  );
};

export default Footer;
