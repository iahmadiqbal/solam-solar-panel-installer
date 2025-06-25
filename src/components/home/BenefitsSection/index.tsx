import React, { useEffect, useState } from "react";
import { FiSettings } from "react-icons/fi";
import { HiSun } from "react-icons/hi";

const BenefitsSection: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100); // Delay ensures animation works
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto min-h-[500px]">
        {/* Left content with animation */}
        <div
          className={`w-full md:w-1/2 p-6 md:p-10 bg-[#1A1819] text-white flex flex-col justify-center
            transform transition-all duration-700 ease-out
            ${
              show ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0" // Increased distance for mobile visibility
            }`}
        >
          <div>
            <hr className="w-8 border-t-4 border-[#F6A235] mb-2" />
            <h2 className="text-1xl font-normal text-gray-300 uppercase">
              OUR BENEFITS
            </h2>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <h3 className="text-5xl sm:text-3xl font-bold leading-snug">
              Why Choose Solar <br /> Panel Solution?
            </h3>
          </div>

          <p className="mt-4 text-base text-[#B0B0B0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit{" "}
            <br />
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "Suspe ndisse suscipit sagittis leo.",
              "Lorem Ipsum generators on the tend.",
              "Morbi suscipit scelerisque sapien eget",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#E0E0E0]">
                <FiSettings className="text-[#F6A235] text-lg mt-1" />
                <span className="text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto">
          <img
            src="/images/whychoosesolarpanel.jpg"
            alt="whychoosesolarpanel"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
