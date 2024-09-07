import React from "react";

const DownManuber = () => {
  return (
    <div className="bg-danger-subtle p-5">
      <div class="container text-center p-5">
        <div class="row">
          <div class="col-lg-6 mt-5 mb-5">
            <h1 className="fw-bold text-start mt-5 fs-1 text-black">
              Your Complete ISP Billing and Management Software
            </h1>
            <p className="mt-3 text-start">
              Silicon ISP is an advanced management and billing solution
              designed specifically for the Internet Service Provider (ISP)
              industry. Our software makes managing your ISP business simple and
              efficient, helping you reduce costs and deliver outstanding
              service to your clients.
            </p>

            <div className=" text-start">
              <button className="btn btn-danger fw-bold me-3 p-3 text-uppercase">
                Merchant login
              </button>
              <button className="btn btn-light text-danger p-3 fw-bold text-uppercase">
                Clint login
              </button>
            </div>
          </div>
          <div class="col-lg-6 mt-5">
            <div className="d-flex flex-row justify-content-around mt-5 ">
              <img
                className="custom_img"
                src="public\IMG\download.png"
                alt="sorry"
              />

              <img
                className="custom_img"
                src="public\IMG\img-6.png"
                alt="sorry"
              />
            </div>
            <div className="">
              <img
                className="smallCard"
                src="public\IMG\smallCard.jpg"
                alt="sorry"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownManuber;
