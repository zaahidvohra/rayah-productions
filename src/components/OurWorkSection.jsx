import React from 'react';

export default function OurWorkSection({ workData }) {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mb-6">
            {workData.title}
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <p className="text-xl text-text-primary font-medium mb-4">
            {workData.brief}
          </p>
          <p className="text-lg text-text-primary opacity-80 max-w-3xl mx-auto leading-relaxed">
            {workData.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {workData.stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary group"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:text-accent-dark transition-colors duration-300">
                {item.number}
              </div>
              <div className="text-text-primary font-semibold text-lg">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-primary to-accent-dark hover:from-accent-dark hover:to-primary text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-accent-light">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}