import React from "react";
import { Link } from "react-router-dom";

const SolarHero: React.FC = () => {
  return (
    <section className="w-full min-h-screen relative">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/heroimage.jpeg')]" />
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-16 text-white">
        <div className="max-w-xl space-y-6">
          <h1
            className="text-3xl font-semibold mb-4 opacity-0 animate-fadeInDown"
            style={{ animationDelay: "0.1s", animationDuration: "0.8s" }}
          >
            Solar Panel Installation Solution
          </h1>
          <h2
            className="text-5xl font-bold mb-6 leading-tight opacity-0 animate-fadeInDown"
            style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}
          >
            Powering Homes <br /> With Solar Panels
          </h2>
          <Link
            to="/services"
            className="inline-block bg-[#F6A235] text-white hover:bg-gray-700 font-semibold px-10 py-4 transition duration-300 opacity-0 animate-fadeInDown"
            style={{ animationDelay: "0.5s", animationDuration: "0.8s" }}
          >
            Discover More
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation-name: fadeInDown;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default SolarHero;
