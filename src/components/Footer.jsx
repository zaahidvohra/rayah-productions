import React from "react";
import logo from "../assets/rayahLogo.png";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#E8D5B7] via-[#D4C4A8] to-[#C4B59C] mt-16 py-12 text-text-primary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-dark/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Creative Logo matching navbar */}
              <div className="relative">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold bg-gradient-to-r from-primary to-text-primary bg-clip-text text-transparent">
                  Rayah Productions
                </h3>
                <p className="text-xs text-primary/70 tracking-wider uppercase">
                  Digital Marketing
                </p>
              </div>
            </div>
            <p className="text-text-primary/80 font-body leading-relaxed">
              Creating exceptional digital experiences with passion and
              creativity. Transforming brands through innovative marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-primary">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="block text-text-primary/70 hover:text-primary transition-all duration-300 font-body hover:translate-x-1 relative group"
                >
                  {/* <span className="relative z-10">{link.name}</span> */}
                  <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 -translate-y-1/2"></div>
                  <span className="ml-0 group-hover:ml-6 transition-all duration-300">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-primary">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26c.67.36 1.47.36 2.14 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-text-primary/80 font-body hover:text-primary transition-colors duration-300">
                  hello@rayahproductions.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-text-primary/80 font-body hover:text-primary transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-text-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-primary/60 font-body text-center md:text-left">
            &copy; {new Date().getFullYear()} Rayah Productions. All rights
            reserved.
          </p>

          <div className="flex space-x-4">
            {[
              {
                name: "Instagram",
                url: "https://instagram.com/moin_2896",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )
              },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/moin-vahora-2ba727120",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )
              },
              {
                name: "YouTube",
                url: "https://www.youtube.com/channel/UCkWn6vJ34Cs05YyYaU_CAaA",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                )
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-text-primary/10 rounded-lg flex items-center justify-center text-text-primary/70 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}