import React from 'react';

const TimelineSection = ({ journey, title = "My Journey" }) => {
    return (
        <div className="mb-20">
            <h3 className="font-heading text-4xl font-bold text-text-primary text-center mb-12">
                {title}
            </h3>
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent-dark" />

                    <div className="space-y-8">
                        {journey.map((item, index) => (
                            <div key={index} className="relative flex items-start gap-6">
                                {/* Timeline dot */}
                                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent-dark rounded-full flex items-center justify-center shadow-lg z-10">
                                    <span className="text-2xl">{item.icon}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-accent-light/30">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="font-heading font-bold text-2xl text-primary">{item.year}</span>
                                        <h4 className="font-heading font-semibold text-xl text-text-primary">{item.title}</h4>
                                    </div>
                                    <p className="font-body text-text-body leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineSection;