import React from "react";

const Oder = () => {
  return (
    <div className="container pb-5">
      <p className=" text-center text-danger fw-bold">
        YOUR ORDERS AT ONE PLACE
      </p>
      <h1 className="fw-bold fs-1 text-center text-black">
        Everything you need from sales to shipping
      </h1>
      <div className="row mt-5 ">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="public\IMG\main_photo.jpg"
            alt="sorry"
          />
        </div>

        <div className="col-lg-6 ps-md-5 mt-4 mt-lg-0">
          <h1 className="fw-bold fs-2 text-center text-md-start mb-3">
            Multichannel Selling Made Easy
          </h1>

          <p className="fs-5 text-center text-md-start">
            Get the multichannel advantage by establishing your presence across
            digital storefronts. Sell on multiple channels and track all your
            sales within Zoho Inventory.
          </p>
          <ul className="list-unstyled fs-5 text-center text-md-start">
            <li>Integrate multiple sales channels</li>
            <li>Sync stock effortlessly</li>
            <li>Handle multiple currencies</li>
            <li>Get paid online</li>
            <li>Measure channel performance</li>
          </ul>
          <div className="text-center text-md-start">
            <a className="text-decoration-none fs-6 fw-bold" href="#">
              Learn more...
            </a>
          </div>
        </div>
      </div>
      {/* <div className="row mt-5">
        <div className="col-lg-6">
          <h1 className="fw-bold fs-3">
            From packing to tracking, it's all here
          </h1>
          <p className="fs-5">
            Fulfill orders through different sales channels, right from Zoho
            Inventory. Save time in managing shipping and gain customer trust by
            sending instant updates
          </p>
          <p className="fs-5">Visualize item packing with package geometry</p>
          <p className="fs-5">See the status of packages</p>
          <p className="fs-5">Integrate with shipping carriers</p>
          <p className="fs-5">
            Generate real-time carrier rates and shipping labels
          </p>
          <p className="fs-5">Send tracking updates to customers</p>
          <a className="text-decoration-none fs-5" href="#">
            Learn more...
          </a>
        </div>
        <div className="col-lg-6 ps-5">
          <img
            className="img-fluid"
            src="public\IMG\main_photo2.png"
            alt="sorry"
          />
        </div>
      </div> */}
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 mb-4">
          <h1 className="fw-bold fs-3 text-center text-lg-start">
            From packing to tracking, it's all here
          </h1>
          <p className="fs-5 text-center text-lg-start">
            Fulfill orders through different sales channels, right from Zoho
            Inventory. Save time in managing shipping and gain customer trust by
            sending instant updates
          </p>
          <p className="fs-5 text-center text-lg-start">
            Visualize item packing with package geometry
          </p>
          <p className="fs-5 text-center text-lg-start">
            See the status of packages
          </p>
          <p className="fs-5 text-center text-lg-start">
            Integrate with shipping carriers
          </p>
          <p className="fs-5 text-center text-lg-start">
            Generate real-time carrier rates and shipping labels
          </p>
          <p className="fs-5 text-center text-lg-start">
            Send tracking updates to customers
          </p>
          <a
            className="text-decoration-none fs-5 text-center text-lg-start d-block"
            href="#"
          >
            Learn more...
          </a>
        </div>
        <div className="col-lg-6 col-md-12 text-center">
          <img
            className="img-fluid"
            src="public\IMG\main_photo2.png"
            alt="sorry"
          />
        </div>
      </div>
    </div>
  );
};

export default Oder;
