import React, { useEffect, useRef, useState, useCallback } from "react";

const EcoEnergySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleObserver: IntersectionObserverCallback = useCallback(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observerInstance.unobserve(entry.target);
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px",
    });

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [handleObserver]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-['Helvetica']"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Text */}
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="mb-2">
            <div className="h-[2px] w-8 bg-[#F6A235] mb-2"></div>
            <h2 className="text-xl font-normal text-gray-600">
              Ecological Way
            </h2>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-2">
            Reshaping Energy for the Future
          </h3>

          <p className="text-gray-600 text-base leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <img
                src="/images/themostusedentergysystem.png"
                alt="energy system"
                className="w-10 h-10 object-contain mb-3"
              />
              <h4 className="text-2xl font-semibold text-gray-800">
                Reduce Your Daily Energy Use
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <img
                src="/images/Reduceyourdailyenergyuse.png"
                alt="reduce energy"
                className="w-10 h-10 object-contain mb-3"
              />
              <h4 className="text-2xl font-semibold text-gray-800">
                The Most Used Energy Systems
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div
          className={`transition-all duration-700 ease-in-out transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <img
            src="/images/reshapingEnergy.jpg"
            alt="Reshaping Energy"
            className="w-full h-auto object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default EcoEnergySection;
