import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section with Icon */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-heading font-bold text-white">
              Rayah Productions
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white text-lg font-medium font-body transition-all duration-300 hover:text-accent-light hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="text-white text-lg font-medium font-body transition-all duration-300 hover:text-accent-light hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/services"
              className="text-white text-lg font-medium font-body transition-all duration-300 hover:text-accent-light hover:scale-105 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/portfolio"
              className="text-white text-lg font-medium font-body transition-all duration-300 hover:text-accent-light hover:scale-105 relative group"
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg font-medium font-body transition-all duration-300 hover:text-accent-light hover:scale-105 relative group"
            >
              Contact us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {/* <Link 
              to="/contact" 
              className="bg-accent-light text-white px-6 py-2 rounded-full font-medium font-body transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-lg"
            >
              Contact
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-accent-light transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
