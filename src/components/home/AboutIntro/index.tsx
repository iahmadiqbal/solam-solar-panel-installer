import { FaCheckCircle, FaCog, FaBox, FaPhoneAlt } from "react-icons/fa";

const AboutIntro: React.FC = () => {
  return (
    <section className="w-full py-16 bg-white">
      {/* Keyframe animations inside component */}
      <style>
        {`
          @keyframes slideInLeft {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-left {
            animation: slideInLeft 0.9s ease-out both;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.9s ease-out both;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left Image Section */}
        <div className="relative w-full flex justify-center md:justify-start animate-slide-in-left">
          <div className="relative w-full sm:w-[95%] md:w-[100%] bg-gray-200 shadow-2xl overflow-hidden before:absolute before:-right-3 before:top-3 before:w-full before:h-full before:bg-yellow-400 before:rounded-lg before:-z-10 z-10">
            <img
              src="/images/electrician.jpg"
              alt="Electrician"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
            />

            {/* Bottom-Left Overlay */}
            <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md z-20">
              <h2 className="text-3xl font-bold">12+</h2>
              <p className="text-sm font-medium leading-tight">
                Years of <br /> Experience
              </p>
            </div>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="space-y-6 animate-slide-in-right">
          {/* Intro Header */}
          <div className="space-y-2">
            <div className="w-16 h-1 bg-yellow-500 rounded-sm" />
            <p className="text-sm uppercase font-semibold tracking-widest text-[#AEB5C9]">
              Our Introduction
            </p>
          </div>

          {/* Title + Paragraph */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Energy Source for a Better Life
          </h3>
          <p className="text-base leading-relaxed text-[#AEB5C9]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
            deiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            scelerisque dolor id nunc dictum.
          </p>

          {/* Feature List */}
          <hr className="border-gray-300" />
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
          <hr className="border-gray-300" />

          {/* CTA Section */}
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
    </section>
  );
};

export default AboutIntro;
