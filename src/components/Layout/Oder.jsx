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
        <div className="col-lg-6 ps-5">
          <h1 className="fw-bold fs-3">Multichannel selling made easy</h1>
          <p className="fs-5">
            Get the multichannel advantage by establishing your presence across
            digital storefronts. Sell on multiple channels and track all your
            sales within Zoho Inventory.
          </p>
          <p className="fs-5">Integrate multiple sales channels</p>
          <p className="fs-5">Sync stock effortlessly</p>
          <p className="fs-5">Handle multiple currencies</p>
          <p className="fs-5">Get paid online</p>
          <p className="fs-5">Measure channel performance</p>
          <a className="text-decoration-none fs-5" href="#">
            Learn more...
          </a>
        </div>
      </div>
      <div className="row mt-5">
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
      </div>
    </div>
  );
};

export default Oder;
