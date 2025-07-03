import React from 'react';
import ImageCarousal3d from "./ImageCarousal3d";

export default function OurWorkSection({ workData }) {
  return (
    <section className="py-6 px-6 bg-accent-light">
  <div className="max-w-7xl mx-auto">
    {/* Title & brief */}
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
    </div>
  </div>

  {/* Full-width carousel outside max-w-7xl */}
  {/* <div className="w-screen mb-16"> */}
    <ImageCarousal3d />
  {/* </div> */}

  {/* Button inside centered container */}
  <div className="max-w-7xl mx-auto my-4 text-center">
    <button className="bg-gradient-to-r from-primary to-accent-dark hover:from-accent-dark hover:to-primary text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-accent-light">
      View Full Portfolio
    </button>
  </div>
</section>

  );
}