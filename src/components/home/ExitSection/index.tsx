import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ProjectItem {
  image: string;
  heading: string;
  subheading: string;
}

const projectItems: ProjectItem[] = [
  {
    image: "/images/MetalRoofinstallations.jpg",
    heading: "Installations",
    subheading: "Tile & Metal Roof Installations",
  },
  {
    image: "/images/commericalsolar.jpg",
    heading: "Consulting",
    subheading: "Commercial Solar Inspections",
  },
  {
    image: "/images/solarresearchdevelopment.jpg",
    heading: "Case Studies",
    subheading: "Solar Research Development",
  },
  {
    image: "/images/solarpanelinstallation.jpg",
    heading: "Installations",
    subheading: "Solar Panel Installation",
  },
];

const ExitSection: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 font-['Helvetica'] bg-[#FAF5EF]">
      <div className="max-w-[1600px] mx-auto px-4">
        {/* Headings */}
        <div className="mb-10">
          <h2 className="text-xl font-normal text-gray-700 opacity-80">
            Recent Projects
          </h2>
          <p className="mt-2 text-4xl text-black font-bold">
            Latest Case Studies
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden cursor-pointer transition duration-1000 ease-in-out ${
                isAnimated
                  ? "brightness-125 opacity-80"
                  : "brightness-100 opacity-100"
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-[300px] object-cover transition-opacity duration-500"
              />

              {/* Dark Shadow Bottom */}
              <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent z-10"></div>

              {/* Text */}
              <div className="absolute left-0 bottom-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <div className="bg-yellow-400 h-1 w-6 mb-2"></div>
                <h3 className="text-white text-xl font-semibold drop-shadow-md">
                  {item.heading}
                </h3>
                <p className="text-white text-3xl mt-1 font-bold drop-shadow-sm leading-tight">
                  {item.subheading}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-500 text-white rounded-full">
                    <FaArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExitSection;
