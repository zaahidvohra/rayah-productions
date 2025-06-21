import React from 'react';

export default function OurWorkSection({ workData }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">{workData.title}</h2>
          <p className="text-xl text-gray-600">{workData.brief}</p>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">{workData.description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {workData.stats.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{item.number}</div>
              <div className="text-gray-700 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-accent-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
