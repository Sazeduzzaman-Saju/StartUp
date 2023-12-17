import React from "react";
import "./HeroSection.css";
import { FaGoogle, FaStar } from "react-icons/fa";
import Blob from "../../comps/Blob/Blob";
import ShortExperience from "./ShortExperience";

const HeroSection = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left mt-24 ">
          <div className="flex  w-48 items-center bg-white shadow-md p-2 rounded-full">
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
            <h6 className="text-black">PEOPLE TRUST US</h6>
          </div>

          <h1 className="lg:text-5xl font-bold leadi sm:text-5xl mt-8 mb-4">
            We Provide the
            <span className="text-violet-400"> Best Services for</span> Your
            Business
          </h1>
          <p className="mt-4 mb-8 text-lg sm:mb-12">
            We have almost 15+ years of experiences to helping consulting
            services and give business solution
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded main-btn text-white hover:text-gray-900"
            >
              Hire Us
            </a>
            <img
              className="arrow-img"
              src="../../../../public/imges/hero-arrow.png"
              alt
            />
          </div>
          <div className="flex justify-end hero-toast">
            <div className="w-50 google-toaster shadow-md rounded-xl">
              <div className="flex justify-between items-center p-2">
                <div className="pe-2 w-1/3">
                  <FaGoogle size={30} />
                </div>
                <div>
                  <span>Google Review Rating</span>
                </div>
              </div>
              <div className="flex justify-start items-center p-2">
                <div className="pe-10">
                  <FaStar color="yellow" />
                </div>
                <div>
                  <strong className="pe-3">5.0</strong>
                  <span className="text-gray-400">990 Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blob></Blob>
      </div>
      <ShortExperience></ShortExperience>
    </section>
  );
};

export default HeroSection;
