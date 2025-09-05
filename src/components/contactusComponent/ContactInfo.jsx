// src/components/ContactInfo.jsx
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';

const ContactInfo = ({ contactInfo }) => {
  const contactMethods = [
    {
      icon: Mail, 
      label: "Email",
      value: contactInfo.email,
      color: "from-primary to-accent-dark", // Note: Changed to 'from' and 'to' for Tailwind gradient
    },
    {
      icon: Phone, 
      label: "Phone",
      value: contactInfo.phone,
      color: "bg-primary",
    },
    {
      icon: MapPin, 
      label: "Location",
      value: contactInfo.location,
      color: "bg-primary",
    },
  ];

  // Assuming socialLinks also use icons that need to be rendered as components
  // For example, if contactInfo.socialLinks looks like this:
  // const socialLinks = [
  //   { icon: Linkedin, url: "...", color: "bg-blue-600" },
  //   { icon: Github, url: "...", color: "bg-gray-800" },
  //   { icon: Instagram, url: "...", color: "bg-pink-500" },
  // ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="grid grid-cols-12 gap-8">
        {/* Get In Touch Section - 6 columns */}
        <div className="col-span-6 space-y-6">
          <h3 className="font-heading text-2xl font-bold text-text-primary">
            Get In Touch
          </h3>
          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              // Destructure the icon as a capitalized component, e.g., 'Icon'
              const Icon = method.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center`}
                  >
                    {/* Render the icon component directly */}
                    <Icon className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-text-body">
                      {method.label}
                    </p>
                    <p className="font-heading font-semibold text-text-primary">
                      {method.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Links Section - 6 columns */}
        <div className="col-span-6 space-y-6">
          <h3 className="font-heading text-2xl font-bold text-text-primary">
            Follow My Work
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {contactInfo.socialLinks.map((link, index) => {
              // Destructure the icon as a capitalized component, e.g., 'Icon'
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}
                >
                  {/* Render the icon component directly */}
                  <Icon className="text-white text-lg" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;