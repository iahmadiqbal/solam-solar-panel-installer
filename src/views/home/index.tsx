import React from "react";
import SolarHero from "../../components/home";
import AboutIntro from "../../components/home/AboutIntro";
import AboutServicesSection from "../../components/home/AboutServicesSection";
import ExitSection from "../../components/home/ExitSection";
import EcoEnergySection from "../../components/home/EcoEnergySection";
import BrandLogoRow from "../../components/home/BrandLogoRow";

const Home: React.FC = () => {
  return (
    <>
      <SolarHero />
      <AboutIntro />
      <AboutServicesSection />
      <ExitSection />
      <EcoEnergySection />
      <BrandLogoRow />
    </>
  );
};

export default Home;
