import React from "react";
import heroImage from "../../assets/images/final_banner.svg";

const Hero = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-6 mt-md-5 mb-5">
            <p className="fw-bold text-start text-md-start mt-md-5 mt-3 text-black display-3 text-center text-md-start">
              Simplify Your Finances with Ease and Efficiency
            </p>
            <p className="mt-3 text-justify md:text-start lg:text-start">
              Managing your business finances can often be a complex and
              time-consuming task. With Smart Accounts, you can streamline all
              your accounting needs in one place. From tracking income and
              expenses to generating financial reports, our software makes
              managing your accounts easier and more efficient. Whether you're a
              small business owner or managing personal finances, Smart Accounts
              provides real-time insights, enabling you to make informed
              decisions and maintain a healthy cash flow. Experience the ease of
              automated calculations, tax preparation, and secure data storage
              with our user-friendly interface.
            </p>

            <div className="text-center d-flex flex-column flex-sm-row justify-content-center">
              <button
                style={{ backgroundColor: "#E02A65" }}
                className="btn fw-bold text-white fs-6 mb-2 mb-sm-0 me-sm-3 p-3 text-uppercase w-100 w-sm-auto"
              >
                Merchant login
              </button>
              <button
                style={{ color: "#E02A65" }}
                className="btn btn-light fw-bold fs-6 p-3 text-uppercase w-100 w-sm-auto"
              >
                Client login
              </button>
            </div>
          </div>
          <div className="col-lg-6  mt-md-5">
            <img src={heroImage} className="img-fluid" alt="sorry" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
