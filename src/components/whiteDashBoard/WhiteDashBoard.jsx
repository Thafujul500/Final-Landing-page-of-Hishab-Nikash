import React from "react";
import company from "../../assets/images/Business growth-rafiki.svg";
import sortware from "../../assets/images/Software code testing-amico.svg";
import customer from "../../assets/images/Customer feedback-amico.svg";

const WhiteDashBoard = () => {
  return (
    <div className="container rounded-3 custom_position">
      <div className="row shadow-lg">
        <div className="col-lg-4 col-sm-12">
          <div className="text-center">
            <img
              className="text-center w-50 img-fluid"
              src={company}
              alt="sorry"
            />
          </div>
          <div>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sit laborum minima magnam? Odit distinctio sint rem velit
              corporis. Non sapiente, laboriosam vitae quibusdam exercitationem
              atque voluptatum commodi, ex dolor iure ipsa nulla accusamus minus
              dicta recusandae, consectetur soluta. Perspiciatis.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div className="text-center">
            <img
              className="text-center w-50 img-fluid"
              src={sortware}
              alt="sorry"
            />
          </div>
          <div>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sit laborum minima magnam? Odit distinctio sint rem velit
              corporis. Non sapiente, laboriosam vitae quibusdam exercitationem
              atque voluptatum commodi, ex dolor iure ipsa nulla accusamus minus
              dicta recusandae, consectetur soluta. Perspiciatis.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <img
              className="text-center w-50 img-fluid"
              src={customer}
              alt="sorry"
            />
          </div>
          <div>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              sit laborum minima magnam? Odit distinctio sint rem velit
              corporis. Non sapiente, laboriosam vitae quibusdam exercitationem
              atque voluptatum commodi, ex dolor iure ipsa nulla accusamus minus
              dicta recusandae, consectetur soluta. Perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteDashBoard;
