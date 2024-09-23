import React from "react";

const Accordion = () => {
  return (
    <div className="bg-primary-subtle pb-5 pt-5">
      <div className="container">
        <div className="row mt-md-5">
          <div className="col-lg-6 col-md-12 text-center text-lg-start">
            <h3 style={{ color: "#E02A65" }} className="fs-5 fw-bold">
              WHY ZOHO INVENTORY
            </h3>
            <h1 className="text-black mb-4">
              It's flexible. It's extensible. It's
              <br className="d-none d-lg-block" />
              made to work with your needs.
            </h1>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item mb-4">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h3 className="text-body-emphasistext-black">
                      <i class="fa-solid fa-pen me-3"></i>
                      Personalized workflows
                    </h3>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the accordion-flush class. This is the first
                    item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-4 ">
                <h2 class="accordion-header ">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <h3 className="text-body-emphasistext-black">
                      <i class="fa-solid fa-envelope me-3"></i>
                      Custom updates
                    </h3>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the accordion-flush class. This is the second
                    item's accordion body. Let's imagine this being filled with
                    some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item ">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <h3 className="text-body-emphasistext-black">
                      {" "}
                      <i class="fa-solid fa-book-atlas me-3"></i>Webhooks
                    </h3>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate theaccordion-flush class. This is the third
                    item's accordion body. Nothing more exciting happening here
                    in terms of content, but just filling up the space to make
                    it look, at least at first glance, a bit more representative
                    of how this would look in a real-world application.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ps-lg-5 mt-5 text-center">
            <img
              className="img-fluid "
              src="public/IMG/zoho.png"
              // src={inventory}
              alt="sorry"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
