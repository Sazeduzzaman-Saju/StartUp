import React from "react";
import Video from "./Video";

const TwoColumnSection = () => {
  return (
    <div className="container-fluid mx-auto py-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {/* Left Column */}
        <div
          className="p-16"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          <div className="flex w-48 items-center bg-white shadow-md p-2 rounded-full mb-10">
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
          <h2 className="text-5xl text-white font-bold mb-10">
            We Provide the Best <br /> Services for Your Business
          </h2>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded main-btn text-white hover:text-gray-900"
            >
              See All Services
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div style={{ backgroundColor: "red" }}>
         <Video></Video>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
