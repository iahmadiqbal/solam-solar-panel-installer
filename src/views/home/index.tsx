import React from "react";
import SolarHero from "../../components/home";
import AboutIntro from "../../components/home/AboutIntro";
import AboutServicesSection from "../../components/home/AboutServicesSection";

const Home: React.FC = () => {
  return (
    <>
      <SolarHero />
      <AboutIntro />
      <AboutServicesSection />
    </>
  );
};

export default Home;
