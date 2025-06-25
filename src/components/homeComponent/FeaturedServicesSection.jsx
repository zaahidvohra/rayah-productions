import React from 'react';

export default function FeaturedServicesSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-6">
            {data.title}
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <p className="text-xl text-text-primary opacity-80 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.services?.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-primary group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light opacity-10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>

              <div className="text-center mb-8 relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-primary opacity-80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 relative z-10">
                {service.features?.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-text-primary group-hover:text-text-primary"
                  >
                    <div className="w-6 h-6 bg-accent-dark rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:bg-primary transition-colors duration-300">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Service CTA */}
              <div className="mt-8 text-center relative z-10">
                <button className="bg-gradient-to-r from-primary to-accent-dark text-white px-6 py-2 rounded-lg font-semibold hover:from-accent-dark hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-md">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-primary mb-8 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss how we can create something extraordinary together.
          </p>
          <button className="bg-gradient-to-r from-accent-dark to-primary hover:from-primary hover:to-accent-dark text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-accent-light">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}