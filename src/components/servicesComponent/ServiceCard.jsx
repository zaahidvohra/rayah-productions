// ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service, isActive, onToggle }) => {
    return (
        <div
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${isActive ? 'border-primary' : 'border-transparent'
                }`}
            onClick={onToggle}
        >
            <div className="flex items-center mb-6">
                <div className="p-3 rounded-full mr-4 shadow-md bg-gradient-to-br from-accent-light to-accent-dark text-primary">
                    <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary">
                    {service.title}
                </h3>
            </div>

            <p className="mb-6 text-text-body">
                {service.description}
            </p>

            <div className="mb-6">
                <h4 className="font-semibold mb-3 text-text-primary">Core Skills:</h4>
                <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm font-medium shadow-sm bg-gradient-to-br from-accent-light to-accent-dark text-primary"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {isActive && (
                <div className="mt-6 pt-6 border-t border-accent-light">
                    <h4 className="font-semibold mb-3 text-text-primary">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                        {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-text-body">
                                <span className="mr-2 flex-shrink-0 text-primary text-lg">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                            {service.price}
                        </span>
                        <button className="text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-accent-dark">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceCard;