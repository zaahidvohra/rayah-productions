import React from 'react';

export default function OurWorkSection({ data }) {
  if (!data) return null;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading text-text-primary mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-accent-dark font-medium mb-6">
            {data.brief}
          </p>
          <p className="text-lg font-body text-text-primary leading-relaxed max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {data.stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   