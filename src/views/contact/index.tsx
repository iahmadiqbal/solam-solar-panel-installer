import React from "react";
import HeroContactSection from "../../components/contact/HeroContactSection";
import ContactMapSection from "../../components/contact/ContactMapSection";
import ConnectWithUsSection from "../../components/contact/ConnectWithUsSection";

const Contact: React.FC = () => {
  return (
    <>
      <HeroContactSection />
      <ContactMapSection />
      <ConnectWithUsSection />
    </>
  );
};

export default Contact;
