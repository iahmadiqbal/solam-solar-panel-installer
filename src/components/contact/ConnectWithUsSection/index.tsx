import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ConnectWithUsSection: React.FC = () => {
  return (
    <section className="w-full px-4 pb-12 bg-[#FAF5EF] overflow-x-hidden -mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Content - White Background */}
        <div className="bg-white p-6 shadow-md flex flex-col justify-between h-full">
          <div>
            <div className="w-5 h-1 bg-[#F6A235] mb-2" />
            <h2 className="text-xl font-normal text-gray-300 mb-1">
              Get in touch
            </h2>

            <h3 className="text-4xl font-bold text-[#000000] mb-4">
              Schedule a Quote
            </h3>
            <p className="text-gray-600 mb-6 flex items-start gap-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="space-y-4">
              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 text-gray-800">
                  <FaPhoneAlt className="text-[#F6A235]" />
                  (123) 456-7890
                </div>
                <hr className="mt-2 border-t border-gray-300" />
              </div>
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 text-gray-800">
                  <FaEnvelope className="text-[#F6A235]" />
                  needhelp@company.com
                </div>
                <hr className="mt-2 border-t border-gray-300" />
              </div>
              {/* Address */}
              <div>
                <div className="flex items-center gap-3 text-gray-800">
                  <FaMapMarkerAlt className="text-[#F6A235]" />
                  60 Brooklyn Street, New York, USA
                </div>
                <hr className="mt-2 border-t border-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Form - Light Background (#FAF5EF) */}
        <div className="bg-[#FAF5EF] p-6 shadow-md h-full flex flex-col justify-between">
          <form className="space-y-4 h-full flex flex-col">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6A235]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6A235]"
              required
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-3 border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6A235]"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 bg-white resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#F6A235]"
              required
            ></textarea>
            <div className="mt-auto">
              <button
                type="submit"
                className="bg-[#F6A235] text-white font-semibold py-3 px-6 w-full hover:bg-[#e29425] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUsSection;
