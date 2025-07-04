import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className="bg-white text-gray-700 p-4 shadow-md font-sans overflow-x-hidden"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        <div className="flex items-center flex-1">
          {/* ✅ Logo */}
          <img
            src="/images/solam.png"
            alt="Logo"
            className="h-10 sm:h-12 md:h-16 lg:h-18 w-auto"
          />

          {/* ✅ Vertical Divider - Desktop Only */}
          <div className="ml-4 h-10 border-l border-gray-400 hidden md:block"></div>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-x-12 text-sm lg:text-base ml-36">
            <Link to="/" className="hover:text-[#F6A235]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#F6A235]">
              About
            </Link>
            <Link to="/projects" className="hover:text-[#F6A235]">
              Projects
            </Link>
            <Link to="/services" className="hover:text-[#F6A235]">
              Services
            </Link>
            <Link to="/ourteam" className="hover:text-[#F6A235]">
              Our Team
            </Link>
            <Link to="/contact" className="hover:text-[#F6A235]">
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-[#F6A235] text-white px-5 py-2 h-10 flex items-center gap-2 justify-center hover:brightness-110 transition"
            >
              <FaEnvelope className="text-white" />
              Get a Quote
            </Link>
          </nav>
        </div>

        {/* ✅ Mobile Menu Toggle Button (☰) */}
        <div className="md:hidden">
          <button
            className="text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 mt-3">
          {/* ❌ Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-700"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F6A235]"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F6A235]"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F6A235]"
            >
              Projects
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F6A235]"
            >
              Services
            </Link>
            <Link
              to="/ourteam"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F6A235]"
            >
              Our Team
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#F6A235]"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#F6A235] text-white px-4 py-2 flex items-center gap-2 hover:brightness-110 transition"
            >
              <FaEnvelope className="text-white" />
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
