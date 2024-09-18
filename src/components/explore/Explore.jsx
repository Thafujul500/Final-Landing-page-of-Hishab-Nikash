import React from "react";

const Explore = () => {
  return (
    <div className="bg-dark pb-5">
      <div className="container pt-5 m-auto">
        <h6 className="mt-5 text-warning fw-bold text-center text-md-start">
          YOUR RELIABLE INVENTORY MANAGEMENT SOFTWARE
        </h6>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start">
          <h1 className="text-white mb-4 mb-lg-0 text-center text-lg-start">
            Thousands of customers <br className="d-none d-lg-block" /> prefer
            Zoho Inventory
          </h1>
          <button className="btn btn-danger text-uppercase">
            Explore case studies
          </button>
        </div>

        <div className="row pb-5">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded-3 mt-5 h-100 w-100 border border-light">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators position-relative">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                <div className="carousel-inner text-center">
                  <div className="carousel-item active">
                    <img
                      src="public\IMG\carosal_1\image.jpg"
                      className="d-block img-fluid h-100 w-100"
                      alt="Slide 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="public\IMG\carosal_2\image.jpg"
                      className="d-block img-fluid  h-100 w-100"
                      alt="Slide 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="public\IMG\carosal_3\Image.jpg"
                      className="d-block img-fluid  h-100 w-100"
                      alt="Slide 3"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
