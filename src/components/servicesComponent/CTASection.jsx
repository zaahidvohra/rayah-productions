// CTASection.jsx
import React from 'react';

const CTASection = ({ ctaData }) => {
  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-accent-light rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-dark rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-14 h-14 bg-accent-light rounded-full opacity-60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8">
            {ctaData.title}
          </h2>
          <p className="text-lg md:text-xl text-text-body leading-relaxed mb-12">
            {ctaData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center space-x-2 shadow-lg">
              <span>{ctaData.buttons.primary}</span>
              <span className="text-xl">🚀</span>
            </button>
            <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 font-medium shadow-lg">
              {ctaData.buttons.secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;