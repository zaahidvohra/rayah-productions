import React from 'react';

export default function SloganSection({ data }) {
  if (!data) return null && console.error("Slogan data is missing");

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary via-primary to-accent-dark text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light via-opacity-5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-light opacity-5 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-dark opacity-10 rounded-full translate-x-48 translate-y-48"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-accent-light drop-shadow-lg">
          {data.title}
        </h2>
        <p className="text-xl md:text-2xl font-body opacity-90 text-white max-w-4xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>

        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center">
          <div className="h-1 w-16 bg-accent-light rounded-full"></div>
          <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
          <div className="h-1 w-16 bg-accent-light rounded-full"></div>
        </div>
      </div>
    </section>
  );
}