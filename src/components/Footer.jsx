import React from "react";

export default function Footer() {
  return (
    <footer className="bg-text-primary mt-16 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold">
                Rayah Productions
              </h3>
            </div>
            <p className="text-gray-300 font-body leading-relaxed">
              Creating exceptional digital experiences with passion and
              creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-primary">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-gray-300 hover:text-primary transition-colors duration-300 font-body"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-gray-300 hover:text-primary transition-colors duration-300 font-body"
              >
                About Us
              </a>
              <a
                href="/services"
                className="block text-gray-300 hover:text-primary transition-colors duration-300 font-body"
              >
                Services
              </a>
              <a
                href="/portfolio"
                className="block text-gray-300 hover:text-primary transition-colors duration-300 font-body"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-primary">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 4.26c.67.36 1.47.36 2.14 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 font-body">
                  hello@rayahproductions.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 font-body">
                  +1 (555) 123-4567
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 font-body text-center md:text-left">
            &copy; {new Date().getFullYear()} Rayah Productions. All rights
            reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://instagram.com/moin_2896"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297L6.99 14.027c.615.526 1.407.838 2.275.838 1.899 0 3.438-1.54 3.438-3.438s-1.54-3.438-3.438-3.438-3.438 1.54-3.438 3.438c0 .868.312 1.66.838 2.275l-1.664 1.865c-.807-.876-1.297-2.027-1.297-3.324 0-2.696 2.187-4.883 4.883-4.883s4.883 2.187 4.883 4.883-2.187 4.862-4.861 4.862z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/moin-vahora-2ba727120"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCkWn6vJ34Cs05YyYaU_CAaA"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
