// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ title, subtitle, description, className = "" }) => {
    return (
        <div className={`bg-gradient-to-r from-primary to-accent-dark text-white py-16 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        {title}
                        {subtitle && (
                            <span className="block text-accent-light">{subtitle}</span>
                        )}
                    </h1>
                    <p className="font-body text-xl md:text-2xl text-accent-light/90 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;