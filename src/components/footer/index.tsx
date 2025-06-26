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
      <footer className="bg-[#1a1a1a] text-white pt-10 pb-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">
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
            <h4 className="text-base sm:text-lg font-semibold mb-3">Explore</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/team">Leadership Team</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/projects">Recent Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3">
              Services
            </h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <a
                  href="https://preview.themeforest.net/item/solam-solar-panel-installer-wordpress-theme/full_screen_preview/35975997?_ga=2.46129444.1406169400.1745481684-378872565.1745481684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F6A235] transition"
                >
                  Solar Technology
                </a>
              </li>
              <li>
                <a
                  href="https://preview.themeforest.net/item/solam-solar-panel-installer-wordpress-theme/full_screen_preview/35975997?_ga=2.46129444.1406169400.1745481684-378872565.1745481684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F6A235] transition"
                >
                  Solar Installation
                </a>
              </li>
              <li>
                <a
                  href="https://preview.themeforest.net/item/solam-solar-panel-installer-wordpress-theme/full_screen_preview/35975997?_ga=2.46129444.1406169400.1745481684-378872565.1745481684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F6A235] transition"
                >
                  Battery Materials
                </a>
              </li>
              <li>
                <a
                  href="https://preview.themeforest.net/item/solam-solar-panel-installer-wordpress-theme/full_screen_preview/35975997?_ga=2.46129444.1406169400.1745481684-378872565.1745481684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F6A235] transition"
                >
                  Solar Equipment
                </a>
              </li>
              <li>
                <a
                  href="https://preview.themeforest.net/item/solam-solar-panel-installer-wordpress-theme/full_screen_preview/35975997?_ga=2.46129444.1406169400.1745481684-378872565.1745481684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F6A235] transition"
                >
                  Charge Controllers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
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
