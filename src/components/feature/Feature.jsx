import React from "react";
import firstDashboard from "../../assets/images/first_dashboard.png";
import secondDashboard from "../../assets/images/second_dashboard.png";

const Feature = () => {
  return (
    <div className="container pb-5">
      <p style={{ color: "#E02A65" }} className="text-center fw-bold">
        YOUR ORDERS AT ONE PLACE
      </p>
      <h1 className="fw-bold fs-1 text-center text-black">
        Comprehensive Business Management Suite{" "}
      </h1>
      <div className="row mt-5 ">
        <div className="col-lg-6">
          <img
            className="img-fluid h-75"
            // src="public\IMG\main_photo.jpg"
            src={firstDashboard}
            alt="sorry"
          />
        </div>

        <div className="col-lg-6 ps-md-5 mt-4 mt-lg-0">
          <h1 className="fw-bold fs-3 text-center text-md-start mb-3">
            Smart Dashboard for Inventory & Financial Management{" "}
          </h1>

          <ul className="list-unstyled fs-5 text-start text-md-start text-lg-start">
            <li className="mb-2">
              <i className="fas fa-chart-line me-2"></i> Smart and Informative
              Dashboard
            </li>
            <li className="mb-2">
              <i className="fas fa-th me-2"></i> Product Catalog and Category
            </li>
            <li className="mb-2">
              <i className="fas fa-box me-2"></i> Stock Management
            </li>
            <li className="mb-2">
              <i className="fas fa-barcode me-2"></i> Barcode Generator
            </li>
            <li className="mb-2">
              <i className="fas fa-user-friends me-2"></i> Customer Information
              and Ledger
            </li>
            <li className="mb-2">
              <i className="fas fa-user-tie me-2"></i> Supplier Information and
              Ledger
            </li>
            <li className="mb-2">
              <i className="fas fa-shopping-cart me-2"></i> Purchase, Sales
              Account
            </li>
            <li className="mb-2">
              <i className="fas fa-calendar-alt me-2"></i> Equated Monthly
              Installment
            </li>
            <li>
              <i className="fas fa-chart-pie me-2"></i> Income-Expense and
              Profit-Loss Account
            </li>
          </ul>

          <div className="text-center text-md-start">
            <a className="text-decoration-none fs-6 fw-bold" href="#">
              Learn more...
            </a>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 mb-4">
          <h1 className="fw-bold fs-3 text-center text-lg-start">
            Point of Sale Solution for Multi-Store Management
          </h1>

          <ul className="list-unstyled fs-5 text-start text-md-start text-lg-start">
            <li className="mb-2">
              <i className="fas fa-print me-2"></i> Point of Sale Printing
            </li>
            <li className="mb-2">
              <i className="fas fa-store me-2"></i> Multiple Store Management
            </li>
            <li className="mb-2">
              <i className="fas fa-sms me-2"></i> Customized SMS Panel
            </li>
            <li className="mb-2">
              <i className="fas fa-file-alt me-2"></i> Quotation (Purchase-Sale)
            </li>
            <li className="mb-2">
              <i className="fas fa-undo me-2"></i> Return (Purchase-Sale)
            </li>
            <li className="mb-2">
              <i className="fas fa-money-bill-alt me-2"></i> Cash Book
            </li>
            <li className="mb-2">
              <i className="fas fa-users me-2"></i> Human Resource Management
            </li>
            <li className="mb-2">
              <i className="fas fa-user-lock me-2"></i> Permission-Based
              Multiple User
            </li>
            <li>
              <i className="fas fa-chart-line me-2"></i> Daily, Monthly, and
              Annual Graph Charts
            </li>
          </ul>

          <a className="text-decoration-none fs-6 fw-bold" href="#">
            Learn more...
          </a>
        </div>
        <div className="col-lg-6 col-md-12 text-center">
          <img
            className="img-fluid  h-75"
            // src="public\IMG\main_photo2.png"
            src={secondDashboard}
            alt="sorry"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
