// src/components/ServicesGrid.jsx
import React, { useState, useEffect } from 'react';

const ServicesGrid = ({ services, title = "My Expertise" }) => {
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [services.length]);

    return (
        <div>
            <h3 className="font-heading text-2xl font-bold text-text-primary mb-8">{title}</h3>
            <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer group ${activeCard === index
                                ? 'border-primary bg-primary/5 shadow-lg scale-105'
                                : 'border-accent-light/30 hover:border-primary/50 hover:bg-accent-light/20'
                            }`}
                        onMouseEnter={() => setActiveCard(index)}
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <span className="text-2xl">{service.icon}</span>
                        </div>
                        <h4 className="font-heading font-semibold text-text-primary mb-2">{service.title}</h4>
                        <p className="font-body text-text-body text-sm leading-relaxed">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;