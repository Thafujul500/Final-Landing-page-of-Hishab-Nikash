import React from "react";
import image from "../../assets/images/contact--YclQhNs.webp";

const Contract = () => {
  return (
    <div>
      {/* <div className="bg-primary-subtle pb-5 pt-5">
        <div className="container">
          <div className="row mt-md-5">
            <div className="col-lg-6 col-md-12 text-center text-lg-start">
              Contact Us: shunnosoftware@gmail.com shunnoit.com 01321141783 - 88
              272/5, West Agar Gaw, Sher-e-Bangla Nagar, Dhaka-1207 (Head
              Office) 216/1, West Talaimari, Kazla, Boalia, Rajshahi-6204
            </div>
            <div className="col-lg-6 col-md-12 ps-lg-5 mt-5 text-center">
              <img
                className="img-fluid "
                src={image}
                alt="sorry"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-primary-subtle pb-3 pt-3">
        <div className="container">
          <div className="row mt-md-5">
            <div className="col-lg-6 col-md-12 text-center text-lg-start">
              <h2 className="mb-4">Contact Us</h2>
              <p className="mb-3">
                <i className="fas fa-envelope"></i> shunnosoftware@gmail.com
              </p>
              <p className="mb-3">
                <i className="fas fa-globe"></i>{" "}
                <a href="http://shunnoit.com" className="text-decoration-none">
                  shunnoit.com
                </a>
              </p>
              <p className="mb-3">
                <i className="fas fa-phone"></i> 01321141783 - 88
              </p>
              <div className="mt-4">
                <p className="mb-1">
                  <i className="fas fa-map-marker-alt"></i> 272/5, West Agar
                  Gaw,
                </p>
                <p className="mb-1">
                  Sher-e-Bangla Nagar, Dhaka-1207 (Head Office)
                </p>
                <p className="mb-1">
                  <i className="fas fa-map-marker-alt"></i> 216/1, West
                  Talaimari,
                </p>
                <p>Kazla, Boalia, Rajshahi-6204</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ps-lg-5 text-center">
              <img
                className="img-fluid"
                src={image}
                alt="sorry"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
