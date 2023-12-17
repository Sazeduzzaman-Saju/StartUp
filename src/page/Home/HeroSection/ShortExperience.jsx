import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ShortExperience = () => {
  return (
    <div className="grid grid-cols-12 gap-2 max-w-screen-xl mx-auto">
      <div className="col-span-6 p-4">
        <div>
          <h1 className="text-3xl font-bold">18 Year Experience</h1>
          <p className="pt-6 text-justify text-gray-400">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            hendrerit orci, ut malesuada nulla. Duis accumsan massa quis
            consequat fringilla. consectetur adipiscing elit. Nam ac hendrerit
            orci, ut malesuada nulla. Duis accumsan massa quis consequat
            fringilla malesuada nulla. Duis accumsan massa quis conseqssssuat”
          </p>
        </div>
        <div className="flex justify-start items-center mt-10">
          <div className="pe-3">
            <img
              className="rounded-full w-16 ring-2 shadow-emerald-50"
              width={{ width: "50px" }}
              src="../../../../public/imges/profile.jpg"
              alt=""
            />
          </div>
          <div>
            <h5 className="main_color font-bold">John Doe</h5>
            <p className="font-thin text-sm">CEO of Startup Agency</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 p-4">
        <div className="bg-white p-4 shadow-md expe-card">
          <div className="mb-5">
            <img
              className=""
              style={{ width: "50px" }}
              src="../../../../public/imges/people.svg"
              alt=""
            />
          </div>
          <h4 className="text-2xl font-bold pt-5 pb-4 ">
            Why Better <br /> Choose Us?
          </h4>
          <div className="flex items-center justify-end pt-10 expe-link">
            <a href="#" className="flex items-center">
              About <FaArrowRight className="ms-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-3 p-4">
        <div className="bg-white p-4 shadow-md expe-card">
          <div className="mb-5">
            <img
              style={{ width: "50px" }}
              src="../../../../public/imges/icons1.png"
              alt=""
            />
          </div>
          <h4 className="text-2xl font-bold pt-5 pb-4 ">
            Why Better <br /> Choose Us?
          </h4>
          <div className="flex items-center justify-end pt-10">
            <a href="#" className="flex items-center">
              About <FaArrowRight className="ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortExperience;
