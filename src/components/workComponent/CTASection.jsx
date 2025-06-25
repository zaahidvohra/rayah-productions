// CTASection.jsx
import React from 'react';
import { ctaData } from '../../data/workData';

const CTASection = ({ onStartProjectClick, onScheduleConsultationClick }) => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center bg-gradient-to-r from-primary to-accent-dark rounded-3xl p-12 text-white">
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {ctaData.title}
          </h3>
          <p className="font-body text-xl mb-8 text-accent-light/90">
            {ctaData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-primary font-heading font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={onStartProjectClick}
            >
              {ctaData.buttons.primary}
            </button>
            <button
              className="border-2 border-white text-white font-heading font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              onClick={onScheduleConsultationClick}
            >
              {ctaData.buttons.secondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;