// HeroSection.jsx
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative py-20 bg-secondary overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-20 h-20 bg-accent-light rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-accent-dark rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-accent-light rounded-full opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6">
                        Cinematic Excellence{' '}
                        <span className="text-primary">Meets Digital Strategy</span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-body leading-relaxed max-w-3xl mx-auto mb-12">
                        Professional videography and social media optimization services that elevate your brand and engage your audience with cutting-edge creative solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center space-x-2 shadow-lg">
                            <span>View Portfolio</span>
                            <span className="text-xl">🎬</span>
                        </button>
                        <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 font-medium shadow-lg">
                            Get Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;