import React, { useState } from "react";

interface ProjectItem {
  image: string;
  heading: string;
  subheading: string;
  category: "All" | "Case Studies" | "Consulting" | "Installations";
}

const allProjects: ProjectItem[] = [
  {
    image: "/images/MetalRoofinstallations.jpg",
    heading: "installations",
    subheading: "Tile & Metal Roof Installations",
    category: "Installations",
  },
  {
    image: "/images/commericalsolar.jpg",
    heading: "Consulting",
    subheading: "Commercial Solar Inspections",
    category: "Consulting",
  },
  {
    image: "/images/solarresearchdevelopment.jpg",
    heading: "Case Studies",
    subheading: "Solar Research Development",
    category: "Installations",
  },
  {
    image: "/images/solarpanelinstallation.jpg",
    heading: "Installations",
    subheading: "Solar Panel Installation",
    category: "Installations",
  },
  {
    image: "/images/wholehousebatteryinstalltion.jpg",
    heading: "Installations",
    subheading: "Tile & Metal Roof Installations",
    category: "Installations",
  },
  {
    image: "/images/greentech.jpg",
    heading: "Case Studies",
    subheading: "Green Tech Education",
    category: "Installations",
  },
];

const categories = [
  "All",
  "Case Studies",
  "Consulting",
  "Installations",
] as const;

type Category = (typeof categories)[number];

const ProjectGallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = allProjects.filter((item) => {
    if (activeCategory === "All") return true;

    if (activeCategory === "Case Studies") {
      return (
        item.subheading === "Solar Research Development" ||
        item.subheading === "Green Tech Education"
      );
    }

    if (activeCategory === "Consulting") {
      return item.subheading === "Commercial Solar Inspections";
    }

    if (activeCategory === "Installations") {
      return (
        item.subheading === "Tile & Metal Roof Installations" ||
        item.subheading === "Solar Panel Installation" ||
        item.subheading === "Whole House Battery Installation"
      );
    }

    return false;
  });

  return (
    <section className="py-12 font-['Helvetica'] bg-[#FAF5EF]">
      <div className="max-w-[1200px] mx-auto px-4 text-center overflow-hidden">
        {/* Headings */}
        <h2 className="text-xl font-normal text-gray-700 opacity-80">
          Recent Projects
        </h2>
        <p className="mt-2 text-4xl text-black font-bold mb-10">
          Latest Case Studies
        </p>

        {/* Filter Menu */}
        <div className="w-full mb-6">
          <div className="max-w-full overflow-x-auto scrollbar-none">
            <div className="flex whitespace-nowrap gap-[6px] px-[2px] sm:gap-4 sm:px-2 sm:justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-2 py-1 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeCategory === category
                      ? "text-black font-semibold border-b-2 border-[#F6A235]"
                      : "text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-md"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-[300px] object-cover"
              />

              {/* Full gradient background for better readability */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent z-0" />

              {/* Text Overlay - Always visible on mobile, hover on desktop */}
              <div
                className="absolute bottom-4 left-4 right-4 z-10 text-left transition-opacity duration-300 
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <div className="h-1 w-6 mb-2 bg-[#F6A235]"></div>
                <h3 className="text-white text-xl font-semibold">
                  {item.heading}
                </h3>
                <p className="text-white text-2xl font-bold leading-tight">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallerySection;
