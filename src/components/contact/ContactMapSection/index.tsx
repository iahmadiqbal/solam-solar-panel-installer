import React, { useMemo } from "react";

const ContactMapSection: React.FC = () => {
  const mapIframe = useMemo(() => {
    return (
      <iframe
        title="Times Square, New York"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.827243621321!2d-73.98796382409865!3d40.757974835773746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855f2d7c9ff%3A0x432d4b5b5e2654a2!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1719483822154!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        className="w-full h-full border-0"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  }, []);

  return (
    <section className="w-full h-[70vh] md:h-[85vh] overflow-x-hidden">
      <div className="w-full h-full">{mapIframe}</div>
    </section>
  );
};

export default ContactMapSection;
