import React from "react";

const ErrorPage = () => {
  return (
    <div
      className="flex justify-center flex-col items-cente wr mt-24"
    //   style={{
    //     backgroundImage: "url(../../../../../../public/imges/error-bg.png)",
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //   }}
    >
      <div className="flex justify-center  items-center">
        <img className="" src="../../../public/imges/error.png" alt="" />
      </div>
      <p className="font-bold text-center">
        We have almost 15+ years of experiences to <br /> helping consulting
        services and give business solution
      </p>
      <div className="flex justify-center">
        <a
          rel="noopener noreferrer"
          href="#"
          className="mt-10 w-60 px-8 py-3 text-lg font-semibold rounded main-btn text-white hover:text-gray-900"
        >
          Back To Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
