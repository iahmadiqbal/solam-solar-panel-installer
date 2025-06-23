import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      {/* Top Banner (centered, limited width) */}
      <div className="bg-[#F6A235] w-full py-10 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-white">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-0 text-center md:text-left">
            Smartest Way to Generate Electricity
          </h2>
          <button className="px-6 py-2 text-sm font-medium text-white bg-[#1A1819] hover:bg-[#141314] transition">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-10 pb-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              We Offer a Wide Range of Quality Solar Panel Installation
              Services.
            </h3>
            <p className="text-sm text-gray-300 mb-1 flex items-center gap-2">
              <FaEnvelope /> needhelp@company.com
            </p>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <FaPhoneAlt /> (123) 456-7890
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Explore</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>About</li>
              <li>Leadership Team</li>
              <li>Our Services</li>
              <li>Recent Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Solar Technology</li>
              <li>Solar Installation</li>
              <li>Battery Materials</li>
              <li>Solar Equipment</li>
              <li>Charge Controllers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-300 mb-3">
              60 Brooklyn Golden Street
              <br />
              New York 8800 United States
            </p>

            {/* Social Icons with working links */}
            <div className="flex gap-4 mt-2 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F6A235] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F6A235] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F6A235] transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F6A235] transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
          © Copyrights are Reserved by YourCompany.com
        </div>
      </footer>
    </>
  );
};

export default Footer;
