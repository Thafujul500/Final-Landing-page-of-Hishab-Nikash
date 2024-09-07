import React from "react";

const Zoho = () => {
  return (
    <div className="bg-dark-subtle pb-5  pt-5">
      <div className="container">
        <div className="row mt-5  ">
          <div className="col-lg-6">
            <h3 className="text-danger fs-5">WHY ZOHO INVENTORY</h3>
            <h1 className="text-black mb-5">
              It's flexible. It's extensible. It's <br /> made to work with your
              needs.
            </h1>
            <div className="d-flex bg-white p-3 mt-3 rounded rounded-2">
              <i className="bi bi-pen-fill fs-3 me-3 "></i>
              <h3>Personalized workflows</h3>
            </div>
            <div className="d-flex bg-white p-3 mt-3 rounded rounded-2">
              <i class="bi bi-envelope-fill fs-3 me-3"></i>
              <h3> Custom updatess</h3>
            </div>
            <div className="d-flex bg-white p-3 mt-3 rounded rounded-2">
              <i class="bi bi-chat-left-dots-fill fs-3 me-3"></i>
              <h3> Webhooks</h3>
            </div>
          </div>
          <div className="col-lg-6 ps-5 mt-5 ">
            <img
              className="img-fluid ps-5 mt-5"
              src="public\IMG\zoho.png"
              alt="sorry"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zoho;
