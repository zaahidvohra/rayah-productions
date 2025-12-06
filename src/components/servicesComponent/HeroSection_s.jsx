// HeroSection.jsx
import React from 'react';

const HeroSection_s = () => {
return (
<section className="relative text-white py-16 px-6 bg-gradient-to-br from-primary to-accent-dark">
    <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Cinematic Excellence
            <span className="block text-accent-light">Meets Digital Strategy</span>
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Professional videography and social media optimization services that elevate your brand and engage your
            audience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                className="px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 bg-accent-light text-primary">
                View Portfolio
            </button>
            <button
                className="border-2 border-accent-light px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-accent-light hover:bg-accent-light hover:text-primary">
                Get Quote
            </button>
        </div>
    </div>
</section>
);
};

export default HeroSection_s;