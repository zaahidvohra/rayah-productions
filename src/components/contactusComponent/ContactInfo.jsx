import React from "react";

const ContactInfo = ({ contactInfo }) => {
  return (
    // FIX: Explicit w-full ensures it respects the parent's padding
    <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8 w-full box-border">
      {/* FIX: Reduced gap-8 to gap-6 on mobile to stop overflow */}
      <div className="grid grid-cols-12 gap-6 md:gap-8">
        
        <div className="col-span-12 md:col-span-6 space-y-6">
          <h3 className="font-heading text-2xl font-bold text-text-primary">
            Get In Touch
          </h3>
          <div className="space-y-4">
            {contactInfo.contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1"> {/* min-w-0 prevents text overflow */}
                    <p className="font-body text-sm text-text-body">
                      {method.label}
                    </p>
                    <p className="font-heading font-semibold text-text-primary break-words">
                      {method.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 space-y-6">
          <h3 className="font-heading text-2xl font-bold text-text-primary">
            Follow My Work
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-3 gap-4">
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