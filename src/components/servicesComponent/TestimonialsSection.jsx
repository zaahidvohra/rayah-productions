// TestimonialsSection.jsx
import React from 'react';

const TestimonialsSection = ({ testimonialsData }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
            Client Success Stories
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <p className="text-xl text-text-body max-w-3xl mx-auto leading-relaxed">
            Hear from clients who've experienced the impact of professional videography and strategic social media optimization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-accent-light">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-dark text-xl">⭐</span>
                ))}
              </div>
              <p className="mb-8 italic text-text-body text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-accent-light pt-4">
                <h4 className="font-semibold text-text-primary font-heading text-lg">{testimonial.name}</h4>
                <p className="text-sm text-text-body font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;