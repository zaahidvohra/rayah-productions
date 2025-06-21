
import React from 'react';

export default function SloganSection({ data }) {
  if (!data) return null && console.error("Slogan data is missing") ;

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-primary to-accent-dark text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
          {data.title}
        </h2>
        <p className="text-xl md:text-2xl font-body opacity-90">
          {data.subtitle}
        </p>
      </div>
    </section>
  );
}
