import React from "react";

const Footer = () => {
  return (
    <div className="pt-md-5" style={{ backgroundColor: "#F9BFD0" }}>
      <div className="container">
        <div className="row pt-5 pb-5 justify-content-center">
          <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 text-center text-sm-start">
            <h1 className="fs-5 mb-4 fw-bold text-uppercase">About</h1>
            <p>About</p>
            <p>Features</p>
            <p>Package</p>
            <p>Features Details</p>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 text-center text-sm-start">
            <h1 className="fs-5 mb-4 fw-bold text-uppercase">
              More <span style={{ color: "#E02A65" }}>information</span>
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

          <div className="col-12 col-sm-6 col-md-3 mb-4 mb-md-0 text-center text-sm-start">
            <h1 className="fs-5 fw-bold text-uppercase mb-4">Contact Us</h1>
            <p>Email: siliconisp@gmail.com</p>
            <p>Mobile: 01896488498</p>
            <p>
              Address: House# 105, Road# 13A, Banani, Dhaka, Bangladesh Branch:
              Holding - 569 , Kobi Golam Mostofa Road , Talaimari , Kazla ,
              Boalia, Rajshahi - 6204
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-3 text-center text-sm-start">
            <h1 className="fs-5 fw-bold mb-4 text-uppercase">
              silicon <span style={{ color: "#E02A65" }}>isp</span>
            </h1>
            <p>
              Your Complete ISP Billing and <br /> Management Software
            </p>

            <div className="d-flex justify-content-center">
              <div className="input-group mb-3 mx-3 mx-sm-0">
                {" "}
                <span className="input-group-text" id="basic-addon1">
                  <i
                    style={{ color: "#E02A65" }}
                    className="fa-solid fa-envelope "
                  ></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
        </div>

        <img
          className="img-fluid mb-5"
          src="public/IMG/payment.png"
          alt="Payment"
        />
      </div>
    </div>
  );
};

export default Footer;
