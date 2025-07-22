// ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service, isActive, onToggle }) => {
    return (
        <div
            className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 overflow-hidden ${isActive ? 'border-primary scale-105' : 'border-transparent hover:border-accent-light'
                }`}
            onClick={onToggle}
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-light to-accent-dark opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>

            <div className="relative z-10">
                <div className="flex items-center mb-6">
                    <div className="p-4 rounded-2xl mr-4 shadow-md bg-gradient-to-br from-accent-light to-accent-dark text-primary transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                        {service.title}
                    </h3>
                </div>

                <p className="mb-6 text-text-body leading-relaxed">
                    {service.description}
                </p>

                <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-text-primary">Core Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                        {service.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-2 rounded-full text-sm font-medium shadow-sm bg-gradient-to-r from-accent-light to-secondary text-primary border border-accent-light hover:shadow-md transition-all duration-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {isActive && (
                    <div className="mt-6 pt-6 border-t border-accent-light animate-fadeIn">
                        <h4 className="font-semibold mb-4 text-text-primary flex items-center">
                            <span className="mr-2">✨</span>
                            What's Included:
                        </h4>
                        <ul className="space-y-3 mb-8">
                            {service.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-text-body group-hover:text-text-primary transition-colors duration-300">
                                    <span className="mr-3 flex-shrink-0 text-primary text-lg w-6 h-6 rounded-full bg-accent-light flex items-center justify-center text-sm font-bold">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center justify-between bg-gradient-to-r from-accent-light to-secondary p-4 rounded-xl">
                            <span className="text-2xl font-bold text-primary">
                                {service.price}
                            </span>
                            <button className="text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary to-accent-dark font-semibold">
                                Get Started →
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;