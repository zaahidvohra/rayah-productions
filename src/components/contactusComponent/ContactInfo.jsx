// src/components/ContactInfo.jsx
import React from "react";

const ContactInfo = ({ contactInfo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="grid grid-cols-12 gap-8">
        {/* Get In Touch Section - 6 columns */}
        <div className="col-span-6 space-y-6">
          <h3 className="font-heading text-2xl font-bold text-text-primary">
            Get In Touch
          </h3>
          <div className="space-y-4">
            {contactInfo.contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
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
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center 
               hover:bg-primary hover:text-white transition-all duration-300 
               shadow-md hover:scale-110 mx-auto"
                >
                  <IconComponent className="w-6 h-6 text-current" />
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
