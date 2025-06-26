import FeaturesOverviewSection from "../../components/about/FeaturesOverviewSection";
import HeroAboutSection from "../../components/about/HeroAboutSection";
import HeroBanner from "../../components/about/HeroBanner";
import TestimonialSection from "../../components/about/TestimonialSection";

const About: React.FC = () => {
  return (
    <>
      <HeroAboutSection />
      <FeaturesOverviewSection />
      <HeroBanner />
      <TestimonialSection />
    </>
  );
};

export default About;
