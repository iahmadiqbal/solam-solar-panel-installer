import React from "react";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    title: "Solar Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
    image: "/images/solar-technology.jpg",
    icon: "/images/icon-1.png",
  },
  {
    title: "Solar Installation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
    image: "/images/solar-installation.jpg",
    icon: "/images/icon-2.png",
  },
  {
    title: "Solar Equipment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo.",
    image: "/images/solar-equipment.jpg",
    icon: "/images/chargecontrollicon.png",
  },
  {
    title: "Battery Materials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo..",
    image: "/images/batterymaterial.jpg",
    icon: "/images/batteryicon.png",
  },
  {
    title: "Charge Controllers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo..",
    image: "/images/chargecontroller.jpg",
    icon: "/images/chargecontrollicon.png",
  },
  {
    title: "Grid maintanance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pul leo..",
    image: "/images/gridmaintaince.jpg",
    icon: "/images/chargecontrollicon.png",
  },
];

const SolarServicesSection: React.FC = () => {
  return (
    <section className="w-full pt-8 pb-16 bg-white overflow-x-hidden">
      <style>
        {`
          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(50px); }
            100% { opacity: 1; transform: translateX(0); }
          }

          @keyframes slideInUp {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-slide-in-left {
            animation: slideInLeft 0.9s ease-out both;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.9s ease-out both;
          }

          .animate-slide-in-up {
            animation: slideInUp 0.9s ease-out both;
          }
        `}
      </style>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="w-16 h-1 mx-auto mb-2"
          style={{ backgroundColor: "#F6A235" }}
        />
        <p className="text-sm uppercase font-semibold tracking-widest text-[#AEB5C9]">
          What we do
        </p>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Our Services
        </h3>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white shadow-2xl border border-gray-200 overflow-hidden animate-slide-in-up"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[260px] object-cover"
                />
                <img
                  src={service.icon}
                  alt="icon"
                  className="absolute -bottom-6 right-4 w-20 h-20 object-contain"
                />
              </div>
              <div className="p-6 pt-10 text-center group">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#F6A235] transition-colors duration-300">
                  {service.title}
                </h4>
                <div className="w-12 h-1 bg-[#F6A235] mb-3 rounded-sm mx-auto" />
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarServicesSection;
