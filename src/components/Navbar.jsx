  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import logo from "../assets/rayahLogo.png";

  export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <nav className="bg-gradient-to-r from-secondary to-secondary shadow-lg sticky top-0 z-50 backdrop-blur-sm border-b border-accent-light/60">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section - Left Side */}
            <div className="flex items-center space-x-4">
              {/* Creative Logo */}
              <div className="relative">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="w-7 h-7 object-contain"
                  />
                {/* <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-dark rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                </div> */}
                {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-dark rounded-full animate-pulse"></div> */}
              </div>
              
              {/* Company Name */}
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-heading font-bold bg-gradient-to-r from-primary to-accent-dark bg-clip-text text-transparent">
                  Rayah Productions
                </h1>
                <p className="text-xs font-body text-text-primary/70 tracking-wider uppercase">
                  Digital Marketing
                </p>
              </div>
            </div>

            {/* Navigation Links - Right Side */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 text-text-primary font-medium font-body transition-all duration-300 hover:text-primary group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent-light rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-dark transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </Link>
              ))}
              
              {/* CTA Button */}
              {/* <div className="ml-6">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-primary to-accent-dark text-white px-6 py-3 rounded-full font-medium font-body transition-all duration-300 hover:shadow-lg hover:scale-105 transform relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div> */}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-primary hover:text-primary transition-colors duration-300 p-2 rounded-lg hover:bg-accent-light/30"
              >
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-accent-light/30 p-4 space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-text-primary font-medium font-body rounded-lg hover:bg-gradient-to-r hover:from-accent-light hover:to-white hover:text-primary transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              {/* <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-primary to-accent-dark text-white px-4 py-3 rounded-lg font-medium font-body mt-4 hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }