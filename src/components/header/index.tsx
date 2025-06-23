import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className="bg-white text-black p-4 shadow-md"
      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/solam.png" alt="Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg"></span>
        </div>

        {/* Hamburger Toggle (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 text-sm lg:text-base">
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
            className="bg-[#F6A235] ml-4 px-5 py-2 text-white hover:brightness-110 transition"
          >
            Get a Quote
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col gap-2 mt-3 md:hidden">
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
            className="bg-[#F6A235] ml-4 px-5 py-2 text-white hover:brightness-110 transition"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
