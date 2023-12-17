import React from "react";

const ClientSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10">
        <h1 className="text-center text-3xl pt-24 font-bold capitalize">
          Take care more than <span className="main_color">1k+</span> Clients
        </h1>
      </div>
      <div className="pt-16 pb-20  flex items-center justify-between">
        <a href="" className="hover:shadow-lg p-2 hover:rounded-lg">
          <img src="../../../../public/imges/clients/layers.png" alt="" />
        </a>
        <a href="" className="hover:shadow-lg p-2 hover:rounded-lg">
          <img src="../../../../public/imges/clients/sis.png" alt="" />
        </a>
        <a href="" className="hover:shadow-lg p-2 hover:rounded-lg">
          <img src="../../../../public/imges/clients/hour.png" alt="" />
        </a>
        <a href="" className="hover:shadow-lg p-2 hover:rounded-lg">
          <img src="../../../../public/imges/clients/command.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default ClientSection;
