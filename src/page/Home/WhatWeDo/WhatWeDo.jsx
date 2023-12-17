import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import ServicesCards from "./ServicesCards/ServicesCards";

const WhatWeDo = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid grid-cols-12 gap-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
        {/* Information column (col-7) */}
        <div className="col-span-6 flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
          <div className="flex w-48 items-center bg-white shadow-md p-2 rounded-full">
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
            <h6 className="text-black">WHAT WE DO</h6>
          </div>
          <h1 className="text-4xl w-96 font-bold leading-none sm:text-4xl pt-10 pb-5 capitalize drop-shadow-xl">
          We do creative <span className="main_color">services</span> for your business needs 
          </h1>
          <img className="w-96 mt-3" src="../../../../public/imges/whatwedo.jpg" alt="" />
          <p className="mt-6 mb-8 text-lg sm:mb-12 text-justify text-slate-400">
          You will always get the best services from us!
          </p>
          <div className="pb-10">
            <p className="flex items-center">
              <BiSolidBadgeCheck className="pe-2" size={30} color="purple" />{" "}
              Branding and Marketing Solution
            </p>
            <p className="flex items-center">
              <BiSolidBadgeCheck className="pe-2" size={30} color="purple" />{" "}
              Modern Technology
            </p>
            <p className="flex items-center">
              <BiSolidBadgeCheck className="pe-2" size={30} color="purple" />{" "}
              Support 24/7 Solution
            </p>
          </div>
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
        {/* Image column (col-5) */}
        <div className="col-span-6 flex items-center justify-center">
          {/* Service Column Start */}
          <ServicesCards/>
          {/* Service Column End */}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
