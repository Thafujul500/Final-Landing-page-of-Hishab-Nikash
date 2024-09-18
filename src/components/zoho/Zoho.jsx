import React from "react";

const Zoho = () => {
  return (
    <div className="bg-dark-subtle pb-5 pt-5">
      <div className="container">
        <div className="row mt-md-5">
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <h3 className="text-danger fs-5">WHY ZOHO INVENTORY</h3>
            <h1 className="text-black mb-4">
              It's flexible. It's extensible. It's
              <br className="d-none d-lg-block" />
              made to work with your needs.
            </h1>
            <div className="d-flex bg-white p-3 mt-3 rounded rounded-2 align-items-center">
              <i className="bi bi-pen-fill fs-3 me-3"></i>
              <h3 className="mb-0">Personalized workflows</h3>
            </div>
            <div className="d-flex bg-white p-3 mt-3 rounded rounded-2 align-items-center">
              <i className="bi bi-envelope-fill fs-3 me-3"></i>
              <h3 className="mb-0">Custom updates</h3>
            </div>
            <div className="d-flex bg-white p-3 mt-3 rounded rounded-2 align-items-center">
              <i className="bi bi-chat-left-dots-fill fs-3 me-3"></i>
              <h3 className="mb-0">Webhooks</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ps-lg-5 mt-5 text-center">
            <img
              className="img-fluid mt-4 mt-lg-5"
              src="public/IMG/zoho.png"
              alt="sorry"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zoho;
