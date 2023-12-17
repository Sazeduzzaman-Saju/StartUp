import React from "react";
import Works from "./Works";

const Portfolio = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-center items-center">
        <div className="w-48 bg-white shadow-md p-2 rounded-full mb-10 flex items-center">
          <div>
            <svg
              className="me-2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle cx="9" cy="9" r="9" fill="#6C60FE" />
            </svg>
          </div>
          <h6 className="text-black">LET’S HIRE US</h6>
        </div>
      </div>
      <h2 className="text-center text-4xl font-bold">
        Complete <span className="main_color">Projects</span>
      </h2>
      <div>
        <Works></Works>
      </div>
    </div>
  );
};

export default Portfolio;
