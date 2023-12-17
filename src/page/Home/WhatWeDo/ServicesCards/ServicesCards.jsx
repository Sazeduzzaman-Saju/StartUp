import React from "react";
import "./ServiceCards.css";
import { FaChevronRight } from "react-icons/fa";

const ServicesCards = () => {
  return (
    <div>
      {/* First Card */}
      <div
        className="card bg-base-100 shadow-md mb-10"
        style={{ backgroundColor: "#DBFBD6" }}
      >
        <div className="card-body">
          <div className="flex items-center">
            {/* Card Details */}
            <div className="w-80">
              <h1 className="card-title text-xl w-56">
                Illustration & Graphic Design
              </h1>
              <div className="flex justify-start items-center pt-10">
                <a href="" className="flex items-center service-action">
                  <p>FIND OUT MORE</p>
                  <button
                    className="service-btn"
                    style={{ backgroundColor: "rgb(145 245 130)" }}
                  >
                    <FaChevronRight />
                  </button>
                </a>
              </div>
            </div>
            {/* Card Image */}
            <div className="">
              <img
                className=""
                src="../../../../../public/imges/design-tools.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second Card */}
      <div
        className="card bg-base-100 shadow-md mb-10"
        style={{ backgroundColor: "#DAEFFE" }}
      >
        <div className="card-body">
          <div className="flex items-center">
            {/* Card Details */}
            <div className="w-80">
              <h1 className="card-title text-xl w-56">Web Development</h1>
              <div className="flex justify-start items-center pt-10">
                <a href="" className="flex items-center service-action">
                  <p>FIND OUT MORE</p>
                  <button
                    className="service-btn"
                    style={{ backgroundColor: "rgb(52 113 214)" }}
                  >
                    <FaChevronRight />
                  </button>
                </a>
              </div>
            </div>
            {/* Card Image */}
            <div className="">
              <img
                className=""
                src="../../../../../public/imges/html.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* Third Card */}
      <div
        className="card bg-base-100 shadow-md"
        style={{ backgroundColor: "#FFF8DA" }}
      >
        <div className="card-body">
          <div className="flex items-center">
            {/* Card Details */}
            <div className="w-80">
              <h1 className="card-title text-xl w-56">
                Presentation & Branding Kit
              </h1>
              <div className="flex justify-start items-center pt-10">
                <a href="" className="flex items-center service-action">
                  <p>FIND OUT MORE</p>
                  <button
                    className="service-btn"
                    style={{ backgroundColor: "rgb(219 160 51)" }}
                  >
                    <FaChevronRight />
                  </button>
                </a>
              </div>
            </div>
            {/* Card Image */}
            <div className="">
              <img
                className=""
                src="../../../../../public/imges/personal.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
