import React from "react";
import { FaCheckCircle, FaCog, FaBox, FaPhoneAlt } from "react-icons/fa";

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
    icon: "/images/icon-3 (1).png",
  },
];

const AboutServicesSection: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white overflow-x-hidden">
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

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative w-full flex justify-center md:justify-start animate-slide-in-left">
          <div className="relative w-full sm:w-[95%] md:w-full bg-gray-200 shadow-2xl overflow-hidden before:absolute before:right-0 before:top-3 before:w-full before:h-full before:bg-yellow-400 before:rounded-lg before:-z-10 z-10">
            <img
              src="/images/electrician.jpg"
              alt="Electrician"
              className="w-full h-[320px] sm:h-[420px] md:h-[470px] object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md z-20">
              <h2 className="text-3xl font-bold">12+</h2>
              <p className="text-sm font-medium leading-tight">
                Years of <br /> Experience
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-slide-in-right">
          <div className="space-y-2">
            <div className="w-16 h-1 bg-yellow-500 rounded-sm" />
            <p className="text-sm uppercase font-semibold tracking-widest text-[#AEB5C9]">
              Our Introduction
            </p>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Energy Source for a Better Life
          </h3>
          <p className="text-base leading-relaxed text-[#AEB5C9]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
            deiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            scelerisque dolor id nunc dictum.
          </p>
          <hr className="border" style={{ borderColor: "#F6A235" }} />
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-700">
              <FaCheckCircle className="text-yellow-500 text-xl mt-1" />
              Suspe ndisse suscipit sagittis leo.
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <FaCog className="text-yellow-500 text-xl mt-1" />
              Lorem Ipsum generators on the tend.
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <FaBox className="text-yellow-500 text-xl mt-1" />
              Morbi suscipit scelerisque sapien eget.
            </li>
          </ul>
          <hr className="border" style={{ borderColor: "#F6A235" }} />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 font-medium transition duration-300">
              Learn More
            </button>
            <div className="flex flex-col text-gray-800">
              <span className="text-xl font-medium text-[#AEB5C9]">
                Have any questions?
              </span>
              <div className="flex items-center mt-1">
                <FaPhoneAlt className="mr-2 text-yellow-500" />
                <span className="font-medium">(123) 456-7890</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 text-center">
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
                  className="w-full h-[280px] object-cover"
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

export default AboutServicesSection;
