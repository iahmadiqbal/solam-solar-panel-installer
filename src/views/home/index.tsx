import React from "react";
import SolarHero from "../../components/home";
import AboutIntro from "../../components/home/AboutIntro";
import AboutServicesSection from "../../components/home/AboutServicesSection";
import ExitSection from "../../components/home/ExitSection";

const Home: React.FC = () => {
  return (
    <>
      <SolarHero />
      <AboutIntro />
      <AboutServicesSection />
      <ExitSection />
    </>
  );
};

export default Home;
