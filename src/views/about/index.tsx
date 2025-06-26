import FeaturesOverviewSection from "../../components/about/FeaturesOverviewSection";
import HeroAboutSection from "../../components/about/HeroAboutSection";
import HeroBanner from "../../components/about/HeroBanner";

const About: React.FC = () => {
  return (
    <>
      <HeroAboutSection />
      <FeaturesOverviewSection />
      <HeroBanner />
    </>
  );
};

export default About;
