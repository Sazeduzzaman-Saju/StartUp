import React from "react";
import "./Blob.css"; // Make sure to import your CSS file

const Blob = () => {
  return (
    <div className="relative">
      <div className="blob-animation"></div>
      <div className="flex items-center justify-center mt-0">
        <img
          src="../../../../public/imges/hero-img.jpg"
          alt=""
          className="object-cover banner-image"
        />
      </div>
    </div>
  );
};

export default Blob;
