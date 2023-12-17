import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ClientSection from "./ClientSection/ClientSection";
import AboutSection from "./AboutSection/AboutSection";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <section className="max-w-full mx-auto">
      <div
        style={{
          backgroundImage: "url(../../../../../../public/imges/hero-bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <HeroSection></HeroSection>
          <ClientSection></ClientSection>
          <AboutSection></AboutSection>
          <WhatWeDo></WhatWeDo>
        </div>
      </div>
    </section>
  );
};

export default Home;
