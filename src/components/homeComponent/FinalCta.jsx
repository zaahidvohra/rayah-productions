import React from 'react';

export default function FinalCta() {
  return (
    <section className="py-20 flex justify-center items-center bg-background">
      <div className="bg-gradient-to-r from-primary to-accent-dark text-white px-6 py-12 rounded-3xl shadow-lg w-full max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Let's turn your vision into <span className="underline">viral.</span>
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Ready to write your success story? We're here to make it happen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact us
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
