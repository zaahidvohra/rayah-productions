// ProfessionalServicesSection.jsx
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProfessionalServicesSection = ({ servicesData }) => {
    const [activeService, setActiveService] = useState(servicesData[0]);

    const handleServiceSelect = (service) => {
        setActiveService(service);
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-32 h-32 bg-accent-light rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-accent-dark rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
                        Our Professional Services
                    </h2>
                    <div className="flex items-center justify-center mb-6">
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                        <div className="h-2 w-2 bg-accent-dark rounded-full mx-4"></div>
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-xl text-text-body max-w-4xl mx-auto leading-relaxed">
                        From cinematic storytelling to strategic social media optimization, we deliver comprehensive creative solutions that drive results.
                    </p>
                </div>

                {/* Interactive Services Layout */}
                <div className="grid lg:grid-cols-3 gap-12 mt-16 items-start">
                    {/* Left Column: Service Navigation */}
                    <div className="lg:col-span-1 space-y-4">
                        {servicesData.map((service) => {
                            const IconComponent = service.icon;
                            const isEmojiIcon = typeof service.icon === 'string';

                            return (
                                <button
                                    key={service.id}
                                    onClick={() => handleServiceSelect(service)}
                                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center space-x-4 ${activeService.id === service.id
                                            ? 'bg-primary text-white shadow-lg transform scale-105'
                                            : 'bg-secondary hover:bg-accent-light hover:text-primary hover:shadow-md'
                                        }`}
                                >
                                    {isEmojiIcon ? (
                                        <span className="text-2xl">{service.icon}</span>
                                    ) : (
                                        <IconComponent
                                            size={24}
                                            className={activeService.id === service.id ? 'text-white' : 'text-primary'}
                                        />
                                    )}
                                    <span className="font-heading font-semibold text-sm md:text-base">
                                        {service.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Service Details */}
                    <div className="lg:col-span-2 bg-secondary rounded-2xl p-6 md:p-8 shadow-inner min-h-[500px]">
                        {activeService && (
                            <div key={activeService.id} className="animate-fade-in">
                                {/* Service Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                                        {typeof activeService.icon === 'string' ? (
                                            <span className="text-3xl">{activeService.icon}</span>
                                        ) : (
                                            <activeService.icon size={32} className="text-white" />
                                        )}
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-2">
                                            {activeService.title}
                                        </h3>
                                        <p className="text-xl md:text-2xl font-bold text-primary">
                                            {activeService.price}
                                        </p>
                                    </div>
                                </div>

                                {/* Service Description */}
                                <p className="text-text-body leading-relaxed mb-8 text-base md:text-lg">
                                    {activeService.description}
                                </p>

                                {/* Features Section */}
                                <div className="mb-8">
                                    <h4 className="font-heading font-semibold text-lg md:text-xl text-text-primary mb-4">
                                        What's Included:
                                    </h4>
                                    <ul className="space-y-3">
                                        {activeService.features.map((feature, index) => (
                                            <li key={index} className="flex items-start text-text-body">
                                                <CheckCircle2
                                                    size={20}
                                                    className="mr-3 mt-0.5 flex-shrink-0 text-primary"
                                                />
                                                <span className="text-sm md:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skills Section */}
                                <div>
                                    <h4 className="font-heading font-semibold text-lg md:text-xl text-text-primary mb-4">
                                        Core Skills:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeService.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-accent-light text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors duration-200"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalServicesSection;