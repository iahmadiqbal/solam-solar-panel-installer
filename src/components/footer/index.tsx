import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#F6A235] py-12 px-5 md:py-16 md:px-10">
        <div className="max-w-4xl mx-auto flex flex-row justify-between items-center text-white gap-4">
          <h2 className="text-left text-lg sm:text-xl font-semibold leading-tight flex-1">
            Smartest Way to Generate Electricity
          </h2>
          <Link
            to="/contact"
            className="px-6 py-2 text-sm font-medium text-white bg-[#1A1819] hover:bg-[#141314] transition whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-10 pb-5 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Info with Logo */}
          <div>
            <img
              src="/images/solamwhite.png"
              alt="Solam Logo"
              className="h-10 mb-3"
            />
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              We Offer a Wide Range of Quality Solar Panel Installation
              Services.
            </h3>
            <p className="text-sm text-gray-300 mb-1 flex items-center gap-2">
              <FaEnvelope className="text-[#F6A235]" /> needhelp@company.com
            </p>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <FaPhoneAlt className="text-[#F6A235]" /> (123) 456-7890
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3">Explore</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-[#F6A235]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ourteam" className="hover:text-[#F6A235]">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#F6A235]">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#F6A235]">
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#F6A235]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (unchanged) */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3">
              Services
            </h4>
            <ul className="space-y-1 text-sm text-gray-300">
              {[
                "Solar Technology",
                "Solar Installation",
                "Battery Materials",
                "Solar Equipment",
                "Charge Controllers",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="https://preview.themeforest.net/item/solam-solar-panel-installer-wordpress-theme/full_screen_preview/35975997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F6A235]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact with updated icon color */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-300 mb-3">
              60 Brooklyn Golden Street
              <br />
              New York 8800 United States
            </p>
            <div className="flex gap-4 mt-2 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F6A235] hover:brightness-110 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F6A235] hover:brightness-110 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F6A235] hover:brightness-110 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F6A235] hover:brightness-110 transition"
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
