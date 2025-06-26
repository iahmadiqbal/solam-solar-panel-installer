import { FaYoutube } from "react-icons/fa";

const HeroBanner: React.FC = () => {
  return (
    <section className="w-screen overflow-hidden">
      <div className="relative w-full min-h-[70vh] bg-[url('/images/RenewablesustainableEnergy.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-5xl text-center mx-auto px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 break-words">
            Renewable and Sustainable
          </h1>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 break-words">
            Power Energy Sources
          </h2>

          {/* YouTube Icon */}
          <a
            href="https://youtu.be/XHOmBV4js_E?si=PM-27Db_vaXzhPx0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <FaYoutube className="text-[60px] text-[#F6A235]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
