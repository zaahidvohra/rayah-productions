// HeroSection.jsx
import React from 'react';

const HeroSection_s = () => {
return (
<section className="relative text-white py-20 px-6 bg-gradient-to-br from-primary to-accent-dark">
    <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Cinematic Excellence
            <span className="block text-accent-light">Meets Digital Strategy</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional videography and social media optimization services that elevate your brand and engage your
            audience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                className="px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 bg-accent-light text-primary">
                View Portfolio
            </button>
            <button
                className="border-2 border-accent-light px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-accent-light hover:bg-accent-light hover:text-primary">
                Get Quote
            </button>
        </div>
    </div>
</section>
);
};

export default HeroSection_s;